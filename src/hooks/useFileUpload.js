import { useEffect, useState } from 'react';

export const useFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [sources, setSources] = useState();

  const uploadFiles = (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
      setSelectedFiles(null);
      return;
    }

    setSelectedFiles([...files]);
  };

  const resetFiles = () => {
    setSelectedFiles(null);
  };

  useEffect(() => {
    if (!selectedFiles) {
      setSources(null);
      return;
    }

    const urlObjects = selectedFiles.map((file) => URL.createObjectURL(file));
    setSources(urlObjects);

    return () => urlObjects.map((urlObject) => URL.revokeObjectURL(urlObject));
  }, [selectedFiles]);

  return {
    files: sources,

    uploadFiles,
    resetFiles
  };
};
