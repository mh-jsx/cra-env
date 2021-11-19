import "./App.scss";
import PrivateRoute from "./Routes/PrivateRoute";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Index from "./Layout/Index";

function App() {
  const routes = [
    {
      path: "/",
      component: Login,
      exact: true,
    },
  ];

  return (
    <>
      <Index />

      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />

          {routes.map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
