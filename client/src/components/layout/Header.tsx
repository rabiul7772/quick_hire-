import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { LayoutDashboard, LogOut, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  const NavLinks = () => (
    <>
      <Link
        to="/jobs"
        className="hover:text-brand-primary transition-colors py-2 md:py-0"
        onClick={() => setIsMenuOpen(false)}
      >
        Find Jobs
      </Link>
      <Link
        to="/companies"
        className="hover:text-brand-primary transition-colors py-2 md:py-0"
        onClick={() => setIsMenuOpen(false)}
      >
        Browse Companies
      </Link>
      {isAdmin && (
        <Link
          to="/admin/jobs"
          className="flex items-center gap-2 px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-lg font-bold hover:bg-brand-primary/20 transition-all text-sm w-fit"
          onClick={() => setIsMenuOpen(false)}
        >
          <LayoutDashboard className="w-4 h-4" />
          Admin Dashboard
        </Link>
      )}
    </>
  );

  return (
    <header className="px-6 lg:px-[124px] h-[78px] flex items-center justify-between border-b border-neutral-20 bg-white relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold leading-none">
          <img src="/logo.png" alt="logo" className="w-full h-full" />
        </div>
        <Link
          to="/"
          className="font-clash font-semibold text-2xl text-neutral-100 tracking-tight"
          onClick={() => setIsMenuOpen(false)}
        >
          QuickHire
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 font-medium text-neutral-80">
        <NavLinks />
      </nav>

      <div className="flex items-center gap-4">
        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 text-neutral-100 font-bold font-epilogue">
                <div className="w-8 h-8 rounded-full bg-neutral-10 flex items-center justify-center">
                  <User className="w-4 h-4 text-neutral-60" />
                </div>
                <span>{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-neutral-60 hover:text-accent-red hover:bg-accent-red/10 rounded-lg transition-all"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-bold text-brand-primary hover:text-brand-primary/80 transition-colors px-4 py-2"
              >
                Login
              </Link>
              <span className="w-px h-6 bg-neutral-20" />
              <Link to="/signup">
                <Button variant="primary" size="md">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="p-2 text-neutral-80 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[78px] left-0 right-0 bg-white border-b border-neutral-20 p-6 flex flex-col gap-6 md:hidden shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 font-medium text-neutral-80">
            <NavLinks />
          </nav>
          <div className="pt-6 border-t border-neutral-20 flex flex-col gap-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 text-neutral-100 font-bold font-epilogue">
                  <div className="w-10 h-10 rounded-full bg-neutral-10 flex items-center justify-center">
                    <User className="w-5 h-5 text-neutral-60" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-clash">{user?.name}</span>
                    <span className="text-xs text-neutral-60 font-medium">
                      {user?.email}
                    </span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={handleLogout}
                  className="text-accent-red border-accent-red/20 hover:bg-accent-red/5"
                  icon={<LogOut className="w-4 h-4" />}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="secondary" fullWidth>
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" fullWidth>
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
