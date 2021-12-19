import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import roles from "./helpers/roles";
import AccountPage from "./Pages/AccountPage";

import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import PaginaNoEncontrada from "./Pages/PaginaNoEncontrada";

import Proyectos from "./proyectos/Proyectos";
import Inscripciones from "./inscripciones/Inscripciones";
import Avances from "./avances/Avances";
import Usuarios from "./usuarios/Usuarios";



import RegisterPage from "./Pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "./helpers/routes";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PublicRoute exact path={routes.login} component={Login} />
          <PublicRoute exact path={routes.register} component={RegisterPage} />
          <PrivateRoute exact path={routes.account} component={AccountPage} />
          <PrivateRoute exact path={routes.proyectos} component={Proyectos} />
          <PrivateRoute exact path={routes.avances} component={Avances} />
          <PrivateRoute exact path={routes.inscripciones} component={Inscripciones} />
          <PrivateRoute exact path="/proyectos/:proyectoid" component={Proyectos} />
          <PrivateRoute hasRole={roles.admin} exact path={routes.admin.usuarios} component={Usuarios} />

          <Route exact path="*" component={PaginaNoEncontrada} />
        </Switch>
      </Layout>
    </Router>
  );
}
