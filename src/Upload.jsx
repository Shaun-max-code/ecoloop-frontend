import { useState } from "react";
import "./Upload.css";

export default function Upload() {
  const [weight, setWeight] = useState("");
  const [file, setFile] = useState(null);

  return (
    <div className="page">

      <div className="upload-hero">
        <h1>Upload Waste <span>♻️</span></h1>
        <p>Turn your waste into impact</p>
      </div>

      <div className="upload-container">
        <div className="upload-box">

          <input
            type="number"
            placeholder="Enter weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button className="upload-btn">
            Upload
          </button>

        </div>
      </div>

    </div>
  );
}