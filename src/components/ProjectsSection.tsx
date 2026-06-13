import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  // highlight:true sorted first, then by year desc
  const sorted = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return Number(b.year) - Number(a.year);
  });

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-kanit font-medium text-[#555] tracking-[0.2em] uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-kanit font-bold text-white">
            Projects
          </h2>
        </motion.div>

        {/* 2 columns always on sm+, single col on mobile */}
        <div className="grid sm:grid-cols-2 gap-5">
          {sorted.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}