import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Profile from './Profile'; // Note: check your casing (profile vs Profile)

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Dashboard /> 
        {/* Later, you will wrap these in <Routes> from react-router-dom */}
      </main>
    </div>
  );
}

export default App;