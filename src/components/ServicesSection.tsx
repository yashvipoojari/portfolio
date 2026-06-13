import { motion } from 'framer-motion';
import { Server, Brain, Monitor, Cloud, type LucideIcon } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

// Maps the string icon name stored in portfolio.json to the Lucide component.
// Add entries here whenever a new icon is added to the JSON.
const ICON_MAP: Record<string, LucideIcon> = {
  Server,
  Brain,
  Monitor,
  Cloud,
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesSection() {
  const { services } = usePortfolio();

  return (
    <section id="services" className="py-24 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.2em] uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white">
            Services
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] ?? Server;
            const isLast = i === services.length - 1;
            return (
              <motion.div
                key={svc.num}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              >
                <div className="h-px bg-[#1A1A1A]" />
                <div className="py-10 grid md:grid-cols-[80px_1fr] gap-6 md:gap-10">
                  {/* Number */}
                  <motion.div variants={fadeUp}>
                    <span className="text-5xl font-kanit font-black text-[#1E1E1E] num-accent select-none">
                      {svc.num}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <motion.div variants={fadeUp} className="flex items-start gap-4">
                      <div
                        className="mt-0.5 p-2.5 rounded-xl border border-[#222]"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(249,115,22,0.05))',
                        }}
                      >
                        <Icon size={20} className="text-[#a855f7]" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-kanit font-bold text-white">
                          {svc.title}
                        </h3>
                        <p className="text-sm font-kanit text-[#555] mt-0.5">{svc.subtitle}</p>
                      </div>
                    </motion.div>

                    <motion.p
                      variants={fadeUp}
                      className="text-[#666] font-kanit font-light text-sm leading-relaxed max-w-2xl"
                    >
                      {svc.description}
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-xs font-kanit font-medium text-[#666] bg-[#111] border border-[#1E1E1E]"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
                {isLast && <div className="h-px bg-[#1A1A1A]" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
