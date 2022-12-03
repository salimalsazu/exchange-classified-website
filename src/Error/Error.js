import React from 'react';
import Lottie from 'lottie-react';
import reader from './error.json'
import useTitle from '../Hook/useTitle';
const Error = () => {

    //dynamic title
    useTitle('Error')

    return (
        <div className='flex  justify-center items-center h-screen' >
            <Lottie className='w-1/2' animationData={reader} loop={true} />
        </div>
    );
};

export default Error;