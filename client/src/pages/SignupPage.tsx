import { Link } from 'react-router-dom';
import { SignupForm } from '../components/auth/SignupForm';

export const SignupPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-0/30">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-neutral-20 p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-clash text-neutral-100 mb-2">
            Create Account
          </h2>
          <p className="text-neutral-60 font-epilogue">
            Join QuickHire and find your dream job
          </p>
        </div>

        <SignupForm />

        <div className="mt-8 text-center">
          <p className="text-neutral-60 font-epilogue">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-brand-primary font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
