import './FormFooter.scss';

const FormFooter = () => {
  return (
    <div className="signin-form-footer uk-margin-large uk-padding-small uk-padding-remove-horizontal">
      You acknowledge that the Topptalent screening process is confidential and that you will not
      publicly disclose details about this process. By submitting, you acknowledge that you have
      read and agreed to our&nbsp;
      <a className="uk-link-text" href="/terms-and-conditions">
        Terms and Conditions
      </a>
      ,&nbsp;
      <a className="uk-link-text" href="/privacy-policy">
        Privacy Policy
      </a>
      , and&nbsp;
      <a className="uk-link-text" href="/cookie-policy">
        Cookie Policy
      </a>
      .
    </div>
  );
};

export default FormFooter;
