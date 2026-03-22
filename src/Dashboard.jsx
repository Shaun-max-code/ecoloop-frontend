import { useState, useEffect, useRef } from 'react';
import './Dashboard.css';

// Mini animated count-up hook
function useCountUp(target, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(Math.round(start * 10) / 10);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return val;
}

const weekData = [
  { day: 'Mon', kg: 1.2, pts: 14 },
  { day: 'Tue', kg: 2.8, pts: 34 },
  { day: 'Wed', kg: 0.9, pts: 11 },
  { day: 'Thu', kg: 3.5, pts: 42 },
  { day: 'Fri', kg: 2.1, pts: 25 },
  { day: 'Sat', kg: 4.2, pts: 50 },
  { day: 'Sun', kg: 1.8, pts: 22 },
];

const wasteBreakdown = [
  { type: 'Plastic', pct: 38, color: '#39ff88' },
  { type: 'Paper', pct: 22, color: '#00ffd5' },
  { type: 'Glass', pct: 15, color: '#ffb830' },
  { type: 'Metal', pct: 12, color: '#a855f7' },
  { type: 'E-Waste', pct: 8, color: '#ff6b6b' },
  { type: 'Other', pct: 5, color: '#3d6b4a' },
];

const recentActivity = [
  { date: 'Today, 10:12 AM', type: 'Plastic', weight: '2.3 kg', pts: 28 },
  { date: 'Yesterday', type: 'Paper', weight: '1.1 kg', pts: 13 },
  { date: 'Mar 20', type: 'Glass', weight: '3.7 kg', pts: 44 },
  { date: 'Mar 18', type: 'E-Waste', weight: '0.8 kg', pts: 10 },
];

const maxKg = Math.max(...weekData.map(d => d.kg));

export default function Dashboard() {
  const totalPts = useCountUp(1284);
  const totalKg = useCountUp(28.4);
  const co2 = useCountUp(23.3);
  const streak = useCountUp(12);

  return (
    <div className="dash page-wrapper">
      <div className="dash__grid-bg" />

      <div className="dash__container">
        {/* Header */}
        <div className="dash__header">
          <div>
            <span className="tag">📊 Analytics Dashboard</span>
            <h1 className="dash__title">Your Impact</h1>
            <p className="dash__sub">Track your recycling footprint and eco-contribution.</p>
          </div>
          <div className="dash__period">
            {['Week', 'Month', 'Year'].map(p => (
              <button key={p} className={`period-btn ${p === 'Week' ? 'period-btn--active' : ''}`}>{p}</button>
            ))}
          </div>
        </div>

        {/* KPI Row */}
        <div className="dash__kpi-row">
          {[
            { icon: '⭐', label: 'Total Points', val: totalPts.toLocaleString(), unit: 'pts', color: 'var(--green-neon)', glow: true },
            { icon: '♻️', label: 'Waste Recycled', val: totalKg, unit: 'kg', color: 'var(--teal-glow)' },
            { icon: '🌍', label: 'CO₂ Saved', val: co2, unit: 'kg', color: 'var(--amber-warm)' },
            { icon: '🔥', label: 'Day Streak', val: streak, unit: 'days', color: 'var(--coral-accent)' },
          ].map(({ icon, label, val, unit, color, glow }, i) => (
            <div key={label} className={`kpi-card glass-card ${glow ? 'kpi-card--hero' : ''}`} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="kpi-card__top">
                <span className="kpi-card__icon">{icon}</span>
                <span className="kpi-card__label">{label}</span>
              </div>
              <div className="kpi-card__val" style={{ color }}>
                {val}
                <span className="kpi-card__unit">{unit}</span>
              </div>
              <div className="kpi-card__bar">
                <div className="kpi-card__bar-fill" style={{ background: color, width: '72%' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="dash__charts-row">
          {/* Bar Chart */}
          <div className="chart-card glass-card">
            <div className="chart-card__header">
              <h3 className="chart-card__title">Weekly Uploads</h3>
              <span className="chart-card__badge neon-text">↑ 18%</span>
            </div>
            <div className="bar-chart">
              {weekData.map(({ day, kg }) => (
                <div key={day} className="bar-col">
                  <div className="bar-wrap">
                    <div
                      className="bar-fill"
                      style={{ height: `${(kg / maxKg) * 100}%` }}
                      title={`${kg} kg`}
                    >
                      <span className="bar-val">{kg}</span>
                    </div>
                  </div>
                  <span className="bar-day">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Chart */}
          <div className="chart-card glass-card">
            <div className="chart-card__header">
              <h3 className="chart-card__title">Waste Breakdown</h3>
            </div>
            <div className="donut-section">
              <div className="donut-wrap">
                <svg viewBox="0 0 120 120" className="donut-svg">
                  {(() => {
                    let offset = 0;
                    const r = 46;
                    const circ = 2 * Math.PI * r;
                    return wasteBreakdown.map(({ type, pct, color }) => {
                      const dash = (pct / 100) * circ;
                      const gap = circ - dash;
                      const el = (
                        <circle
                          key={type}
                          cx="60" cy="60" r={r}
                          fill="none"
                          stroke={color}
                          strokeWidth="14"
                          strokeDasharray={`${dash} ${gap}`}
                          strokeDashoffset={-offset * circ / 100}
                          style={{ transition: 'stroke-dasharray 1s ease' }}
                        />
                      );
                      offset += pct;
                      return el;
                    });
                  })()}
                  <text x="60" y="56" textAnchor="middle" fill="#e8f5ec" fontFamily="Syne" fontSize="14" fontWeight="800">28.4</text>
                  <text x="60" y="70" textAnchor="middle" fill="#7aad8a" fontFamily="DM Mono" fontSize="7">kg total</text>
                </svg>
              </div>
              <div className="donut-legend">
                {wasteBreakdown.map(({ type, pct, color }) => (
                  <div key={type} className="legend-row">
                    <span className="legend-dot" style={{ background: color }} />
                    <span className="legend-type">{type}</span>
                    <span className="legend-pct">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="activity-card glass-card">
          <div className="chart-card__header">
            <h3 className="chart-card__title">Recent Activity</h3>
            <span className="tag">Live feed</span>
          </div>
          <div className="activity-list">
            {recentActivity.map(({ date, type, weight, pts }, i) => (
              <div key={i} className="activity-row">
                <div className="activity-row__icon">♻️</div>
                <div className="activity-row__info">
                  <span className="activity-row__type">{type}</span>
                  <span className="activity-row__meta">{date} · {weight}</span>
                </div>
                <div className="activity-row__pts neon-text">+{pts} pts</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
