import FileUploader from '../FileUploader/FileUploader';
import Button from '../../Button/Button';

import { PlusIcon } from '../../../../assets/icons/PlusIcon';

import './ButtonUploader.scss';

const ButtonUploader = ({ onChange, multiple, text }) => (
  <FileUploader onChange={onChange} multiple={multiple}>
    <Button color="secondary" variant="outlined" size="medium">
      <div className="uk-grid-small" uk-grid="">
        <div className="uk-flex uk-flex-middle">
          <PlusIcon fill="#395f8c" />
        </div>
        <div>{text}</div>
      </div>
    </Button>
  </FileUploader>
);

export default ButtonUploader;
