import React from 'react';
import Lottie from 'lottie-react';
import reader from './dashboard.json'

const HomeDashboard = () => {
    return (
        <div>

            <div className='flex  justify-center' >
                <Lottie className='w-2/3' animationData={reader} loop={true} />
            </div>
        </div>
    );
};

export default HomeDashboard;