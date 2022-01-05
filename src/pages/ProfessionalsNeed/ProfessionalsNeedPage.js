import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button/Button';
import Accordion from '../../components/common/controls/Accordion/Accordion';
import Divider from '../../components/common/Divider';
import RadioField from '../../components/common/Inputs/Radio';
import Route from '../../routes/state/types';
import { useProfessionalsNeedData } from './hooks/useProfessionalsNeedData';

import './ProfessionalsNeed.scss';

const ProfessionalsNeedPage = () => {
  const navigate = useNavigate();
  const { details, updateDetail } = useProfessionalsNeedData();

  return (
    <div className="professionals-need uk-width-1-1 uk-width-5-6@s uk-margin-auto">
      <div className="professionals-list uk-padding-small uk-padding-remove-vertical">
        <div className="title uk-margin">Professional's Details</div>

        {details.map(({ id, category, activeOption, items }) => (
          <div key={id} className="uk-margin">
            <Accordion title={category}>
              {items.map(({ id: categoryId, label }) => (
                <RadioField
                  key={categoryId}
                  id={categoryId}
                  label={label}
                  checked={activeOption === categoryId}
                  onChange={(detailProps) => updateDetail({ ...detailProps, parentId: id })}
                />
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <Divider classes="uk-margin-large" />

      <div className="uk-child-width-1-1 uk-child-width-1-2@s" uk-grid="">
        <div className="uk-flex uk-flex-center uk-flex-right@s">
          <Button
            classes="uk-width-2-3 uk-width-3-4@s uk-padding-small uk-padding-remove-vertical uk-text-nowrap"
            variant="outlined"
            color="secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
        <div className="uk-flex uk-flex-center uk-flex-left@s">
          <Link to={Route.SKILLS} className="uk-width-2-3 uk-width-3-4@s">
            <Button
              classes="uk-width-1-1 uk-padding-small uk-padding-remove-vertical uk-text-nowrap"
              color="secondary"
            >
              Next: Skills
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsNeedPage;
