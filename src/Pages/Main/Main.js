import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {

    return (
        <div className='lg:mx-24'>
            <div >
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='mt-40'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;