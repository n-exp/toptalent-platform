import { useState } from 'react';

export const useAuthData = () => {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState('');

  const toggleIsPasswordShown = () => setIsPasswordShown((isShown) => !isShown);

  return {
    avatar,
    selectedProfession,
    username,
    email,
    password,
    phone,
    isPasswordShown,

    setAvatar,
    setSelectedProfession,
    setUsername,
    setEmail,
    setPassword,
    setPhone,
    toggleIsPasswordShown
  };
};
