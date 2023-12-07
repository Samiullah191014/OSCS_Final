import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MmtPaEEVZHpyQqNpyOvmC3nhjjrRl5KvDPsKwblsHiVb7JXRbpOHkk8rnEgJzLxt4CD7hoKQPQ2DsIX6IkvCVMl00pS8iSovr"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
		
			<PaymentForm />
		</Elements>
	)
}






















// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import PaymentForm from "./PaymentForm";
// import "./StripePayment.css";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51MmtPaEEVZHpyQqNpyOvmC3nhjjrRl5KvDPsKwblsHiVb7JXRbpOHkk8rnEgJzLxt4CD7hoKQPQ2DsIX6IkvCVMl00pS8iSovr");

// export default function StripeContainer() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <PaymentForm />
//         </Elements>
//       )}
//     </div>
//   );
// }











