import React, { useContext, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import BookingModal from '../BookingModal/BookingModal';
import Swal from 'sweetalert2';
import { MdLocationPin } from "react-icons/md"
import { BsFillPatchCheckFill } from "react-icons/bs";


const CatagoryWiseSingleProduct = ({ detail }) => {

    const [modal, setModal] = useState(null);

    const { img, productname, location, resaleprice, originalprice, yearsofuse, posttime, sellername, condition, status } = detail;
    // console.log(detail);

    const { user } = useContext(authContext);

    const handleModal = (detail) => {
        setModal(detail);
    }

    const handleWishList = (data) => {
        console.log(data);
        const wishList = {
            img,
            productname,
            resaleprice,


        }

        fetch('https://host-server.vercel.app/wishlist', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishList)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                Swal.fire({
                    text: 'Wow !! You Add the product to wishList '
                })
            })


        // console.log(wishList);
    }



    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
                <div className="flex space-x-4">
                    <img alt="" src={user.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <div className='flex' >
                            <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">{sellername}</a>
                            <span className='ml-1'>{status === 'Verified' && <BsFillPatchCheckFill className='text-blue-700 font-extrabold' ></BsFillPatchCheckFill>} </span>
                        </div>
                        <span className="text-xs dark:text-gray-400">{posttime}</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center' >
                        <img src={img} alt="" className=" w-44 h-full mb-4  " />
                    </div>
                    <h2 className="mb-1 text-xl font-semibold">{productname}</h2>

                </div>
                <div>
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Price/Time</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Resale Price:</td>
                                <td>Tk {resaleprice}.00</td>
                            </tr>
                            <tr>
                                <td>Original Price:</td>
                                <td>Tk {originalprice}.00</td>
                            </tr>
                            <tr>
                                <td>Years of Use:</td>
                                <td>{yearsofuse}</td>
                            </tr>
                            <tr>
                                <td>Condition:</td>
                                <td>{condition}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2 flex justify-center items-center ">
                        <button
                            onClick={handleWishList}
                            title='Wish List'
                            type="button"

                            className="flex items-center p-1 space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>

                        <div className='text-2xl flex justify-center items-center'>
                            <span><MdLocationPin></MdLocationPin></span><span>{location}</span>
                        </div>
                    </div>
                    <div>
                        {
                            detail.resaleprice && !detail.availability && <label onClick={() => handleModal(detail)} htmlFor="booking-modal" className="bg-gradient-to-r from-primary to-secondary px-8 py-2 text-white mt-4">Book Now</label>
                        }

                        {
                            detail.resaleprice && detail.availability && <label disable className="bg-black px-8 py-2 text-white mt-4">Sold Out</label>
                        }
                    </div>
                </div>
                {
                    modal && <BookingModal detail={detail} setModal={setModal} ></BookingModal>
                }
            </div>
        </div >
    );
};

export default CatagoryWiseSingleProduct;