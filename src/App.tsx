import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/auth/AuthForm';
import { LandingPage } from './components/home/LandingPage';
import { Navbar } from './components/layout/Navbar';
import { Features } from './components/features/Features';
import { Pricing } from './components/pricing/Pricing';
import { Dashboard } from './components/dashboard/Dashboard';
import { MembershipPage } from './components/membership/MembershipPage';
import { useAuthStore } from './store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/dashboard" /> : <AuthForm />} 
          />
          <Route 
            path="/signup" 
            element={user ? <Navigate to="/dashboard" /> : <AuthForm />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route
            path="/membership"
            element={user ? <MembershipPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;