"use client";

import styles from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}

export const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const [image, setImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onShowPicker = () => {
    imageInputRef.current?.click();
  };

  const onPickImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setImage(fileReader.result);
      }
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!image && <p>No image picked yet.</p>}
          {image && (
            <Image src={image} alt="The image selected by the user." fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={onPickImage}
          required
        />
        <button className={styles.button} type="button" onClick={onShowPicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
