import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import SingleMyProduct from './SingleMyProduct';
import { authContext } from '../../../ContextProvider/ContextProvider';
import useTitle from '../../../Hook/useTitle';

const MyProducts = () => {
    //dynamic title
    useTitle('My Product')

    const { user, logOut } = useContext(authContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://host-server.vercel.app/products?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('exchange-token')}`
            }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut();
                // }
                return res.json()
            })
            .then(data => setProducts(data));
    }, [user?.email, logOut]);



    const handleDelete = (user) => {
        fetch(`https://host-server.vercel.app/allproducts/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log(data);
                    const restProduct = products.filter(d => d._id !== user._id)
                    setProducts(restProduct);
                    Swal.fire({
                        text: 'Deleted Succefully'
                    })
                }
            })

    }



    return (
        <div>

            <div>

                <div >
                    <h1 className='text-3xl font-extrabold mb-5 text-center' >My Products</h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Availability</th>
                                    <th>Advertise</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    products?.map((user, index) => <SingleMyProduct user={user} index={index} key={user._id} handleDelete={handleDelete}  ></SingleMyProduct>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProducts;

