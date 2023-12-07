// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
// import React, {useState } from 'react'
// import {BsArrowLeft} from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom'


// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#fff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }

// const PaymentForm=()=> {
    
//     const [success, setSuccess ] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()
//     const location = useLocation()
//   const searchParams = new URLSearchParams(location.search)
//   const total = searchParams.get('total')



//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })


//     if(!error) {
//         try {
//             const {id} = paymentMethod
//             const response = await axios.post("http://localhost:4000/payment", {
//                 amount: total*100,
//                 id
//             })

//             if(response.data.success) {
//                 console.log("Successful payment")
//                 setSuccess(true)
//             }

//         } catch (error) {
//             console.log("Error", error)
//         }
//     } else {
//         console.log(error.message)
//     }
// }


// function hideDef() {
    
//     document.getElementById("text").style.display = "none";
// }



//     return (
//         <>
//         <h2 className="text-center" id="text" style={{display:'block'}}> Add your card detail here to proceed to checkout 👇</h2>
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col col-md-6 offset-md-3 paycol">
//                 {!success ? 
//         <form onSubmit={handleSubmit} >
//             <fieldset className="FormGroup">
//                 <div className="FormRow">
//                     <CardElement options={CARD_OPTIONS}/>
//                 </div>
//             </fieldset>
            
//             <button className="paybtn " id="paybtn" onClick={hideDef} >PAY</button>
            
//         </form>
//         :
//        <div>
//            <h2 className="text-green">You just bought a course, congrats this is the best decision of you're life, We will notify you on eamil soon.</h2>
//            <Link to="/courses"><span><BsArrowLeft className="fs-2 fw-bold text-green"/></span></Link>
//        </div> 
//         }
//                 </div>
//             </div>
//         </div>
       



       
            
//         </>
//     )
// }

// export default PaymentForm   




















// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import axios from "axios";
// import React, { useState } from 'react';
// import { BsArrowLeft } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
// import emailjs from 'emailjs-com';

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#fff",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": { color: "#fce883" },
//       "::placeholder": { color: "#87bbfd" }
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee"
//     }
//   }
// };

// const PaymentForm = () => {

//   const [success, setSuccess] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const total = searchParams.get('total');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement)
//     });

//     if (!error) {
//       try {
//         const { id } = paymentMethod;
//         const response = await axios.post("http://localhost:4000/payment", {
//           amount: total * 100,
//           id
//         });

//         if (response.data.success) {
//           console.log("Successful payment");
//           setSuccess(true);
//           sendEmailNotification();
//         }
//       } catch (error) {
//         console.log("Error", error);
//       }
//     } else {
//       console.log(error.message);
//     }
//   };

//   function hideDef() {
//     document.getElementById("text").style.display = "none";
//   }

//   const sendEmailNotification = async () => {
//     try {
//       const templateParams = {
//         to_email: 'samikhan191014@gmail.com', 
//         from_name: 'Course-Buyer', 
//         message: 'Someone has made a successful payment for the course.',
//         to_name: 'Samiullah',
//         reply_to: 'Thanks for buying our course, we will provide you the course material soon',
//         user_email: 'buyer@gmail.com',
//       };

//       await emailjs.send(
//         'service_ijcx0yi', 
//         'template_r830ixq', 
//         templateParams,
//         'EWJ0JD9Lg9IPhMzib' 
//       );

//       console.log('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <>
//       <h2 className="text-center" id="text" style={{ display: 'block' }}> Add your card detail here to proceed to checkout 👇</h2>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col col-md-6 offset-md-3 paycol">
//             {!success ?
//               <form onSubmit={handleSubmit} >
//                 <fieldset className="FormGroup">
//                   <div className="FormRow">
//                     <CardElement options={CARD_OPTIONS} />
//                   </div>
//                 </fieldset>

//                 <button className="paybtn " id="paybtn" onClick={hideDef} >PAY</button>

//               </form>
//               :
//               <div>
//                 <h2 className="text-green">You just bought a course, congrats this is the best decision of your life. We will notify you by email soon.</h2>
//                 <Link to="/courses"><span><BsArrowLeft className="fs-2 fw-bold text-green" /></span></Link>
//               </div>
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentForm;




















































//This one is correct 👇


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { useNavigate } from 'react-router-dom';


const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const total = searchParams.get("total");
  const images = searchParams.get("images");
  const course = searchParams.get("course");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          // amount: total * 100,
          amount: total * 100,
          id,
          images,
          course,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          sendEmailNotification();
          const existingData = JSON.parse(localStorage.getItem("courseData")) || [];

          // Create a new object with the image and instructor information
          const newData = {
            image: images,
            course: course,
          };
        
          // Add the new data to the existing array
          const updatedData = [...existingData, newData];
        
          // Store the updated array in local storage
          localStorage.setItem("courseData", JSON.stringify(updatedData));
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  function hideDef() {
    document.getElementById("text").style.display = "none";
  }

  const sendEmailNotification = async () => {
    try {
      const templateParams = {
        to_email: "samikhan191014@gmail.com",
        from_name: "Course-Buyer",
        message: "Someone has made a successful payment for the course.",
        to_name: "Samiullah",
        reply_to:
          "Thanks for buying our course, we will provide you the course material soon",
        user_email: "buyer@gmail.com",
      };

      await emailjs.send(
        "service_ijcx0yi",
        "template_r830ixq",
        templateParams,
        "EWJ0JD9Lg9IPhMzib"
      );

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <h2 className="text-center" id="text" style={{ display: "block" }}>
        Add your card detail here to proceed to checkout 👇
      </h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-md-6 offset-md-3 paycol">
            {!success ? (
              <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>

                <button className="paybtn " id="paybtn" onClick={hideDef}>
                  PAY
                </button>
              </form>
            ) : (
              <div>
                <h2 className="text-green">
                  You just bought a course, congrats this is the best decision of your life. We will notify you by
                  email soon.
                </h2>
                <Link to="/courses">
                  <span>
                    <BsArrowLeft className="fs-2 fw-bold text-green" />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;



