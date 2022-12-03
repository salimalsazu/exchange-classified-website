import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Error/ErrorElement";
import Login from "../Pages/Contact/Login/Login";
import Reg from "../Pages/Contact/Registration/Reg";
import MyOrder from "../Pages/Dashboard/Buyers/MyOrder";
import MyProfile from "../Pages/Dashboard/Buyers/MyProfile";
import WishList from "../Pages/Dashboard/Buyers/WishList";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import EditProduct from "../Pages/Dashboard/Seller/EditProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import ListOfAdmin from "../Pages/Dashboard/User/ListOfAdmin";
import Home from "../Pages/Home/Home";
import LeftSidebar from "../Pages/LeftSidebar/LeftSidebar";
import Main from "../Pages/Main/Main";
import Categories from "../Pages/Categories/Categories";
import AddCategory from "../Pages/Dashboard/Seller/AddCategory";
import CategoriesDetails from "../Pages/Categories/CategoriesDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import MyPayment from "../Pages/Dashboard/Buyers/MyPayment";
import Blog from "../Pages/Blog/Blog";
import AllBuyer from "../Pages/Dashboard/User/AllBuyer";
import AllSeller from "../Pages/Dashboard/User/AllSeller";
import Error from "../Error/Error";
import HomeDashboard from "../Pages/Dashboard/HomeDashboard";
import AdminRouter from "../Admin Router/AdminRouter";
import SellerRouter from "../SellerRouter/SellerRouter";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/categories/:categoryid',
                loader: ({ params }) => fetch(`https://host-server.vercel.app/products/${params.categoryid}`),
                element: <PrivateRouter><CategoriesDetails></CategoriesDetails></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <PrivateRouter><LeftSidebar></LeftSidebar></PrivateRouter>,
                children: [
                    {
                        path: '/dashboard',
                        element: <HomeDashboard></HomeDashboard>
                    },
                    {
                        path: '/dashboard/listofadmin',
                        element: <AdminRouter><ListOfAdmin></ListOfAdmin></AdminRouter>
                    },
                    {
                        path: '/dashboard/allbuyer',
                        element: <AllBuyer></AllBuyer>
                    },
                    {
                        path: '/dashboard/allseller',
                        element: <AllSeller></AllSeller>
                    },
                    {
                        path: '/dashboard/addcategory',
                        element: <AddCategory></AddCategory>
                    },
                    {
                        path: '/dashboard/addproduct',
                        element: <SellerRouter><AddProduct></AddProduct></SellerRouter>
                    },
                    {
                        path: '/dashboard/editproduct',
                        element: <EditProduct></EditProduct>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <MyProducts></MyProducts>
                    },
                    {
                        path: '/dashboard/mybuyers',
                        element: <MyBuyers></MyBuyers>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrder></MyOrder>
                    },
                    {
                        path: '/dashboard/myprofile',
                        element: <MyProfile></MyProfile>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <WishList></WishList>
                    },
                    {
                        path: '/dashboard/mypayment/:id',
                        loader: ({ params }) => fetch(`https://host-server.vercel.app/bookings/${params.id}`),
                        element: <MyPayment></MyPayment>
                    }
                ]
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])