import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

type CheckoutSessionSuccess = {
  success: true;
  sessionId: string;
};

type CheckoutSessionError = {
  success: false;
  error: string;
};

type CheckoutSessionResult = CheckoutSessionSuccess | CheckoutSessionError;

export async function createCheckoutSession(
  plan: string,
  price: number,
  customerEmail: string
): Promise<CheckoutSessionResult> {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${plan} Plan`,
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${window.location.origin}/pricing`,
      customer_email: customerEmail,
    });

    return { success: true, sessionId: session.id };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create checkout session'
    };
  }
}

export async function verifyPayment(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      success: session.payment_status === 'paid',
      customer: session.customer,
      subscription: session.subscription,
    };
  } catch (error) {
    console.error('Payment verification error:', error);
    return { success: false, error: 'Failed to verify payment' };
  }
} 