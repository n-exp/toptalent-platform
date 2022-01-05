import { Link, useNavigate } from 'react-router-dom';

import Route from '../../routes/state/types';
import Button from '../../components/common/Button/Button';
import Divider from '../../components/common/Divider';
import CheckboxField from '../../components/common/Inputs/Checkbox';
import { useProjectDetailsData } from './hooks/useProjectDetailsData';

import './ProjectDetails.scss';

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { projects, toggleProject } = useProjectDetailsData();

  return (
    <div className="project-details uk-width-1-1 uk-width-5-6@s uk-margin-auto">
      <div className="projects-list uk-padding-small uk-padding-remove-vertical">
        <div className="title uk-margin">Project Details</div>
        <div className="description">What type of project are you hiring for</div>

        {projects.map(({ id, name, isSelected }) => (
          <div key={id} className="uk-margin">
            <CheckboxField
              id={id}
              label={name}
              checked={isSelected}
              variant="outlined"
              onChange={toggleProject}
            />
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
          <Link to={Route.PROFESSIONALS_NEED} className="uk-width-2-3 uk-width-3-4@s">
            <Button
              classes="uk-padding-small uk-padding-remove-vertical uk-text-nowrap"
              color="secondary"
            >
              Next: Professionals Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
