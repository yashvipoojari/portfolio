import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
};

export default function HeroSection() {
  const { profile } = usePortfolio();

  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const desktopVideo = videoRef.current;
    const mobileVideo = mobileVideoRef.current;

    /*
     * Both videos start muted so the browser allows autoplay.
     * Only the video that is actually visible will be unmuted
     * after the user interacts with the page.
     */

    if (desktopVideo) {
      desktopVideo.muted = true;
      desktopVideo.volume = 1;

      desktopVideo.play().catch(() => {});
    }

    if (mobileVideo) {
      mobileVideo.muted = true;
      mobileVideo.volume = 1;

      mobileVideo.play().catch(() => {});
    }

    const enableAudio = () => {
      const isMobile = window.innerWidth < 768;

      // Only enable audio on the currently visible video.
      const activeVideo = isMobile
        ? mobileVideoRef.current
        : videoRef.current;

      if (!activeVideo) return;

      activeVideo.muted = false;
      activeVideo.volume = 1;

      activeVideo.play().catch(() => {});

      // Make absolutely sure the hidden video stays silent.
      const inactiveVideo = isMobile
        ? videoRef.current
        : mobileVideoRef.current;

      if (inactiveVideo) {
        inactiveVideo.muted = true;
        inactiveVideo.volume = 0;
      }

      document.removeEventListener('click', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };

    document.addEventListener('click', enableAudio, {
      once: true
    });

    document.addEventListener('touchstart', enableAudio, {
      once: true
    });

    document.addEventListener('keydown', enableAudio, {
      once: true
    });

    /*
     * Original avatar animation.
     */
    if (desktopVideo) {
      const animation = desktopVideo.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(1.02)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: 7000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );

      return () => {
        animation.cancel();

        document.removeEventListener(
          'click',
          enableAudio
        );

        document.removeEventListener(
          'touchstart',
          enableAudio
        );

        document.removeEventListener(
          'keydown',
          enableAudio
        );
      };
    }

    return () => {
      document.removeEventListener(
        'click',
        enableAudio
      );

      document.removeEventListener(
        'touchstart',
        enableAudio
      );

      document.removeEventListener(
        'keydown',
        enableAudio
      );
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-[72px] pb-20 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)'
        }}
        aria-hidden="true"
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          DESKTOP VIDEO
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.15
        }}
        className="hidden md:block absolute top-0 bottom-0"
        style={{
          width: '42%',
          right: '0%',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        {/* Left fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, #0C0C0C 0%, transparent 50%)'
          }}
        />

        {/* Top fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, #0C0C0C 0%, transparent 12%)'
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to top, #0C0C0C 0%, transparent 10%)'
          }}
        />

        {/* Right fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to left, #0C0C0C 0%, transparent 40%)'
          }}
        />

        <video
          ref={videoRef}
          src="/avatar.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain"
          style={{
            objectPosition: 'center',
            opacity: 0.9
          }}
        />
      </motion.div>

      {/* =====================================================
          MOBILE VIDEO
          ===================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2
        }}
        className="md:hidden flex justify-center mb-6"
      >
        <div
          className="w-52 h-52"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 90% at 50% 50%, black 55%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 90% 90% at 50% 50%, black 55%, transparent 100%)'
          }}
        >
          <video
            ref={mobileVideoRef}
            src="/avatar.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div
        className="relative w-full max-w-5xl mx-auto"
        style={{
          zIndex: 10
        }}
      >
        <div
          className="flex flex-col items-center md:items-start gap-5 text-center md:text-left"
          style={{
            maxWidth: '58%'
          }}
        >
          <style>{`
            @media (max-width: 767px) {
              .hero-text-col {
                max-width: 100% !important;
                align-items: center !important;
                text-align: center !important;
              }
            }
          `}</style>

          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="hero-text-col"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2A2A2A] bg-[#111] text-xs font-kanit font-medium text-[#666] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

              Open to Application Engineering opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="space-y-1 w-full"
          >
            <p className="text-sm font-kanit font-medium text-[#555] tracking-[0.2em] uppercase">
              Hello, world
            </p>

            <h1
              className="hero-heading font-kanit font-extrabold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7.5rem)'
              }}
            >
              Hi, I'm {profile.shortName}
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl font-kanit font-medium text-gradient">
              {profile.role}
            </p>

            <p className="text-base md:text-lg text-[#888] font-kanit font-light leading-relaxed max-w-md">
              {profile.tagline}
            </p>
          </motion.div>

          {/* Location + Role */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="flex items-center gap-5 text-sm text-[#555] flex-wrap justify-center md:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <MapPin
                size={14}
                className="text-[#444]"
              />

              {profile.location}
            </span>

            <span className="w-px h-4 bg-[#2A2A2A]" />

            <span className="flex items-center gap-1.5">
              <Briefcase
                size={14}
                className="text-[#444]"
              />

              {profile.headlineMeta ??
                'Application Engineering'}
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="flex items-center gap-3 flex-wrap justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-kanit font-semibold text-sm text-white btn-gradient"
            >
              View my work
            </a>

            <a
              href={`mailto:${profile.social.email}`}
              className="px-6 py-3 rounded-full font-kanit font-semibold text-sm text-[#777] border border-[#2A2A2A] hover:border-[#444] hover:text-white transition-all bg-[#111]"
            >
              Contact me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="flex justify-center md:justify-start"
          >
            <SocialLinks
              social={profile.social}
              variant="pill"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 1.2,
          duration: 0.6
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333]"
        style={{
          zIndex: 10
        }}
      >
        <span className="text-[11px] font-kanit tracking-widest uppercase">
          Scroll
        </span>

        <div className="w-px h-10 bg-gradient-to-b from-[#333] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
