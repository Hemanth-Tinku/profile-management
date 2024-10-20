import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileFormPage from './pages/ProfileFormPage';
import ProfilePage from './pages/ProfilePage';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/profile-form" element={<ProfileFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
