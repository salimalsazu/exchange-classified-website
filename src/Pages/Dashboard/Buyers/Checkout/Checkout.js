import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../../Hook/useTitle';

const Checkout = ({ payment }) => {

    //dynamic title
    useTitle('Checkout')


    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const { price, email, _id, name, bookingid
    } = payment;
    console.log(payment);

    useEffect(() => {
        fetch('https://host-server.vercel.app/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || elements) {

        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error)
            setCardError(error.message);
        }
        else {
            setCardError('')
        }

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: name,
                    email,
                },
            },
        })

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }

        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            const payment = {
                price, transectionId: paymentIntent.id,
                email,
                paymentId: _id,
                bookingid
            }
            fetch('https://host-server.vercel.app/payments', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.result.insertedId) {
                        setSuccess('Congrats! Your Payment Completed')
                        setTransectionId(paymentIntent.id)
                        toast.success('Congrats! Your Payment Completed')
                    }
                })
        }
        setProcessing(false);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=' btn btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-600' >{cardError}</p>
            {
                success && <>
                    <p className='text-gray-600'>{success}</p>
                    <p className='text-gray-600'><span>Your Transection ID:</span><span className='font-bold' >{transectionId}</span></p>
                </>
            }
            <Toaster></Toaster>
        </>
    );
};

export default Checkout;


