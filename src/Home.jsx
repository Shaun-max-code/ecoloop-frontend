import { useState, useRef } from 'react';
import './Home.css';

export default function Home() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [weight, setWeight] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const wasteTypes = ['Plastic', 'Paper', 'Glass', 'Metal', 'E-Waste', 'Organic', 'Textile'];

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) handleFile(f);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !weight || !wasteType) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const reset = () => {
    setFile(null); setPreview(null); setWeight('');
    setWasteType(''); setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="home page-wrapper">
        <div className="home__bg-orbs">
          <div className="orb orb--1" />
          <div className="orb orb--2" />
        </div>
        <div className="home__success">
          <div className="success-ring">
            <div className="success-icon">✓</div>
          </div>
          <h2 className="success-title">Waste Logged!</h2>
          <p className="success-sub">You earned <span className="neon-text">+{Math.round(parseFloat(weight || 1) * 12)} pts</span> for recycling {weight}kg of {wasteType}</p>
          <div className="success-stats">
            <div className="success-stat">
              <span className="success-stat__val neon-text">{(parseFloat(weight||1)*0.82).toFixed(2)} kg</span>
              <span className="success-stat__label">CO₂ Saved</span>
            </div>
            <div className="success-stat">
              <span className="success-stat__val" style={{color:'var(--teal-glow)'}}>+{Math.round(parseFloat(weight||1)*12)}</span>
              <span className="success-stat__label">Points</span>
            </div>
            <div className="success-stat">
              <span className="success-stat__val" style={{color:'var(--amber-warm)'}}>🌱 {Math.round(parseFloat(weight||1)*0.3)}</span>
              <span className="success-stat__label">Trees Equiv.</span>
            </div>
          </div>
          <button className="btn-primary" onClick={reset}>Upload More Waste</button>
        </div>
      </div>
    );
  }

  return (
    <div className="home page-wrapper">
      <div className="home__bg-orbs">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
      </div>

      <div className="home__container">
        <div className="home__header">
          <span className="tag">♻️ Waste Scanner</span>
          <h1 className="home__title">
            Turn Trash<br />
            <span className="home__title-accent">Into Impact</span>
          </h1>
          <p className="home__subtitle">Upload your waste image, log the weight, and earn eco-points for every responsible disposal.</p>
        </div>

        <form className="home__form" onSubmit={handleSubmit}>
          {/* Upload Zone */}
          <div
            className={`upload-zone ${dragOver ? 'upload-zone--drag' : ''} ${preview ? 'upload-zone--has-file' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !preview && fileRef.current?.click()}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="upload-zone__input"
              onChange={(e) => handleFile(e.target.files[0])}
            />
            {preview ? (
              <div className="upload-zone__preview">
                <img src={preview} alt="preview" className="upload-zone__img" />
                <div className="upload-zone__preview-overlay">
                  <button type="button" className="upload-zone__change" onClick={(e) => { e.stopPropagation(); setFile(null); setPreview(null); }}>
                    ✕ Remove
                  </button>
                </div>
                <div className="upload-zone__badge">
                  <span>✓</span> Image ready
                </div>
              </div>
            ) : (
              <div className="upload-zone__placeholder">
                <div className="upload-zone__icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8L32 16H26V30H22V16H16L24 8Z" fill="currentColor" opacity="0.8"/>
                    <path d="M8 34V38C8 40.2 9.8 42 12 42H36C38.2 42 40 40.2 40 38V34H36V38H12V34H8Z" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                <p className="upload-zone__text">Drop waste image here</p>
                <p className="upload-zone__hint">or click to browse · JPG, PNG, WebP</p>
                <div className="upload-zone__pulse" />
              </div>
            )}
          </div>

          {/* Inputs Row */}
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Weight (kg)</label>
              <input
                type="number"
                className="form-input"
                placeholder="e.g. 2.5"
                min="0.1"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">Waste Type</label>
              <select
                className="form-input form-select"
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
                required
              >
                <option value="">Select type...</option>
                {wasteTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Points preview */}
          {weight && wasteType && (
            <div className="points-preview">
              <div className="points-preview__left">
                <span className="points-preview__label">Estimated reward</span>
                <span className="points-preview__pts neon-text">+{Math.round(parseFloat(weight||0)*12)} pts</span>
              </div>
              <div className="points-preview__divider" />
              <div className="points-preview__right">
                <span>🌍 {(parseFloat(weight||0)*0.82).toFixed(2)} kg CO₂ saved</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            className={`btn-primary btn-submit ${loading ? 'btn-loading' : ''}`}
            disabled={!file || !weight || !wasteType || loading}
          >
            {loading ? (
              <span className="btn-loader">
                <span className="btn-loader__ring" />
                Analyzing waste...
              </span>
            ) : (
              <>🚀 Submit & Earn Points</>
            )}
          </button>
        </form>

        {/* How it works */}
        <div className="how-it-works">
          {[
            { step: '01', icon: '📷', title: 'Snap & Upload', desc: 'Take a photo of your waste material' },
            { step: '02', icon: '⚖️', title: 'Log Weight', desc: 'Enter the weight in kilograms' },
            { step: '03', icon: '⭐', title: 'Earn Points', desc: 'Get eco-points and climb the leaderboard' },
          ].map(({ step, icon, title, desc }, i) => (
            <div key={step} className="how-step glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="how-step__num">{step}</span>
              <span className="how-step__icon">{icon}</span>
              <h4 className="how-step__title">{title}</h4>
              <p className="how-step__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
