import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../ContextProvider/ContextProvider";
import Loader from "../Loader/Loader";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    //navigate 
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;


};

export default PrivateRouter;