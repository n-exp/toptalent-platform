import KPIsPage from "../pages/KPIs/KPIsPage";
import Route from "./state/types";

const authenticatedRoutes = [
  {
    path: Route.KPIS,
    element: <KPIsPage />,
  },
  {
    path: Route.NOT_FOUND,
    element: <div>Page not found</div>,
  },
];

export default authenticatedRoutes;