import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  const { profile, education, stats } = usePortfolio();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start"
        >
          {/* Left column */}
          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.2em] uppercase mb-3">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white leading-tight">
                Building models that{' '}
                <span className="text-gradient">actually work.</span>
              </h2>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111]"
                >
                  <p className="text-2xl font-kanit font-bold text-gradient num-accent">{num}</p>
                  <p className="text-xs font-kanit text-[#555] mt-1">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            {education.length > 0 && (
              <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.15em] uppercase">
                  Education
                </p>
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="p-4 rounded-xl border border-[#1E1E1E] bg-[#111] space-y-1"
                  >
                    <p className="text-sm font-kanit font-semibold text-white">{edu.institution}</p>
                    <p className="text-xs font-kanit text-[#666]">{edu.degree}</p>
                    <p className="text-xs font-kanit text-[#444]">
                      {edu.period} · {edu.location}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right column — bio */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div
              className="text-[1.05rem] md:text-lg text-[#888] font-kanit font-light leading-[1.85]"
              style={{ overflowWrap: 'normal', wordBreak: 'normal', hyphens: 'none' }}
            >
              {profile.bio.split('. ').map((sentence, i, arr) => (
                <span key={i}>
                  {sentence}
                  {i < arr.length - 1 ? '. ' : ''}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href={`mailto:${profile.social.email}`}
                className="px-6 py-3 rounded-full font-kanit font-semibold text-sm text-white btn-gradient"
              >
                Work with me
              </a>
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-kanit font-semibold text-sm text-[#777] border border-[#2A2A2A] hover:border-[#444] hover:text-white transition-all bg-[#111]"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}