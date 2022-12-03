import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import Swal from 'sweetalert2'


const BookingModal = ({ detail, setModal }) => {

    const { productname, resaleprice, img, _id } = detail;
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { user } = useContext(authContext);



    const handleBookingModal = (data) => {
        const booking = {
            name: data.name,
            email: data.email,
            productname: data.item,
            price: data.price,
            mobile: data.mobile,
            location: data.location,
            img,
            bookingid: _id
        }


        fetch('https://host-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/dashboard/myorders');
                Swal.fire({
                    text: 'Succeffully Booked'
                })
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setModal(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit(handleBookingModal)} novalidate="" action="" className="flex flex-col w-full  p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  bg-blue-600 text-white">

                        <label for="password" className="self-start mt-3 text-xs font-semibold">Name</label>
                        <input defaultValue={user.displayName} {...register('name', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" readOnly />


                        <label for="username" className="self-start text-xs font-semibold"> Email</label>
                        <input defaultValue={user.email} {...register('email', { required: 'Field is required' })} className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2" readOnly />

                        <label className="self-start mt-3 text-xs font-semibold">Item Name</label>
                        <input defaultValue={productname}  {...register('item', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" readOnly />

                        <label className="self-start mt-3 text-xs font-semibold">Price</label>
                        <input defaultValue={resaleprice} {...register('price', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" readOnly />

                        <label for="password" className="self-start mt-3 text-xs font-semibold">Mobile No</label>
                        <input {...register('mobile', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                        <label for="password" className="self-start mt-3 text-xs font-semibold">Location</label>
                        <input {...register('location', { required: 'Field is required' })} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />
                        <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 ">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;