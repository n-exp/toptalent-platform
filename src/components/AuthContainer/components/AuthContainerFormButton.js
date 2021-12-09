import Button from '../../common/Button/Button';

const AuthContainerFormButton = ({ id, text, type }) => {
  return (
    <Button id={id} type={type} size="large" color="secondary" classes="uk-width-expand">
      {text}
    </Button>
  );
};

export default AuthContainerFormButton;
