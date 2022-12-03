import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Loader/Loader';
import Swal from 'sweetalert2'
import useTitle from '../../../Hook/useTitle';

const AllBuyer = () => {

    //dynamic title
    useTitle('All Buyer')


    const { data: buyer = [], isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/users/buyer');
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




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Change Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyer?.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={() => handleDelete(user)} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-lg'>Delete</button></td>
                                <td>
                                    {
                                        user?.role !== 'admin' && <button onClick={() => handdleMakeAdmin(user._id)} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-lg' >Make Admin</button>

                                    }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;