import { useState } from 'react';
import './Profile.css';

const achievements = [
  { id: 1, icon: '🌱', title: 'First Upload', desc: 'Logged your first waste', unlocked: true },
  { id: 2, icon: '💯', title: '100 Points', desc: 'Reached 100 eco-points', unlocked: true },
  { id: 3, icon: '🔥', title: '7-Day Streak', desc: 'Uploaded 7 days in a row', unlocked: true },
  { id: 4, icon: '♻️', title: '10kg Recycled', desc: 'Recycled 10kg of waste', unlocked: true },
  { id: 5, icon: '🌍', title: 'Earth Saver', desc: 'Saved 20kg CO₂', unlocked: true },
  { id: 6, icon: '🏆', title: 'Top 10', desc: 'Reached global top 10', unlocked: true },
  { id: 7, icon: '💎', title: 'Diamond Tier', desc: 'Earn 5000 points', unlocked: false },
  { id: 8, icon: '🚀', title: 'Eco Legend', desc: 'Recycle 100kg total', unlocked: false },
];

const history = [
  { date: 'Today', type: 'Plastic', weight: '2.3', pts: 28, icon: '🧴' },
  { date: 'Yesterday', type: 'Paper', weight: '1.1', pts: 13, icon: '📄' },
  { date: 'Mar 20', type: 'Glass', weight: '3.7', pts: 44, icon: '🪟' },
  { date: 'Mar 18', type: 'E-Waste', weight: '0.8', pts: 10, icon: '💻' },
  { date: 'Mar 17', type: 'Metal', weight: '2.0', pts: 24, icon: '🥫' },
  { date: 'Mar 15', type: 'Plastic', weight: '1.5', pts: 18, icon: '🧴' },
];

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const activityGrid = Array.from({ length: 52 * 7 }, (_, i) => {
  const r = Math.random();
  return r > 0.75 ? (r > 0.92 ? 3 : r > 0.84 ? 2 : 1) : 0;
});

export default function Profile() {
  const [activeSection, setActiveSection] = useState('achievements');

  return (
    <div className="profile page-wrapper">
      <div className="profile__aurora" />

      <div className="profile__container">

        {/* Hero Card */}
        <div className="profile__hero glass-card">
          <div className="profile__hero-left">
            <div className="profile__avatar-wrap">
              <div className="profile__avatar">🫵</div>
              <div className="profile__avatar-ring" />
              <div className="profile__level-badge">Lv.12</div>
            </div>
            <div className="profile__info">
              <div className="profile__name">Shaun Mathew</div>
              <div className="profile__handle">@shaun_eco · Kochi, Kerala</div>
              <div className="profile__joined">🗓 Member since Jan 2025</div>
              <div className="profile__tags">
                <span className="tag">♻️ Recycler</span>
                <span className="tag" style={{ borderColor: 'rgba(255,184,48,0.3)', color: 'var(--amber-warm)', background: 'rgba(255,184,48,0.08)' }}>🔥 Streak Master</span>
              </div>
            </div>
          </div>
          <div className="profile__hero-stats">
            <div className="hero-stat">
              <span className="hero-stat__val neon-text">1,284</span>
              <span className="hero-stat__label">Total Points</span>
            </div>
            <div className="hero-stat__divider" />
            <div className="hero-stat">
              <span className="hero-stat__val" style={{color:'var(--teal-glow)'}}>28.4</span>
              <span className="hero-stat__label">kg Recycled</span>
            </div>
            <div className="hero-stat__divider" />
            <div className="hero-stat">
              <span className="hero-stat__val" style={{color:'var(--amber-warm)'}}>23.3</span>
              <span className="hero-stat__label">kg CO₂ Saved</span>
            </div>
            <div className="hero-stat__divider" />
            <div className="hero-stat">
              <span className="hero-stat__val" style={{color:'var(--coral-accent)'}}>12</span>
              <span className="hero-stat__label">Day Streak</span>
            </div>
          </div>
        </div>

        {/* XP Progress */}
        <div className="xp-card glass-card">
          <div className="xp-card__header">
            <div>
              <div className="xp-card__title">Progress to Level 13</div>
              <div className="xp-card__sub">1,284 / 1,500 XP</div>
            </div>
            <div className="xp-card__pct neon-text">85%</div>
          </div>
          <div className="xp-bar">
            <div className="xp-bar__fill" style={{ width: '85%' }} />
            <div className="xp-bar__glow" style={{ left: '85%' }} />
          </div>
          <div className="xp-milestones">
            {[0, 500, 1000, 1500].map(v => (
              <span key={v} className="xp-milestone" style={{ left: `${(v/1500)*100}%` }}>
                {v >= 1000 ? `${v/1000}k` : v}
              </span>
            ))}
          </div>
        </div>

        {/* Section tabs */}
        <div className="profile__tabs">
          {['achievements', 'history', 'activity'].map(t => (
            <button
              key={t}
              className={`profile__tab ${activeSection === t ? 'profile__tab--active' : ''}`}
              onClick={() => setActiveSection(t)}
            >
              {t === 'achievements' ? '🏅 Achievements' : t === 'history' ? '📋 History' : '📅 Activity'}
            </button>
          ))}
        </div>

        {/* ACHIEVEMENTS */}
        {activeSection === 'achievements' && (
          <div className="achievements-grid">
            {achievements.map((a, i) => (
              <div
                key={a.id}
                className={`achievement-card glass-card ${!a.unlocked ? 'achievement-card--locked' : ''}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={`achievement-icon ${a.unlocked ? 'achievement-icon--unlocked' : ''}`}>
                  {a.unlocked ? a.icon : '🔒'}
                </div>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.desc}</div>
                {a.unlocked && <div className="achievement-badge">✓ Unlocked</div>}
              </div>
            ))}
          </div>
        )}

        {/* HISTORY */}
        {activeSection === 'history' && (
          <div className="history-list glass-card">
            {history.map((h, i) => (
              <div key={i} className="history-row" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="history-row__date">{h.date}</div>
                <div className="history-row__icon">{h.icon}</div>
                <div className="history-row__info">
                  <span className="history-row__type">{h.type}</span>
                  <span className="history-row__weight">{h.weight} kg</span>
                </div>
                <div className="history-row__bar-wrap">
                  <div className="history-row__bar" style={{ width: `${(parseFloat(h.weight)/4)*100}%` }} />
                </div>
                <div className="history-row__pts neon-text">+{h.pts}</div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIVITY GRID */}
        {activeSection === 'activity' && (
          <div className="activity-heatmap glass-card">
            <div className="heatmap__header">
              <h3 className="heatmap__title">Upload Activity — 2025</h3>
              <div className="heatmap__legend">
                <span>Less</span>
                {[0,1,2,3].map(l => (
                  <div key={l} className={`heatmap__dot heatmap__dot--${l}`} />
                ))}
                <span>More</span>
              </div>
            </div>
            <div className="heatmap__months">
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
            <div className="heatmap__grid">
              {activityGrid.slice(0, 52 * 7).map((level, i) => (
                <div key={i} className={`heatmap__cell heatmap__cell--${level}`} title={`Level ${level}`} />
              ))}
            </div>
            <div className="heatmap__footer">
              <span className="neon-text">47</span> uploads this year · <span style={{ color:'var(--teal-glow)' }}>28.4 kg</span> total recycled
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
