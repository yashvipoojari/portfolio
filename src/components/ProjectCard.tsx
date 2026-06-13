import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');
  const hasLink = project.link.trim() !== '';
  const hasImage = project.image.trim() !== '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="sticky-card"
    >
      <div className="rounded-2xl border border-[#1E1E1E] bg-[#0E0E0E] overflow-hidden card-glow">
        {/* Image / placeholder */}
        <div className="relative h-48 md:h-56 bg-[#111] overflow-hidden">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Dark placeholder with title overlay */
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
              {/* Ambient gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(249,115,22,0.05) 100%)`,
                }}
              />
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative text-center px-6">
                <p className="text-4xl md:text-5xl font-kanit font-black text-[#1E1E1E] select-none mb-2 num-accent">
                  {num}
                </p>
                <p className="text-sm font-kanit font-semibold text-[#333]">{project.title}</p>
              </div>
            </div>
          )}

          {/* Highlight badge */}
          {project.highlight && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-kanit font-bold text-white btn-gradient">
                <Star size={9} />
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-kanit font-bold text-white truncate">{project.title}</h3>
              <p className="text-sm font-kanit text-[#555] mt-0.5">{project.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2.5 py-1 rounded-md border border-[#222] bg-[#111] text-xs font-mono text-[#555]">
                {project.year}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm font-kanit font-light text-[#666] leading-relaxed">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-[11px] font-kanit font-medium text-[#666] bg-[#161616] border border-[#1E1E1E]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-2 border-t border-[#161616]">
            <span className="text-xs font-kanit text-[#444]">
              {project.role}
            </span>
            {/* LIVE PROJECT button — hidden when link empty */}
            {hasLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-kanit font-semibold text-white btn-gradient"
              >
                Live Project
                <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
