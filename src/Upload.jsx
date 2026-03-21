import { useState } from "react";

function Upload() {
  const [weight, setWeight] = useState("");
  const [file, setFile] = useState(null);

  const uploadWaste = async () => {
    if (!weight || !file) {
      alert("Enter weight and select file");
      return;
    }

    let formData = new FormData();
    formData.append("weight", weight);
    formData.append("image", file);

    try {
      let res = await fetch("http://127.0.0.1:8000/upload/", {
        method: "POST",
        body: formData,
      });

      let data = await res.json();
      console.log(data);

      alert("Uploaded successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="container">
      
      {/* Upload Box */}
      <div className="upload-box">
        <h3>Upload Waste</h3>

        {/* 🔥 Weight Input */}
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <br /><br />

        {/* 🔥 File Input */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        {/* 🔥 Submit Button */}
        <button className="btn" onClick={uploadWaste}>
          Submit
        </button>
      </div>

    </div>
  );
}

export default Upload;