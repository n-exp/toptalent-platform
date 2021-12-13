import Modal from '../../components/common/Modal/Modal';
import KPIsForm from './components/KPIsForm/KPIsForm';
import Divider from '../../components/common/Divider';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Pin from '../../components/common/Inputs/Pin/Pin';

import './KPIsPage.scss';

const KPIsPage = () => {
  return (
    <div className="kpis-page">
      <div className="header uk-margin-medium">
        Please select KPIs that you want this person to fulfill:
      </div>

      <KPIsForm />

      <Divider />
      <Divider type="primary" text="Valentin" />
      <Divider type="default" />
      <div className="uk-width-expand uk-flex uk-flex-center">
        <Pin />
      </div>

      <div className="uk-width-1-1 uk-width-1-2@s">
        <Card />
      </div>

      <Button type="secondary" size="large">
        Register account
      </Button>

      <Divider />
      <div className="uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
        <div className="uk-flex uk-flex-center uk-flex-right@s">
          <Button
            classes="uk-width-2-3 uk-width-3-4@s uk-padding-small uk-padding-remove-vertical"
            variant="outlined"
            color="secondary"
          >
            Back
          </Button>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-left@s">
          <Button
            classes="uk-width-2-3 uk-width-3-4@s uk-padding-small uk-padding-remove-vertical"
            color="secondary"
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
