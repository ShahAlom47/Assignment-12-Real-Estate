import { Navigate, useLocation } from "react-router-dom";
import useUser from "../../CustomHocks/useUser";
import LoadingRing from "../../SharedComponents/LoadingRing/LoadingRing";
import PropTypes from 'prop-types'; // ES6


const PrivetRouter = ({ children }) => {
    const { user, loading } = useUser();
    const location = useLocation()

    if (loading) {

        return <LoadingRing></LoadingRing>
    }
    if (user) {
        return (
        <> { children } </>)
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivetRouter;
PrivetRouter.propTypes={
    children: PropTypes.node.isRequired,
}