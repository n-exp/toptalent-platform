import AuthContainerFormButton from './AuthContainerFormButton';

const AuthContainerFormButtons = ({ buttons }) => {
  return (
    <div className="form-buttons">
      {buttons.map((buttonProps) => (
        <AuthContainerFormButton key={buttonProps.id} {...buttonProps} />
      ))}
    </div>
  );
};

export default AuthContainerFormButtons;
