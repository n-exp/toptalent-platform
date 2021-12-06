import Modal from '../../components/common/Modal/Modal';
import KPIsForm from './components/KPIsForm/KPIsForm';
import Divider from '../../components/common/Divider/Divider';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';

import './KPIsPage.scss';

const KPIsPage = () => {
  return (
    <div className="kpis-page">
      <div className="header uk-margin-medium">
        Please select KPIs that you want this person to fulfill:
      </div>

      <KPIsForm />
      <div className="uk-width-1-1 uk-width-1-2@s">
        <Card />
      </div>

      <Divider />

      <div className="uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
        <div className="uk-flex uk-flex-center uk-flex-right@s">
          <Button
            classes="uk-width-2-3 uk-width-3-4@s uk-padding-small uk-padding-remove-vertical"
            variant="outlined"
            type="secondary"
          >
            Back
          </Button>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-left@s">
          <Button
            classes="uk-width-2-3 uk-width-3-4@s uk-padding-small uk-padding-remove-vertical"
            type="secondary"
          >
            Next: Project Details
          </Button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default KPIsPage;
