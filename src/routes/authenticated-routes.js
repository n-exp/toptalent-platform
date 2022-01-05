import Route from './state/types';
import KPIsPage from '../pages/KPIs/KPIsPage';
import SignupPage from '../pages/Signup/SignupPage';
import LoginPage from '../pages/Login/LoginPage';
import ProjectDetailsPage from '../pages/ProjectDetails/ProjectDetailsPage';

const authenticatedRoutes = [
  {
    path: Route.SIGNUP,
    element: <SignupPage />
  },
  {
    path: Route.LOGIN,
    element: <LoginPage />
  },
  {
    path: Route.KPIS,
    element: <KPIsPage />
  },
  {
    path: Route.PROJECT_DETAILS,
    element: <ProjectDetailsPage />
  },
  {
    path: Route.NOT_FOUND,
    element: <div>Page not found</div>
  }
];

export default authenticatedRoutes;
