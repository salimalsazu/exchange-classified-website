import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const LeftSidebar = () => {
    return (
        <div className='flex flex-col lg:flex-row'  >
            <aside className='h-screen lg:sticky lg:top-0'>
                <Dashboard></Dashboard>
            </aside>
            <main className='mx-auto mt-10 w-full'>
                <Outlet></Outlet>
            </main>
        </div>

    );
};

export default LeftSidebar;