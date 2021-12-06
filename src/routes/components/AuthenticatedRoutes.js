import { Route, Routes } from "react-router";
import authenticatedRoutes from "../authenticated-routes";

const renderedRoutes = authenticatedRoutes.map((route) => (
  <Route key={route.path} {...route} />
));

const AuthenticatedRoutes = () => <Routes>{renderedRoutes}</Routes>;

export default AuthenticatedRoutes;
