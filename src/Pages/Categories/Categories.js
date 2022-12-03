import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Loader/Loader';
import Category from './Category';

const Categories = () => {

    //fetch 
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h1 className=' text-4xl my-20'>Product Categories</h1>
            <div className='flex justify-center items-center gap-10'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        categories.map(category => <Category category={category} key={category._id} ></Category>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Categories;