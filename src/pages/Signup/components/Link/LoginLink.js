import { Link } from 'react-router-dom';

import Route from '../../../../routes/state/types';

import './LoginLink.scss';

const LoginLink = () => {
  return (
    <div className="login-link-container uk-width-expand">
      <div className="link uk-container uk-container-large uk-margin-small-right uk-flex uk-flex-right uk-flex-wrap">
        <span>Already have an account?</span>
        <Link className="uk-link-text" to={Route.LOGIN}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LoginLink;
