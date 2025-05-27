import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import WebArchivePage from './pages/WebArchivePage';
import EmailArchivePage from './pages/EmailArchivePage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/webarchive\" replace />} />
            <Route path="/webarchive" element={<WebArchivePage />} />
            <Route path="/email" element={<EmailArchivePage />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-white py-4">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>© {new Date().getFullYear()} WebArchive Viewer. This is a demonstration project.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;