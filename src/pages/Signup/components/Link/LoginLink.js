import './LoginLink.scss';

const LoginLink = () => {
  return (
    <div className="login-link-container uk-width-expand">
      <div className="link uk-container uk-container-large uk-margin-small-right uk-flex uk-flex-right uk-flex-wrap">
        <span>Already have an account?</span>
        <a className="uk-link-text" href="/login">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default LoginLink;
