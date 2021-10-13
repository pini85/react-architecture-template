import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { ROOT, LOGIN, DASHBOARD } from "./constants";
import { NotFound } from "./NotFound";

const Home = lazy(() => import("pages/Home/Home"));
const LoginContainer = lazy(() => import("auth/LoginContainer"));
const DashBoardPageContainer = lazy(() =>
  import("pages/DashboardPage/DashBoardPageContainer")
);

const RouterConfig = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {/* List all public routes here */}
      <Switch>
        <Route exact path={ROOT} component={Home} />
        <Route path={LOGIN}>
          <LoginContainer />
        </Route>

        {/* List all private/auth routes here */}
        <PrivateRoute path={DASHBOARD}>
          <DashBoardPageContainer />
        </PrivateRoute>

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default RouterConfig;
