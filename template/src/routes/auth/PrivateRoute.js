import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { LOGIN } from "../constants";

// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  //get redux auth
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN,
              state: {
                from: location,
                message: "You must be logged in to see this",
              },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
