import clsx from 'clsx';
import { Link } from 'react-router-dom';

import AuthContainerFormButtons from './components/AuthContainerFormButtons';
import AuthContainerFormInputs from './components/AuthContainerFormInputs';

import './index.scss';

const Authcontainer = ({ title, description, header, error, form, footer, onSubmit }) => {
  return (
    <div className="auth-container">
      <div className="header">
        <div className="title">{title}</div>

        <span className={clsx('error', { 'uk-hidden': !error })}>{error}</span>
      </div>

      <div className="form-header">
        <h2 className="title">{header}</h2>

        <div className="description uk-margin">{description}</div>
      </div>

      <div className="form-wrapper">
        {form && (form.inputs || form.buttons) && (
          <form className="form" onSubmit={onSubmit}>
            {form.header && form.header}

            {form.inputs && <AuthContainerFormInputs inputs={form.inputs} />}
            {form.footer && form.footer}
            {form.buttons && <AuthContainerFormButtons buttons={form.buttons} />}
          </form>
        )}
      </div>

      {footer && (
        <div className="form-footer uk-margin uk-padding uk-padding-remove-horizontal uk-grid-collapse uk-child-width-auto uk-flex uk-flex-center uk-flex-wrap">
          {footer.text && <span>{footer.text}</span>}

          <Link className="footer-link" to={footer.link}>
            {footer.linkText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Authcontainer;
