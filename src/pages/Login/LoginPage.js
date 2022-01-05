import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginData } from './hooks/useLoginData';
import Authcontainer from '../../components/AuthContainer';
import FormFooter from './components/Form/FormFooter';
import Route from '../../routes/state/types';
import EyeIcon from '../../assets/icons/EyeIcon';

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    remember,
    isPasswordShown,
    setEmail,
    setPassword,
    toggleIsPasswordShown,
    toggleRemembering
  } = useLoginData();

  const inputs = [
    {
      id: 'email',
      value: email,
      onChange: setEmail,
      label: 'Email Address',
      placeholder: 'Type your e-mail'
    },
    {
      id: 'password',
      value: password,
      onChange: setPassword,
      isToggled: isPasswordShown,
      onToggle: toggleIsPasswordShown,
      type: isPasswordShown ? 'text' : 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      icon: EyeIcon
    }
  ];

  const buttons = [{ id: 'submit', type: 'submit', text: 'Log in' }];

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log('[LOGIN PAGE] -> fields: ', {
        email,
        password,
        isPasswordShown,
        remember
      });

      navigate(Route.PROJECT_DETAILS);
    },
    [email, password, isPasswordShown, remember, navigate]
  );

  return (
    <div className="uk-width-1-1 uk-width-2-3@s uk-margin-auto">
      <Authcontainer
        title="Welcome back"
        header="Login to your account"
        form={{
          inputs,
          buttons,
          footer: <FormFooter checked={remember} onChange={toggleRemembering} />
        }}
        footer={{ text: "Don't have an account?", link: Route.SIGNUP, linkText: 'Join free today' }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
