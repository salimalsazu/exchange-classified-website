import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout/Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const MyPayment = () => {

    const payment = useLoaderData();
    // console.log(payment);




    return (
        <div>
            <div>
                <h3>Payment for <span className='font-bold' >{payment.productname}</span></h3>

                <p>Please pay Tk <span className='font-bold'>{payment.price}.00</span> for your booking Product</p>
            </div>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout payment={payment}  ></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default MyPayment;