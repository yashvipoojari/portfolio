import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

export default function Navbar() {
  const { profile, nav } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#1E1E1E]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo / brand */}
        <button
          onClick={() => handleNav('#home')}
          className="font-kanit font-semibold text-lg tracking-tight text-gradient"
          aria-label="Go to top"
        >
          {profile.shortName}
          <span className="text-[#2A2A2A]">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {nav.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id || (id === 'home' && active === 'home');
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={`
                    relative px-4 py-2 text-sm font-kanit font-medium tracking-wide
                    transition-colors duration-200 rounded-md
                    ${isActive
                      ? 'text-white'
                      : 'text-[#666] hover:text-[#aaa]'
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-md bg-white/5" />
                  )}
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${profile.social.email}`}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-kanit font-semibold text-white btn-gradient"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#888] hover:text-white transition-colors"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          bg-[#0C0C0C]/98 backdrop-blur-md border-b border-[#1E1E1E]
          ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {nav.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className="w-full text-left px-3 py-3 text-sm font-kanit font-medium text-[#888] hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={`mailto:${profile.social.email}`}
              className="block w-full text-center px-5 py-3 rounded-full text-sm font-kanit font-semibold text-white btn-gradient"
              onClick={() => setMobileOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
