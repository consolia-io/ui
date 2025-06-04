import React, { useState } from "react";
import * as C from "../../src/index";

export default function UploadDemo() {
  // State for different upload scenarios
  const [singleLoading, setSingleLoading] = useState(false);
  const [singleSuccess, setSingleSuccess] = useState(false);
  const [singleError, setSingleError] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);

  // Simulate file upload with delay
  const simulateUpload = (file: File, setLoading: (v: boolean) => void, setSuccess: (v: boolean) => void) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset success state after 2 seconds
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Basic Upload */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Basic Upload</C.Text>
        <C.Stack css={{ maxWidth: "400px" }}>
          <C.Upload
            accept=".pdf"
            onUpload={(file: File) => {
              console.log("Uploaded file:", file);
              simulateUpload(file, setSingleLoading, setSingleSuccess);
            }}
            loading={singleLoading}
            success={singleSuccess}
          />
        </C.Stack>
      </C.Stack>

      {/* Multiple File Upload */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Multiple File Upload</C.Text>
        <C.Stack css={{ maxWidth: "400px", gap: "$medium" }}>
          <C.Upload
            multiple
            accept="image/*"
            maxFiles={3}
            maxSize={2000000}
            onUpload={(files: FileList) => {
              const fileArray = Array.from(files);
              setMultipleFiles(fileArray);
              console.log("Uploaded files:", fileArray);
            }}
          />
          {multipleFiles.length > 0 && (
            <C.Box css={{ 
              backgroundColor: "$surface",
              padding: "$medium",
              borderRadius: "$medium"
            }}>
              <C.Text as="h5" bottom="small">Selected Files:</C.Text>
              {multipleFiles.map((file, index) => (
                <C.Text key={index} as="p" bottom="smaller">
                  {file.name} ({(file.size / 1000000).toFixed(2)}MB)
                </C.Text>
              ))}
            </C.Box>
          )}
        </C.Stack>
      </C.Stack>

      {/* Error State */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Error State</C.Text>
        <C.Stack css={{ maxWidth: "400px" }}>
          <C.Upload
            error={singleError}
            accept=".doc,.docx"
            onUpload={(file: File) => {
              console.log("Uploaded file:", file);
              setSingleError(true);
              // Reset error state after 2 seconds
              setTimeout(() => setSingleError(false), 2000);
            }}
          />
        </C.Stack>
      </C.Stack>

      {/* Custom Size Limits */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Custom Size Limits</C.Text>
        <C.Stack css={{ maxWidth: "400px" }}>
          <C.Upload
            accept="video/*"
            maxSize={10000000} // 10MB
            onUpload={(file: File) => {
              console.log("Uploaded file:", file);
            }}
          />
        </C.Stack>
      </C.Stack>

      {/* Different File Types */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Different File Types</C.Text>
        <C.Stack css={{ maxWidth: "400px", gap: "$medium" }}>
          <C.Upload
            accept=".jpg,.jpeg,.png"
            onUpload={(file: File) => {
              console.log("Uploaded file:", file);
            }}
          />
          <C.Upload
            accept=".csv,.xlsx"
            onUpload={(file: File) => {
              console.log("Uploaded file:", file);
            }}
          />
          <C.Upload
            accept=".zip,.rar"
            onUpload={(file: File) => {
              console.log("Uploaded file:", file);
            }}
          />
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 