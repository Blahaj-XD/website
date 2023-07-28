'use client'
import React from 'react';
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF","JPEG"];
export default function DragDrop() {
  const [file, setFile] = React.useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader  classes="bg-black w-64 h-64" handleChange={handleChange} name="file" types={fileTypes} label=""/>
  );
}
