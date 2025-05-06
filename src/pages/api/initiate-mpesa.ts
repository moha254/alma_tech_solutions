import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// M-Pesa API endpoints
const MPESA_AUTH_URL = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const MPESA_STK_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

// M-Pesa credentials
const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY!;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET!;
const BUSINESS_SHORT_CODE = process.env.MPESA_BUSINESS_SHORT_CODE!;
const PASSKEY = process.env.MPESA_PASSKEY!;
const CALLBACK_URL = process.env.MPESA_CALLBACK_URL!;

async function getAccessToken() {
  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  
  try {
    const response = await axios.get(MPESA_AUTH_URL, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('M-Pesa auth error:', error);
    throw new Error('Failed to get M-Pesa access token');
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { phone, amount, plan, email } = req.body;

    // Get M-Pesa access token
    const accessToken = await getAccessToken();

    // Generate timestamp
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${BUSINESS_SHORT_CODE}${PASSKEY}${timestamp}`).toString('base64');

    // Prepare STK push request
    const stkPushRequest = {
      BusinessShortCode: BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: BUSINESS_SHORT_CODE,
      PhoneNumber: phone,
      CallBackURL: CALLBACK_URL,
      AccountReference: `${plan} Plan - ${email}`,
      TransactionDesc: `Payment for ${plan} Plan`,
    };

    // Initiate STK push
    const response = await axios.post(MPESA_STK_URL, stkPushRequest, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.ResponseCode === '0') {
      res.status(200).json({
        success: true,
        message: 'M-Pesa payment initiated successfully',
        checkoutRequestID: response.data.CheckoutRequestID,
      });
    } else {
      throw new Error('Failed to initiate M-Pesa payment');
    }
  } catch (error) {
    console.error('M-Pesa error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to initiate M-Pesa payment',
    });
  }
} 