import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../ContextProvider/ContextProvider";
import useAdmin from "../Hook/useAdmin";
import Loader from "../Loader/Loader";

const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    //navigate 
    if (!user && isAdmin) {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    else {
        return children;
    }


};

export default AdminRouter;

