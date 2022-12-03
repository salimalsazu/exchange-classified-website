import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../ContextProvider/ContextProvider";
import useAdmin from "../Hook/useAdmin";
import useSeller from "../Hook/useSeller";
import Loader from "../Loader/Loader";

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();


    if (loading || isAdminLoading || isSellerLoading) {
        return <Loader></Loader>
    }
    //navigate 
    if (!user && isAdmin && isSeller) {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    else {
        return children;
    }

};

export default SellerRouter;
