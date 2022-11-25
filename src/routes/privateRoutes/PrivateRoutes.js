import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const PrivateRoutes = ({children}) => {
    const location = useLocation();

    const { user, loading } = useContext(authContext);

    if(loading) {
        return <h1 className='text-5xl'>Loading...</h1>
    }

    if (user) {
        return {children};
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;