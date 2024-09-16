"use client";

import axios from "axios";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) setImage(files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();

    formData.append("image", image);

    const res = await axios.post("http://localhost:3001/upload", formData);

    console.log(res.data);

    setLoading(false);
  };

  console.log(image);

  return (
    <div className="w-screen h-screen flex justify-center items-center p-10">
      <input type="file" onChange={handleChangeFile} />

      <button onClick={handleUpload}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
