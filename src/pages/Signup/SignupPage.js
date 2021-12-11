import { useCallback } from 'react';

import { useSignupData } from './hooks/useSignupData';
import { useKPIsData } from '../KPIs/state/hooks/useKPIsData';
import FormHeader from './components/Form/FormHeader';
import FormFooter from './components/Form/FormFooter';
import Authcontainer from '../../components/AuthContainer';
import LoginLink from './components/Link/LoginLink';

const SignupPage = () => {
  const { kpis } = useKPIsData();
  const {
    selectedProfession,
    name,
    email,
    password,
    isPasswordShown,
    setSelectedProfession,
    setName,
    setEmail,
    setPassword,
    toggleIsPasswordShown
  } = useSignupData();

  const inputs = [
    {
      id: 'profession',
      type: 'select',
      options: kpis,
      value: selectedProfession,
      onChange: setSelectedProfession,
      label: 'Your Professional fill?',
      placeholder: 'Select'
    },
    {
      id: 'name',
      value: name,
      onChange: setName,
      label: 'Full Name',
      placeholder: 'Enter Full Name',
      isRequired: true
    },
    {
      id: 'email',
      value: email,
      onChange: setEmail,
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      isRequired: true
    },
    {
      id: 'password',
      value: password,
      onChange: setPassword,
      isToggled: isPasswordShown,
      onToggle: toggleIsPasswordShown,
      type: isPasswordShown ? 'text' : 'password',
      label: 'Password',
      placeholder: 'Confirm Password',
      isRequired: true
    }
  ];

  const buttons = [{ id: 'submit', type: 'submit', text: 'Register Account' }];

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log('[SIGNUP PAGE] -> fields: ', {
        selectedProfession,
        name,
        email,
        password,
        isPasswordShown
      });
    },
    [selectedProfession, name, email, password, isPasswordShown]
  );

  return (
    <>
      <LoginLink />

      <div className="uk-width-1-1 uk-width-2-3@s uk-margin-auto">
        <Authcontainer
          header="Register yourself on the network"
          description="We provide access to top companies, a community of experts, and resources that can help accelerate your career."
          form={{
            header: <FormHeader />,
            inputs,
            buttons,
            footer: <FormFooter />
          }}
          //   footer={{ text: "Don't have an account?", link: '/signup', linkText: 'Join free today' }}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default SignupPage;
