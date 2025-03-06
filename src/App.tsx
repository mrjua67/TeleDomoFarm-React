import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { CropsTable } from './components/crops/CropsTable';
import { Statistics } from './components/statistics/Statistics';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/crops" element={<CropsTable />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/tasks" element={<div>Tareas</div>} />
              <Route path="/livestock" element={<div>Inventario Ganadero</div>} />
              <Route path="/comments" element={<div>Comentarios</div>} />
              <Route path="/settings" element={<div>Settings</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;