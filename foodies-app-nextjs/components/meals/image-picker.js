"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);

  const imageInput = useRef(null);

  function handlePickImage() {
    imageInput.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected yet.</p>}
          {pickedImage && (
            <Image
              alt="Image picked by the user to share meal"
              src={pickedImage}
              fill
            />
          )}
        </div>
        <input
          ref={imageInput}
          required
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name="image"
          onChange={handleFileChange}
        />
        <button
          onClick={handlePickImage}
          className={classes.button}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
