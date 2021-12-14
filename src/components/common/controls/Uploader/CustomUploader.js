import clsx from 'clsx';

import FileUploader from '../FileUploader/FileUploader';

const CustomUploader = ({ classes, icon, text, multiple, onChange }) => {
  return (
    <FileUploader
      multiple={multiple}
      onChange={onChange}
      classes="uk-height-1-1 uk-flex-inline"
    >
      <button
        className={clsx('custom-uploader-container uk-button uk-button-default', {
          [classes]: classes
        })}
      >
        <div>{icon}</div>
        <div>{text}</div>
      </button>
    </FileUploader>
  );
};

export default CustomUploader;
