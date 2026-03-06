import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    // type validation
    if (!selectedFile.type.startsWith("image/")) {
      setError("Only image files allowed");
      return;
    }
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setError("");
  };
  const removeUpload = () => {
    setFile(null);
    setPreview("");
    setError("")
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        className="border p-2 cursor-pointer"
      />
       {error && <p className="text-red-500">{error}</p>}
      <div>
        {file && (
          <div className="flex flex-col gap-1">
            <p>{file.name}</p>
            <p>{file.size}</p>
            <img src={preview} alt="upload-image" className="max-w-100" />
            <button className="btn" onClick={removeUpload}>
              remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
