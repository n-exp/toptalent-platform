import AuthContainerInput from './AuthContainerInput';

const AuthContainerFormInputs = ({ inputs }) => {
  return (
    <div className="form-inputs">
      {inputs.map((inputProps) => (
        <AuthContainerInput key={inputProps.id} {...inputProps} />
      ))}
    </div>
  );
};

export default AuthContainerFormInputs;
