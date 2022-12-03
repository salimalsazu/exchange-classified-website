import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../../ContextProvider/ContextProvider';
import useAdmin from '../../../Hook/useAdmin';
import useTitle from '../../../Hook/useTitle';
import Loader from '../../../Loader/Loader';

const ListOfAdmin = () => {

    //dynamic title
    useTitle('List of Admin')

    const { user } = useContext(authContext);
    const navigate = useNavigate();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('exchange-token')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })


    if (isAdminLoading) {
        return <Loader></Loader>
    }

    if (!isAdmin) {
        navigate('/')
    }


    return (
        <div >
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListOfAdmin;