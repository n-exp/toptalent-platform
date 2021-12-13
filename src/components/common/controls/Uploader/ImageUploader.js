import FileUploader from '../FileUploader/FileUploader';

import { CameraIcon } from '../../../../assets/icons/CameraIcon';

import './ImageUploader.scss';

const ImageUploader = ({ onChange, multiple }) => {
  return (
    <FileUploader onChange={onChange} multiple={multiple}>
      <div className="upload-icon uk-padding-small uk-margin-auto">
        <CameraIcon />
      </div>
    </FileUploader>
  );
};

export default ImageUploader;
