import { useEffect } from 'react';

import { useFileUpload } from '../../../../hooks/useFileUpload';

const FileUploader = ({ onChange, multiple, children }) => {
  const { files, uploadFiles } = useFileUpload();

  useEffect(() => {
    if (!files || !files.length) return;

    onChange(files);
  }, [files, onChange]);

  return (
    <div className="js-upload" uk-form-custom="">
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
