import { useState } from 'react';

export const useLoginData = () => {
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleIsPasswordShown = () => setIsPasswordShown((isShown) => !isShown);
  const toggleRemembering = () => setRemember((isRemember) => !isRemember);

  return {
    email,
    password,
    remember,
    isPasswordShown,

    setEmail,
    setPassword,
    toggleIsPasswordShown,
    toggleRemembering
  };
};
