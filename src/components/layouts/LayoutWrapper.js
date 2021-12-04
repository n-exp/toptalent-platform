import AuthenticatedRoutes from "../../routes/components/AuthenticatedRoutes";
import Layout from "./Layout";
import AppContainer from "./LayoutContainer";

const LayoutWrapper = () => {
  return (
    <div className="layout-wrapper" uk-height-viewport="">
      <Layout />

      <AppContainer>
        <AuthenticatedRoutes />
      </AppContainer>
    </div>
  );
};

export default LayoutWrapper;
