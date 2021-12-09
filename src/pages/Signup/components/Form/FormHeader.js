import Button from '../../../../components/common/Button/Button';
import Divider from '../../../../components/common/Divider/Divider';

import './FormHeader.scss';

const FormHeader = () => {
  return (
    <div className="signin-form-header">
      <Button id="linkedin" classes="uk-width-expand uk-margin" color="secondary" size="large">
        Sign in with Linkedin
      </Button>
      <div className="description uk-padding-small">
        By clicking Sign in with linkedin, you agree to let Topptalent store your Linkedin Profile
      </div>
      <div className="uk-padding" uk-grid="">
        <div className="uk-width-expand uk-margin-auto-vertical">
          <Divider />
        </div>
        <div className="uk-width-auto">Or</div>
        <div className="uk-width-expand uk-margin-auto-vertical">
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
