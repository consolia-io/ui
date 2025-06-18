/* eslint-disable no-console */
import { JSX, useState } from "react";

import * as C from "../../src/index";

export default function UploadDemo(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const simulateUpload = (): void => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1500);
  };

  const simulateError = (): void => {
    setError(true);
    setTimeout(() => setError(false), 3000);
  };

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Upload
          accept=".pdf"
          loading={loading}
          success={success}
          onUpload={simulateUpload}
        />
      </C.Box>

      {/* Multiple Files */}
      <C.Box header={
        <C.Text as="h4">Multiple Files</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }}>
          <C.Upload
            accept="image/*"
            maxFiles={3}
            multiple
            onUpload={(fileList: FileList) => {
              setFiles(Array.from(fileList));
              console.log("Multiple files:", fileList);
            }}
          />
          {files.length > 0 && (
            <C.Text accent>
              {files.length} file{files.length > 1 ? 's' : ''} selected
            </C.Text>
          )}
        </C.Stack>
      </C.Box>

      {/* Custom File Types */}
      <C.Box header={
        <C.Text as="h4">Custom File Types</C.Text>
      }>
        <C.Upload
          accept=".doc,.docx,.txt"
          maxSize={2000000}
          onUpload={(file: File) => {
            console.log("Document uploaded:", file.name);
          }}
        />
      </C.Box>

      {/* Error State */}
      <C.Box header={
        <C.Text as="h4">Error State</C.Text>
      }>
        <C.Upload
          accept="*"
          error={error}
          errorMessage="Upload failed"
          onUpload={(file: File) => {
            console.log("File:", file.name);
            simulateError();
          }}
        />
      </C.Box>

      {/* Success State */}
      <C.Box header={
        <C.Text as="h4">Success State</C.Text>
      }>
        <C.Upload
          accept="image/*"
          success={success}
          successMessage="Upload complete!"
          onUpload={(file: File) => {
            console.log("Image uploaded:", file.name);
            simulateUpload();
          }}
        />
      </C.Box>

      {/* Custom Width */}
      <C.Box header={
        <C.Text as="h4">Custom Width</C.Text>
      }>
        <C.Upload
          accept=".zip,.rar"
          width="80%"
          onUpload={(file: File) => {
            console.log("Archive uploaded:", file.name);
          }}
        />
      </C.Box>
    </C.Stack>
  );
} 