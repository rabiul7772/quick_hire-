import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Header = () => {
  return (
    <header className="px-6 lg:px-[124px] h-[78px] flex items-center justify-between border-b border-neutral-20 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold leading-none">
          <img src="/logo.png" alt="logo" className="w-full h-full" />
        </div>
        <Link
          to="/"
          className="font-clash font-semibold text-2xl text-neutral-100 tracking-tight"
        >
          QuickHire
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8 font-medium text-neutral-80">
        <Link to="/jobs" className="hover:text-brand-primary transition-colors">
          Find Jobs
        </Link>
        <Link
          to="/companies"
          className="hover:text-brand-primary transition-colors"
        >
          Browse Companies
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="font-bold text-brand-primary hover:text-brand-primary/80 transition-colors px-4 py-2"
        >
          Login
        </Link>
        <span className="w-px h-6 bg-neutral-20 hidden md:block" />
        <Button variant="primary" size="md">
          Sign Up
        </Button>
      </div>
    </header>
  );
};
