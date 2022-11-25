import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const PrivateRoutes = ({children}) => {

    const { user } = useContext(authContext);

    if (user) {
        return {children}
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;