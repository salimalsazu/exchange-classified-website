import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../ContextProvider/ContextProvider';
import logo from '../../../Assets/logo/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(authContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.error(err))
    }

    const navBar = <React.Fragment>
        {user?.uid || user?.email ?
            <><li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/categories" >Categories</Link></li>
                <li><Link to="/blogs" >Blogs</Link></li>
                <li><Link to="/" ><button onClick={handleSignOut}>Signout</button></Link></li>
                <li><Link className='bg-gradient-to-r from-primary to-secondary rounded-sm text-white ' to="/dashboard" >Deashboard</Link></li></>

            :
            <>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/categories" >Categories</Link></li>
                <li><Link to="/blogs" >Blogs</Link></li>
                <li><Link to="/login" >Login</Link></li>
            </>


        }

    </React.Fragment>


    return (
        <div className='text-black'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-slate-50 text-gray-600">
                            {navBar}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to="/" className="w-20"><img src={logo} alt="" /></Link>
                        <p><span className='text=2xl font-extrabold ml-1' >Exchnage.com</span></p></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        {navBar}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;