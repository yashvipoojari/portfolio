import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="py-24 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.2em] uppercase mb-3">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experience.map((exp, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={`${exp.company}-${i}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              >
                {/* Divider */}
                <div className="h-px bg-[#1A1A1A]" />

                <div className="py-10 grid md:grid-cols-[80px_1fr] gap-6 md:gap-10">
                  {/* Number */}
                  <motion.div variants={fadeUp}>
                    <span className="text-5xl font-kanit font-black text-[#1E1E1E] num-accent select-none">
                      {num}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-5">
                    {/* Header row */}
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-kanit font-bold text-white">
                          {exp.company}
                        </h3>
                        <p className="text-base font-kanit font-medium text-gradient mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                        <span className="px-3 py-1 rounded-md border border-[#222] bg-[#111] text-xs font-mono text-[#666]">
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-kanit text-[#444]">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      </div>
                    </motion.div>

                    {/* Summary */}
                    <motion.p variants={fadeUp} className="text-[#666] font-kanit font-light text-sm leading-relaxed">
                      {exp.summary}
                    </motion.p>

                    {/* First 3 highlights */}
                    <motion.ul variants={fadeUp} className="space-y-2">
                      {exp.highlights.slice(0, 3).map((hl, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-kanit text-[#777]">
                          <span
                            className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              background: 'linear-gradient(135deg, #a855f7, #f97316)',
                            }}
                          />
                          {hl}
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="h-px bg-[#1A1A1A]" />
        </div>
      </div>
    </section>
  );
}
