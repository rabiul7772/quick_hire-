import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { AllJobsPage } from './pages/AllJobsPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { AdminJobsPage } from './pages/admin/AdminJobsPage';
import { AddJobPage } from './pages/admin/AddJobPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/jobs" element={<AllJobsPage />} />

            {/* Protected Job Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/jobs/:id" element={<JobDetailPage />} />
            </Route>

            {/*Protected Admin Routes */}
            <Route element={<ProtectedRoute requireAdmin />}>
              <Route path="/admin/jobs" element={<AdminJobsPage />} />
              <Route path="/admin/jobs/new" element={<AddJobPage />} />
            </Route>
          </Routes>
        </MainLayout>
      </Router>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-neutral-0)',
            color: 'var(--color-neutral-100)'
          }
        }}
      />
    </AuthProvider>
  );
};

export default App;
