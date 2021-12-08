import Route from './state/types';
import KPIsPage from '../pages/KPIs/KPIsPage';
import SignupPage from '../pages/Signup/SignupPage';

const authenticatedRoutes = [
  {
    path: Route.KPIS,
    element: <KPIsPage />
  },
  {
    path: Route.SIGNUP,
    element: <SignupPage />
  },
  {
    path: Route.NOT_FOUND,
    element: <div>Page not found</div>
  }
];

export default authenticatedRoutes;
