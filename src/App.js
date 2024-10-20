import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileForm from './pages/ProfileForm';
import ProfilePage from './pages/ProfilePage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
