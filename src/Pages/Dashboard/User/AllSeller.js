import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2'
import Loader from '../../../Loader/Loader';
import useTitle from '../../../Hook/useTitle';

const AllSeller = () => {


    //dynamic title
    useTitle('All Seller')

    const { data: seller = [], isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/users/seller');
            const data = await res.json();
            return data;
        }
    })


    const handleDelete = (user) => {
        fetch(`https://host-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    console.log(data);
                    Swal.fire({
                        text: 'Deleted Succefully'
                    })
                }
            })
    }



    if (isLoading) {
        return <Loader></Loader>
    }


    const handdleMakeAdmin = id => {
        fetch(`https://host-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        text: 'Make Admin Succefully'
                    })
                }
            })
    }


    const handleVerified = (user) => {
        fetch(`https://host-server.vercel.app/users/seller/${user?._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                fetch(`https://host-server.vercel.app/users/verifyseller/${user?.email}`, {
                    method: 'PUT',
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.modifiedCount) {
                            Swal.fire({
                                text: 'Verified Succefully'
                            })
                        }
                    })

            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Change Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            seller?.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.status !== 'Verified' && <button onClick={() => handleVerified(user)} >Unverified</button>
                                    }
                                    {
                                        user?.status === 'Verified' && <p> Verified</p>
                                    }


                                </td>
                                <td>{user.role}</td>
                                <td><button onClick={() => handleDelete(user)} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-lg' >Delete</button></td>
                                <td>
                                    {
                                        user?.role !== 'admin' && <button onClick={() => handdleMakeAdmin(user._id)} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-lg' >Make Admin</button>

                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;