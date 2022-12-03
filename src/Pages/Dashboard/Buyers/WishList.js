import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../Hook/useTitle';

const WishList = () => {

    //dynamic title
    useTitle('Wish list')

    const { data: wishlist = [], } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/wishlist');
            const data = await res.json();
            return data;
        }
    })
    // console.log(wishlist);


    return (
        <div>

            <div >
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                wishlist?.map((user, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td><img className='w-10' src={user.img} alt="" /></td>
                                    <td>{user.productname}</td>
                                    <td>{user.resaleprice}</td>
                                    <td><button className='btn btn-sm' >pay</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default WishList; <h1>WishList</h1>