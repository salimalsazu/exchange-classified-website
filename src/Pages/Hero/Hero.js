import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-primary to-secondary rounded-md">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-7xl text-white">Largest online platform for </h1>
                        <p className='text-5xl mt-4 text-yellow-500 font-extrabold'> Buyers & Sellers</p>

                        <p className='text-5xl text-white mt-5' >for Exchanging the Device.</p>
                        <Link to="/login" ><button className="bg-blue-900 px-10 py-2 text-white mt-20">Join Comunity</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;