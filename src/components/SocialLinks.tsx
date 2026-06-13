import { Github, Instagram, Linkedin, Mail, Globe } from 'lucide-react';
import type { Social } from '../types/portfolio';

interface Props {
  social: Social;
  variant?: 'pill' | 'icon' | 'footer';
  className?: string;
}

const SOCIAL_CONFIG = [
  { key: 'github' as keyof Social,    label: 'GitHub',    Icon: Github,    color: '#e5e7eb' },
  { key: 'linkedin' as keyof Social,  label: 'LinkedIn',  Icon: Linkedin,  color: '#0a66c2' },
  { key: 'instagram' as keyof Social, label: 'Instagram', Icon: Instagram, color: '#e1306c' },
  { key: 'website' as keyof Social,   label: 'Website',   Icon: Globe,     color: '#a855f7' },
  { key: 'email' as keyof Social,     label: 'Email',     Icon: Mail,      color: '#ec4899'  },
] as const;

export default function SocialLinks({ social, variant = 'pill', className = '' }: Props) {
  const items = SOCIAL_CONFIG.filter(({ key }) => {
    const val = social[key];
    return typeof val === 'string' && val.trim() !== '';
  });

  if (items.length === 0) return null;

  if (variant === 'icon') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {items.map(({ key, label, Icon }) => {
          const href = key === 'email' ? `mailto:${social[key]}` : social[key];
          return (
            <a
              key={key}
              href={href}
              target={key !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-[#555] hover:text-white transition-colors hover:bg-white/5"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 flex-wrap ${className}`}>
        {items.map(({ key, label, Icon }) => {
          const href = key === 'email' ? `mailto:${social[key]}` : social[key];
          return (
            <a
              key={key}
              href={href}
              target={key !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg border border-[#1E1E1E] text-[#555] hover:text-white hover:border-[#2A2A2A] transition-all"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    );
  }

  // pill variant
  return (
    <div className={`flex items-center gap-2 flex-wrap justify-center ${className}`}>
      {items.map(({ key, label, Icon }) => {
        const href = key === 'email' ? `mailto:${social[key]}` : social[key];
        return (
          <a
            key={key}
            href={href}
            target={key !== 'email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111] text-sm font-kanit text-[#888] hover:text-white hover:border-[#444] transition-all duration-200"
          >
            <Icon size={14} />
            {label}
          </a>
        );
      })}
    </div>
  );
}
