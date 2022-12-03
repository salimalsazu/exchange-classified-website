import React from 'react';


//loader 
const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="w-16 h-16 border border-blue-900 border-dashed  rounded-full animate-spin "></div>
        </div>
    );
};

export default Loader;