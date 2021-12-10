import { Link } from 'react-router-dom';

import CheckboxField from '../../../../components/common/Inputs/Checkbox';
import Route from '../../../../routes/state/types';

import './FormFooter.scss';

const FormFooter = ({ checked, onChange }) => (
  <div className="login-form-footer uk-flex uk-flex-between uk-flex-middle uk-margin-medium-bottom">
    <CheckboxField id="remember" label="Remember me" checked={checked} onChange={onChange} />

    <Link to={Route.FORGOT} className="footer-link">
      Forgot password?
    </Link>
  </div>
);

export default FormFooter;
