import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const stripeHandleClick = async (event) => {
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: process.env.NEXT_PUBLIC_STRIPE_PLAN_ID,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    successUrl: `${process.env.NEXT_PUBLIC_ROOT_URL}/success`,
    cancelUrl: `${process.env.NEXT_PUBLIC_ROOT_URL}`,
  })
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
}

export default stripeHandleClick
