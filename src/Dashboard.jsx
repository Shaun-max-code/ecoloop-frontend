// Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="ml-64 p-8 animate-in fade-in duration-700">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Environmental Dashboard</h2>
        <p className="text-gray-500">Real-time tracking of your ecological footprint.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'CO2 Saved', val: '45.2kg', color: 'bg-blue-500' },
          { label: 'Trees Planted', val: '12', color: 'bg-green-500' },
          { label: 'Waste Diverted', val: '180kg', color: 'bg-orange-500' }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white shadow-xl shadow-gray-100 border border-gray-50 hover:scale-105 transition-all">
            <div className={`w-10 h-10 ${item.color} rounded-lg mb-4`} />
            <h3 className="text-gray-500 text-sm">{item.label}</h3>
            <p className="text-2xl font-black">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;