import {Route, Redirect} from "react-router-dom";
import {useAuthContext} from "../Context/authContext";

// Wrapper for Route component that checks if user is authenticated
const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useAuthContext();

  return (
    <>
      {true ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};

export default PrivateRoute;
