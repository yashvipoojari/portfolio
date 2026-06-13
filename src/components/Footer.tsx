import { useState } from 'react';
import { Copy, Check, Phone, Mail, MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

function handleNav(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  const { profile, footerNav } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: just open mailto
      window.location.href = `mailto:${profile.social.email}`;
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Col 1 — Brand */}
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-kanit font-extrabold hero-heading leading-tight">
              {profile.name}
            </h2>
            <p className="text-sm font-kanit text-[#555] mt-2">{profile.specialization}</p>
          </div>
          <p className="text-sm font-kanit font-light text-[#444] leading-relaxed max-w-xs">
            {profile.tagline.slice(0, 100)}
            {profile.tagline.length > 100 ? '…' : ''}
          </p>
          <div className="flex items-center gap-1.5 text-xs font-kanit text-[#444]">
            <MapPin size={12} />
            {profile.location}
          </div>
          <SocialLinks social={profile.social} variant="footer" />
        </div>

        {/* Col 2 — Navigate */}
        <div className="space-y-5">
          <h3 className="text-xs font-kanit font-semibold text-[#555] tracking-[0.2em] uppercase">
            Navigate
          </h3>
          <ul className="space-y-3">
            {footerNav.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="text-sm font-kanit text-[#555] hover:text-white transition-colors duration-200 text-left"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Reach out */}
        <div className="space-y-5">
          <h3 className="text-xs font-kanit font-semibold text-[#555] tracking-[0.2em] uppercase">
            Reach Out
          </h3>

          <div className="space-y-4">
            {/* Email with copy button */}
            {profile.social.email && (
              <div className="space-y-2">
                <p className="text-xs font-kanit text-[#444] uppercase tracking-wider">Email</p>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${profile.social.email}`}
                    className="text-sm font-kanit text-[#777] hover:text-white transition-colors truncate"
                  >
                    {profile.social.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="shrink-0 p-1.5 rounded-md border border-[#222] bg-[#111] text-[#555] hover:text-white hover:border-[#333] transition-all"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check size={13} className="text-emerald-400" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Phone */}
            {profile.social.phone && (
              <div className="space-y-2">
                <p className="text-xs font-kanit text-[#444] uppercase tracking-wider">Phone</p>
                <a
                  href={`tel:${profile.social.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm font-kanit text-[#777] hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-[#444]" />
                  {profile.social.phone}
                </a>
              </div>
            )}

            {/* CTA */}
            <div className="pt-2">
              <a
                href={`mailto:${profile.social.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-kanit font-semibold text-white btn-gradient"
              >
                <Mail size={14} />
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[#161616]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-kanit text-[#333]">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs font-kanit text-[#2A2A2A]">
            Built with React · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
