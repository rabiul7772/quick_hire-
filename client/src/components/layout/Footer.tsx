import { Link } from 'react-router-dom';
import { socialLinks } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-white pt-16 pb-10 px-6 lg:px-[124px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold leading-none">
              <img src="/logo.png" alt="logo" className="w-full h-full" />
            </div>
            <span className="font-clash font-semibold text-2xl text-white tracking-tight">
              QuickHire
            </span>
          </div>
          <p className="text-neutral-20 max-w-[376px] leading-relaxed">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-xl mb-6 font-epilogue">
            About
          </h3>
          <ul className="flex flex-col gap-4 text-neutral-20">
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Companies
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Advice
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-xl mb-6 font-epilogue">
            Resources
          </h3>
          <ul className="flex flex-col gap-4 text-neutral-20">
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Help Docs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Guide
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Updates
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-4">
          <h3 className="text-white font-bold text-xl font-epilogue">
            Get job notifications
          </h3>
          <p className="text-neutral-20">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white px-4 py-3 text-neutral-100 w-full outline-none"
            />
            <button className="bg-brand-primary px-6 py-3 font-bold hover:bg-brand-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-20 text-sm">
          2021 @ QuickHire. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white/70 hover:text-white"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
