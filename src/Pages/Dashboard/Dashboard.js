import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import useAdmin from '../../Hook/useAdmin';
import useSeller from '../../Hook/useSeller';
import useTitle from '../../Hook/useTitle';

const Dashboard = () => {

    //dynamic title
    useTitle('Dashboard')

    const { user } = useContext(authContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const users = <>

        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/listofadmin' >List of Admin</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/allbuyer' >All Buyers</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/allseller' >All Seller</Link>
    </>

    const seller = <>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/addcategory'>Add Category</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/addproduct' >Add Product</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/editproduct'  >Edit Product</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/myproducts' >My Products</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/mybuyers' >My Buyers</Link>
    </>

    const buyer = <>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/myorders' >My Orders</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/wishlist' >WishList</Link>
    </>


    return (
        <div>
            <aside className="w-full p-6 sm:w-60 bg-gradient-to-r from-primary to-secondary text-white mt-10">
                <div className="flex items-center mb-2 ">
                    <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full mr-2 " />
                    <div className='ml-2 text-start'>
                        <h2 className="text-md font-semibold">{user.displaName ? user.displaName : "Name not found"}</h2>
                        <h2 className="text-xs font-semibold">{user.email}</h2>
                        <span className="flex items-center mt-2">
                            <Link to="/dashboard/myprofile" rel="noopener noreferrer" className="text-xs hover:underline text-white">View profile</Link>
                        </span>
                    </div>

                </div>
                <nav className="space-y-8 text-sm mt-5">
                    <hr />
                    {
                        isAdmin && <>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracking-widest uppercase ">Users</h2>
                                <div className="flex flex-col space-y-1">
                                    {users}
                                </div>
                            </div>
                            <hr />
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracking-widest uppercase ">Seller</h2>
                                <div className="flex flex-col space-y-1">
                                    {seller}
                                </div>
                            </div>

                        </>
                    }
                    {
                        isSeller && <>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracking-widest uppercase ">Seller</h2>
                                <div className="flex flex-col space-y-1">
                                    {seller}
                                </div>
                            </div>
                        </>
                    }
                    <hr />
                    {
                        !isSeller && <>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracking-widest uppercase ">Buyer</h2>
                                <div className="flex flex-col space-y-1">
                                    {buyer}
                                </div>
                            </div>
                        </>
                    }

                </nav>
            </aside>
        </div>
    );
};

export default Dashboard;