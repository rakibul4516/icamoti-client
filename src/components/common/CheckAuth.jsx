import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const CheckAuth = ({ isAuthenticated, user, children }) => {
    const location = useLocation();

    if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        return <Navigate to='/auth/login' replace />;
    }

    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (user?.role === 'admin') {
            return <Navigate to='/admin/dashboard' replace />;
        } else {
            return <Navigate to='/shop/home' replace />;
        }
    }

    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
        return <Navigate to='/unauth-page' replace />;
    }

    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
        return <Navigate to='/admin/dashboard' replace />;
    }

    return <>{children}</>;
};

CheckAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        role: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
};

export default CheckAuth;


