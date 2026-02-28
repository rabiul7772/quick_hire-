import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LandingPage } from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobs" element={<div className="p-20">Jobs Page</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
