import axios from 'axios';

// M-Pesa API endpoints
const MPESA_AUTH_URL = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const MPESA_STK_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

type MpesaPaymentSuccess = {
  success: true;
  message: string;
  checkoutRequestID: string;
};

type MpesaPaymentError = {
  success: false;
  message: string;
};

type MpesaPaymentResult = MpesaPaymentSuccess | MpesaPaymentError;

async function getAccessToken() {
  const auth = Buffer.from(
    `${import.meta.env.VITE_MPESA_CONSUMER_KEY}:${import.meta.env.VITE_MPESA_CONSUMER_SECRET}`
  ).toString('base64');
  
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

export async function initiateMpesaPayment(
  phone: string,
  amount: number,
  plan: string,
  email: string
): Promise<MpesaPaymentResult> {
  try {
    const accessToken = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(
      `${import.meta.env.VITE_MPESA_BUSINESS_SHORT_CODE}${import.meta.env.VITE_MPESA_PASSKEY}${timestamp}`
    ).toString('base64');

    const stkPushRequest = {
      BusinessShortCode: import.meta.env.VITE_MPESA_BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: import.meta.env.VITE_MPESA_BUSINESS_SHORT_CODE,
      PhoneNumber: phone,
      CallBackURL: import.meta.env.VITE_MPESA_CALLBACK_URL,
      AccountReference: `${plan} Plan - ${email}`,
      TransactionDesc: `Payment for ${plan} Plan`,
    };

    const response = await axios.post(MPESA_STK_URL, stkPushRequest, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.ResponseCode === '0') {
      return {
        success: true,
        message: 'M-Pesa payment initiated successfully',
        checkoutRequestID: response.data.CheckoutRequestID,
      };
    } else {
      return {
        success: false,
        message: response.data.ResponseDescription || 'Failed to initiate M-Pesa payment',
      };
    }
  } catch (error) {
    console.error('M-Pesa error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to initiate M-Pesa payment',
    };
  }
} 