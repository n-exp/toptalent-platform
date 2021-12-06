import { VerifyEmailIcon } from '../../../assets/icons/VerifyEmailIcon';
import Button from '../Button/Button';

import './Modal.scss';

const Modal = () => {
  return (
    <div id="verify-modal" uk-modal="">
      <div className="modal uk-margin-auto-vertical uk-modal-dialog uk-modal-body uk-width-auto uk-width-4-5@s uk-width-2-3@m">
        <div className="modal-container">
          <div className="modal-title uk-text-center">Verify Your Email</div>
          <div className="subtitle uk-text-center">
            You need to verify your email to complete registration
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center">
            <VerifyEmailIcon />
          </div>
          <div className="descriprion uk-text-center">
            An email has benn sent to with a link to verify your account. If you have not recieved
            the email after a few minutes. Please check your Spam folder or click on resend email.
          </div>
          <div className="uk-width-expand uk-flex uk-flex-center">
            <Button
              classes="uk-width-1-1 uk-width-5-6@s uk-width-4-5@m uk-width-3-5@l uk-width-2-5@xl uk-text-nowrap"
              type="secondary"
            >
              Verify Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
