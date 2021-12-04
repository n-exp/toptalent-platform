import Button from "../../components/common/Button/Button";
import RadioField from "../../components/common/Inputs/Radio";
import KPIsForm from "./components/KPIsForm/KPIsForm";

import "./KPIsPage.scss";

const radios = [
  "Less then 1 month",
  "1-4 months",
  "5-12 months",
  "More then 12 months",
  "I will decide later",
];

const KPIsPage = () => {
  return (
    <div className="kpis-page">
      <div className="header uk-margin-medium">
        Please select KPIs that you want this person to fulfill:
      </div>

      <KPIsForm />

      <hr />

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
      <div>
        {radios.map((radio) => (
          <RadioField label={radio} />
        ))}
        </div>
    </div>
  );
};

export default KPIsPage;
