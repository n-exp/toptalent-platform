import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/common/Button/Button';
import Chip from '../../components/common/Chip/Chip';
import Accordion from '../../components/common/controls/Accordion/Accordion';
import Divider from '../../components/common/Divider/Divider';
import { useSkillsData } from './hooks/useSkillsData';

import './SkillsPage.scss';

const SkillsPage = () => {
  const navigate = useNavigate();
  const { skills, tags, toggleSkill } = useSkillsData();

  return (
    <div className="skills-page uk-width-1-1 uk-width-5-6@s uk-margin-auto">
      <div className="skills-container uk-padding-small uk-padding-remove-vertical">
        {tags.length > 0 && (
          <div className="tags-list">
            <div className="title uk-margin">Selected tags</div>

            <div className="uk-grid-small uk-margin" uk-grid="">
              {tags.map(({ id, title, parentId }) => (
                <Chip
                  key={id}
                  id={id}
                  title={title}
                  isActive={true}
                  isSelected
                  onClick={(chipProps) => toggleSkill({ ...chipProps, parentId })}
                />
              ))}
            </div>

            <div className="expand-more uk-margin-bottom">See more</div>
          </div>
        )}

        <div className="skills-list">
          <div
            className="uk-flex uk-flex-between uk-margin uk-child-width-1-1 uk-child-width-auto@s uk-grid-collapse"
            uk-grid=""
          >
            <div className="title">Skills</div>
            <div>
              <Button variant="outlined" color="secondary">
                Change skill category
              </Button>
            </div>
          </div>

          {skills.map(({ id, category, items }) => (
            <div key={id} className="uk-margin">
              <Accordion title={category}>
                <div className="uk-grid-small uk-margin" uk-grid="">
                  {items.map(({ id: tagId, label, parentId, isActive }) => (
                    <Chip
                      key={tagId}
                      id={tagId}
                      title={label}
                      isActive={isActive}
                      onClick={(chipProps) => toggleSkill({ ...chipProps, parentId })}
                    />
                  ))}
                </div>

                <div className="expand-more uk-margin-bottom">See more</div>
              </Accordion>
            </div>
          ))}
        </div>
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
          <Link to="/schedule" className="uk-width-2-3 uk-width-3-4@s">
            <Button
              classes="uk-width-1-1 uk-padding-small uk-padding-remove-vertical uk-text-nowrap"
              color="secondary"
            >
              Next: Schedule
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
