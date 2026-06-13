import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

export default function SkillsSection() {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="py-24 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.2em] uppercase mb-3">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: catIdx * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-5 rounded-2xl border border-[#1E1E1E] bg-[#111] card-glow"
            >
              <h3 className="text-xs font-kanit font-semibold text-[#555] tracking-[0.15em] uppercase mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-xs font-kanit font-medium text-[#888] bg-[#181818] border border-[#222] hover:text-white hover:border-[#333] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
