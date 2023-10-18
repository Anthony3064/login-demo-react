import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../../contexts/UseAuthContext"
import { EMPTY } from "../../config/routes/paths";
import PropTypes from 'prop-types'
export const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext()
    if (!isAuthenticated) {
        return <Navigate to={EMPTY} />
    }
    return children ? children : <Outlet />;
}

PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute
