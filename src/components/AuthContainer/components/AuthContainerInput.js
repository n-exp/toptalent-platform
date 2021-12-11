import { useMemo } from 'react';

import SelectField from '../../common/Inputs/Select';
import TextField from '../../common/Inputs/TextField';

const AuthContainerInput = ({
  id,
  label,
  type = 'text',
  value,
  options,
  onChange,
  isToggled,
  onToggle,
  placeholder,
  size,
  isRequired
}) => {
  const InputComponent = useMemo(() => (type === 'select' ? SelectField : TextField), [type]);

  const inputComponentProps = {
    id,
    label,
    value,
    onChange,
    type,
    placeholder,
    isRequired,
    ...((type === 'password' || type === 'text') && { isToggled, onToggle, size }),
    ...(type === 'select' && { options })
  };

  return <InputComponent {...inputComponentProps} />;
};

export default AuthContainerInput;
