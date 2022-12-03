import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { authContext } from '../../../ContextProvider/ContextProvider';
import useTitle from '../../../Hook/useTitle';

const MyOrder = () => {

    //dynamic title
    useTitle('My Order')


    const { user } = useContext(authContext);

    const [response, setResponse] = useState(null);

    const fetchQuotes = async () => {
        try {
            const res = await axios.get(`https://host-server.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('exchange-token')}`
                },
                params: {},
            });
            setResponse(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    // console.log(response);

    return (
        <div>
            <h1 className='text-4xl font-extrabold my-5 text-center uppercase' >My Orders</h1>
            <div >
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                response?.map((user, index) => <tr>
                                    <th>{index + 1}</th>
                                    <th><img className='w-10' src={user.img} alt="" /></th>
                                    <td>{user.productname}</td>
                                    <td>{user.price}</td>
                                    <td>{user.name}</td>
                                    <td>{user.mobile}</td>
                                    <td>

                                        {
                                            user?.price && !user?.paid && <Link to={`/dashboard/mypayment/${user._id}`} > <button className='btn btn-sm bg-gradient-to-r from-primary to-secondary text-white' >pay</button> </Link>
                                        }

                                        {
                                            user?.price && user?.paid && <p className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-lg'> Paid </p>
                                        }

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;

