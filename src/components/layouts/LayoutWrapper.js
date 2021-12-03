import Layout from "./Layout";
import AppContainer from "./LayoutContainer";
import KPIsPage from "../../pages/KPIs/KPIsPage";

const LayoutWrapper = () => {
  return (
    <div className="layout-wrapper" uk-height-viewport="">
      <Layout />

      <AppContainer>
        <KPIsPage />
      </AppContainer>
    </div>
  );
};

export default LayoutWrapper;
