import { useEffect } from 'react';
import clsx from 'clsx';

import { useFileUpload } from '../../../../hooks/useFileUpload';

const FileUploader = ({ onChange, multiple, children, classes }) => {
  const { files, uploadFiles } = useFileUpload();

  useEffect(() => {
    if (!files || !files.length) return;

    onChange(files);
  }, [files, onChange]);

  return (
    <div className={clsx('js-upload', { [classes]: classes })} uk-form-custom="">
      <input
        type="file"
        accept="image/*"
        onChange={uploadFiles}
        multiple={multiple}
        onClick={(event) => (event.target.value = null)}
      />

      {children}
    </div>
  );
};

export default FileUploader;
