import { useState } from 'react';

export const useSignupData = () => {
  const [selectedProfession, setSelectedProfession] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleIsPasswordShown = () => setIsPasswordShown((isShown) => !isShown);

  return {
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
  };
};
