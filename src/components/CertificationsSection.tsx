import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CERTS = [
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'March 2026',
    color: '#f97316',
  },
  {
    title: 'Excel Using AI',
    issuer: 'OfficeMaster',
    date: 'July 2025',
    color: '#22c55e',
  },
  {
    title: 'Visualizing Data with Python',
    issuer: 'IBM · edX',
    date: 'July 2023',
    color: '#a855f7',
  },
  {
    title: 'Analyzing Data with Python',
    issuer: 'IBM · edX',
    date: 'July 2023',
    color: '#ec4899',
  },
  {
    title: 'Python Basics for Data Science',
    issuer: 'IBM · edX',
    date: 'June 2023',
    color: '#0891b2',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.2em] uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              className="group p-5 rounded-2xl border border-[#1E1E1E] bg-[#0E0E0E] card-glow flex flex-col gap-4"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}30`,
                }}
              >
                <Award size={18} style={{ color: cert.color }} />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-1">
                <p className="text-sm font-kanit font-semibold text-white leading-snug">
                  {cert.title}
                </p>
                <p className="text-xs font-kanit text-[#555]">{cert.issuer}</p>
              </div>

              {/* Date badge */}
              <span className="self-start px-2.5 py-1 rounded-md border border-[#222] bg-[#111] text-[11px] font-mono text-[#555]">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}