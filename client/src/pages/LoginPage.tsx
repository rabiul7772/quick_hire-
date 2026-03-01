import { Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';

export const LoginPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-0/30">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-neutral-20 p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-clash text-neutral-100 mb-2">
            Welcome Back
          </h2>
          <p className="text-neutral-60 font-epilogue">
            Log in to manage your career
          </p>
        </div>

        <LoginForm />

        <div className="mt-8 text-center">
          <p className="text-neutral-60 font-epilogue">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-brand-primary font-bold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
