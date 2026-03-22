import React, { useState, useRef } from 'react';

export default function Home({ onUpload }) {
  const [weight, setWeight] = useState('');
  const [wasteType, setWasteType] = useState('Plastic');
  const [submitted, setSubmitted] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight) return;
    
    // This sends the data to the 'handleUpload' function in your App.jsx
    onUpload(parseFloat(weight)); 
    setSubmitted(true);
  };

  // SUCCESS SCREEN (Shows after you click Submit)
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-up text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500 mb-6">
          <span className="text-4xl text-green-500">✓</span>
        </div>
        <h2 className="text-4xl font-black text-white mb-2">Waste Logged!</h2>
        <p className="text-xl text-slate-400 mb-8">
          Points added to your <span className="text-green-400 font-mono">Eco-Wallet</span>
        </p>
        <button 
          className="px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all"
          onClick={() => {setSubmitted(false); setWeight(''); setPreview(null);}}
        >
          Upload More
        </button>
      </div>
    );
  }

  // MAIN SCANNER FORM
  return (
    <div className="max-w-2xl mx-auto pt-12 px-6 animate-fade-up">
      <div className="text-center mb-10">
        <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-bold rounded-full uppercase tracking-widest">
          AI Waste Scanner v2.0
        </span>
        <h1 className="text-5xl font-black text-white mt-4">
          Turn Trash <span className="text-green-500 italic">Into Impact</span>
        </h1>
      </div>

      <form className="space-y-6 bg-[#0a140c]/50 p-8 rounded-2xl border border-white/5 backdrop-blur-xl" onSubmit={handleSubmit}>
        
        {/* PHOTO UPLOAD BOX */}
        <div 
          className="group relative border-2 border-dashed border-white/10 rounded-xl p-10 text-center cursor-pointer hover:border-green-500/50 transition-all bg-black/40"
          onClick={() => fileRef.current.click()}
        >
          <input 
            type="file" 
            ref={fileRef} 
            hidden 
            onChange={(e) => {
              if(e.target.files[0]) setPreview(URL.createObjectURL(e.target.files[0]))
            }} 
          />
          {preview ? (
            <img src={preview} className="max-h-56 mx-auto rounded-lg shadow-2xl" alt="preview" />
          ) : (
            <div className="space-y-2">
              <p className="text-2xl">📸</p>
              <p className="text-slate-400 font-medium">Click to capture waste photo</p>
              <p className="text-slate-600 text-xs">Supports JPG, PNG</p>
            </div>
          )}
        </div>

        {/* DATA INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Weight (kg)</label>
            <input 
              type="number" 
              step="0.1" 
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:border-green-500 outline-none transition-all font-mono" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)} 
              required 
              placeholder="0.0" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Category</label>
            <select 
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:border-green-500 outline-none appearance-none"
              value={wasteType} 
              onChange={(e) => setWasteType(e.target.value)}
            >
              <option>Plastic</option>
              <option>Paper</option>
              <option>Metal</option>
              <option>Glass</option>
              <option>E-Waste</option>
            </select>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button 
          type="submit" 
          className="w-full py-5 bg-green-500 text-black font-black text-lg rounded-xl hover:bg-green-400 hover:scale-[1.01] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          PROCESS & GENERATE XP
        </button>
      </form>
    </div>
  );
}