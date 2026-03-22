import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [weight, setWeight] = useState("");

  const handleUpload = async () => {
    if (!file || !weight) return alert("Fill all fields");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("weight", weight);

    try {
      await axios.post("http://127.0.0.1:8000/upload/", formData);
      alert("Uploaded 🚀");
      window.location.href = "/dashboard";
    } catch {
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Upload Waste</h2>

        <input
          type="number"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}