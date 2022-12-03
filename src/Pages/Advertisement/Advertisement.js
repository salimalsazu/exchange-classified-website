import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleAd from './SingleAd';
import banner from '../../Assets/banner/ads banner.png'
import Loader from '../../Loader/Loader';

const Advertisement = () => {

    const { data: ads = [], isLoading } = useQuery({
        queryKey: ['ads'],
        queryFn: async () => {
            const res = await fetch('https://host-server.vercel.app/ads');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='mt-20 mb-20'>
            {
                ads.length > 0 &&
                <div className='flex flex-col justify-center items-center gap-5' >
                    <img src={banner} alt="" />
                    {
                        ads.map(ad => <SingleAd ad={ad} key={ad._id} ></SingleAd>)
                    }
                </div>
            }
        </div>
    );
};

export default Advertisement;