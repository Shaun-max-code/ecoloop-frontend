import { useState } from 'react';
import './Leaderboard.css';

const users = [
  { rank: 1, name: 'Arjun Sharma', city: 'Mumbai', pts: 4820, kg: 401, streak: 28, badge: '🌟', trend: '+5' },
  { rank: 2, name: 'Priya Nair', city: 'Kochi', pts: 4210, kg: 351, streak: 21, badge: '🔥', trend: '+2' },
  { rank: 3, name: 'Rahul Dev', city: 'Bangalore', pts: 3940, kg: 328, streak: 18, badge: '💎', trend: '-1' },
  { rank: 4, name: 'Sneha Iyer', city: 'Chennai', pts: 3560, kg: 297, streak: 15, badge: '⚡', trend: '+3' },
  { rank: 5, name: 'You', city: 'Kochi', pts: 1284, kg: 107, streak: 12, badge: '🌱', trend: '+7', isMe: true },
  { rank: 6, name: 'Kavya Menon', city: 'Thrissur', pts: 1190, kg: 99, streak: 10, badge: '🌿', trend: '+1' },
  { rank: 7, name: 'Aditya Kumar', city: 'Pune', pts: 980, kg: 82, streak: 8, badge: '🌿', trend: '-2' },
  { rank: 8, name: 'Anjali Singh', city: 'Delhi', pts: 870, kg: 72, streak: 7, badge: '🌿', trend: '0' },
  { rank: 9, name: 'Vikram Rao', city: 'Hyderabad', pts: 760, kg: 63, streak: 5, badge: '🌿', trend: '+4' },
  { rank: 10, name: 'Meenal Joshi', city: 'Jaipur', pts: 640, kg: 53, streak: 4, badge: '🌿', trend: '-1' },
];

const medals = ['🥇', '🥈', '🥉'];
const tabs = ['Global', 'City', 'Friends'];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('Global');

  const top3 = users.slice(0, 3);
  const rest = users.slice(3);

  return (
    <div className="lb page-wrapper">
      <div className="lb__scanlines" />

      <div className="lb__container">
        {/* Header */}
        <div className="lb__header">
          <span className="tag">🏆 Rankings</span>
          <h1 className="lb__title">Leaderboard</h1>
          <p className="lb__sub">Compete with eco-warriors across India. Every gram counts.</p>

          <div className="lb__tabs">
            {tabs.map(t => (
              <button
                key={t}
                className={`lb__tab ${activeTab === t ? 'lb__tab--active' : ''}`}
                onClick={() => setActiveTab(t)}
              >{t}</button>
            ))}
          </div>
        </div>

        {/* Podium */}
        <div className="podium">
          {[top3[1], top3[0], top3[2]].map((u, i) => {
            const heights = ['140px', '180px', '120px'];
            const podiumRanks = [2, 1, 3];
            return (
              <div key={u.rank} className={`podium-item podium-item--${podiumRanks[i]}`} style={{ '--podium-h': heights[i] }}>
                <div className="podium-avatar">
                  <span className="podium-avatar__emoji">
                    {u.name === 'You' ? '🫵' : u.name.charAt(0)}
                  </span>
                  <span className="podium-medal">{medals[podiumRanks[i]-1]}</span>
                </div>
                <div className="podium-name">{u.name}</div>
                <div className="podium-pts neon-text" style={{ color: podiumRanks[i] === 1 ? 'var(--green-neon)' : podiumRanks[i] === 2 ? 'var(--teal-glow)' : 'var(--amber-warm)' }}>
                  {u.pts.toLocaleString()}
                </div>
                <div className="podium-base" style={{ height: heights[i] }}>
                  <span className="podium-rank">#{podiumRanks[i]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="lb__table glass-card">
          <div className="lb__table-header">
            <span>#</span>
            <span>Player</span>
            <span>Points</span>
            <span className="hide-sm">Recycled</span>
            <span className="hide-sm">Streak</span>
            <span>Trend</span>
          </div>

          {rest.map((u, i) => (
            <div
              key={u.rank}
              className={`lb__row ${u.isMe ? 'lb__row--me' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="lb__row-rank">#{u.rank}</span>

              <div className="lb__row-player">
                <div className="lb__avatar">
                  {u.isMe ? '🫵' : u.name.charAt(0)}
                </div>
                <div>
                  <div className="lb__row-name">
                    {u.name}
                    {u.isMe && <span className="lb__you-badge">You</span>}
                  </div>
                  <div className="lb__row-city">{u.city}</div>
                </div>
              </div>

              <div className="lb__row-pts">
                <span style={{ color: u.isMe ? 'var(--green-neon)' : 'var(--text-primary)' }}>
                  {u.pts.toLocaleString()}
                </span>
                <span className="lb__row-pts-label">pts</span>
              </div>

              <div className="lb__row-kg hide-sm">{u.kg} kg</div>

              <div className="lb__row-streak hide-sm">
                <span className="streak-fire">🔥</span> {u.streak}d
              </div>

              <div className={`lb__row-trend ${u.trend.startsWith('+') ? 'trend-up' : u.trend === '0' ? 'trend-flat' : 'trend-down'}`}>
                {u.trend === '0' ? '—' : u.trend.startsWith('+') ? `↑${u.trend.slice(1)}` : `↓${u.trend.slice(1)}`}
              </div>
            </div>
          ))}
        </div>

        {/* My rank callout */}
        <div className="lb__my-rank glass-card">
          <div className="lb__my-rank-left">
            <span className="lb__my-rank-icon">🫵</span>
            <div>
              <div className="lb__my-rank-title">Your Ranking</div>
              <div className="lb__my-rank-sub">Keep uploading to climb!</div>
            </div>
          </div>
          <div className="lb__my-rank-data">
            <div className="lb__my-rank-num neon-text">#5</div>
            <div className="lb__my-rank-gap">+{4210-1284} pts to #2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
