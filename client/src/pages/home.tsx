import React, { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { RotateCcw, Mail } from "lucide-react";
import logoUrl from "@assets/LogoForHeader-removebg-preview_1764017143644.png";
import videoUrl from "@assets/Record_2025-11-25-12-53-56_7e5fa194045be871f4290448dc08e694~2_1764056753662.mp4";
import youtubeLogo from "@assets/yt_icon_white_digital_1764017737980.png";
import githubLogo from "@assets/GitHub_Invertocat_Light_1764018444376.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#000543] text-white font-sans overflow-x-hidden selection:bg-[#0038FF] selection:text-white">
      
      {/* Navbar / Header */}
      <header className="w-full py-8 flex justify-center items-center z-50 relative">
        <a href="https://boundier.xyz/" target="_blank" rel="noopener noreferrer">
          <img src={logoUrl} alt="Boundier" className="h-16 md:h-20 object-contain" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 md:pt-20 pb-24 text-center max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center gap-8"
        >
          <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            You See It. <br className="hidden md:block" />
            <span className="text-[#0038FF]">We Read It.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white max-w-4xl font-light leading-relaxed mt-10 md:mt-10">
            Boundier shows how the content you see affects what you pay attention to,<br className="block" />
            what you believe, and what your feed becomes over time.
          </motion.p>

          <motion.div variants={fadeIn} className="inline-flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-12 mt-12 mb-2 text-base md:text-lg font-normal text-white/70">
            <span className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-[#0038FF] shrink-0"></div> Tracks attention trends
            </span>
            <span className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-[#0038FF] shrink-0"></div> Detects manipulation
            </span>
            <span className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full border-2 border-[#0038FF] shrink-0"></div> Warns echo chambers
            </span>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-12">
            <a 
               href="https://forms.fillout.com/t/g6uj4TPDgrus" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-10 py-4 rounded-full bg-[#0038FF] text-white text-lg font-semibold hover:bg-[#0026b3] transition-colors shadow-[0_0_25px_rgba(0,56,255,0.4)]"
             >
               Join Waitlist
             </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Mobile Frame Video */}
      <section className="relative z-10 flex flex-col items-center justify-center pb-32 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center gap-8"
        >
          <div className="relative w-full max-w-[360px] md:max-w-[450px] glass-light rounded-[32px] p-3 shadow-[0px_4px_30px_rgba(0,0,0,0.3)] overflow-hidden border border-white/10 mx-auto">
            <div className="w-full rounded-[24px] overflow-hidden bg-black/20 relative">
              <video 
                ref={videoRef}
                src={videoUrl} 
                className="w-full h-auto block"
                autoPlay 
                loop 
                muted 
                playsInline
                onTimeUpdate={handleTimeUpdate}
              />
              {/* Glossy overlay for glass effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay"></div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div 
                  className="h-full bg-[#0038FF] transition-all duration-200 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Replay Button - Always visible, below frame */}
          <button 
            onClick={handleReplay}
            className="h-12 w-12 flex items-center justify-center rounded-full glass-light border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group shadow-lg"
            aria-label="Replay Video"
          >
            <RotateCcw size={20} className="text-white/80 group-hover:text-white group-hover:-rotate-180 transition-all duration-500" />
          </button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-white/40 text-sm uppercase tracking-widest font-medium"
        >
          Design Prototype
        </motion.p>
      </section>

      {/* Section 2: What Boundier Does */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Boundier Is
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div variants={fadeIn} className="glass-light p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors duration-300 group">
              <div className="h-12 w-12 rounded-full glass-light border border-white/10 flex items-center justify-center text-blue-200 mb-2 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,56,255,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-xl font-bold">Influence</h3>
              <p className="text-white/70 leading-relaxed">
                Shows how content pulls your attention, shifts what you focus on, and gradually reshapes your sense of importance.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn} className="glass-light p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors duration-300 group">
              <div className="h-12 w-12 rounded-full glass-light border border-white/10 flex items-center justify-center text-blue-200 mb-2 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,56,255,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-xl font-bold">Distortion</h3>
              <p className="text-white/70 leading-relaxed">
                Exposes emotional pressure, framing tactics, and narrative cues designed to make ideas feel true before you even think about them.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn} className="glass-light p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors duration-300 group">
              <div className="h-12 w-12 rounded-full glass-light border border-white/10 flex items-center justify-center text-blue-200 mb-2 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,56,255,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
              </div>
              <h3 className="text-xl font-bold">Echo Drift</h3>
              <p className="text-white/70 leading-relaxed">
                Detects when your feed stops giving you contrast, filters out opposing views, and begins reinforcing a single perspective repeatedly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Beta Signup Section */}
      <section className="relative z-10 py-16 px-6 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-xl glass-dark p-10 rounded-3xl border border-white/5 shadow-xl"
        >
          <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-bold mb-4">
            Join the Private Beta
          </motion.h2>
          <motion.p variants={fadeIn} className="text-white/60 mb-8">
            Be among the first to see your digital reality clearly.
          </motion.p>
          
          <motion.div variants={fadeIn}>
             <a 
               href="https://forms.fillout.com/t/g6uj4TPDgrus" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-10 py-4 rounded-full bg-[#0038FF] text-white text-lg font-semibold hover:bg-[#0026b3] transition-colors shadow-[0_0_25px_rgba(0,56,255,0.4)]"
             >
               Join Waitlist
             </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6 border-t border-white/5 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <a href="https://boundier.xyz/" target="_blank" rel="noopener noreferrer">
              <img src={logoUrl} alt="Boundier" className="h-16 object-contain" />
            </a>
          </div>

          {/* Right - Socials & Contact */}
          <div className="flex items-center gap-6 flex-1 justify-center md:justify-end">
            <a 
              href="https://youtube.com/@boundier" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 w-14 flex items-center justify-center rounded-full glass-light border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            >
              <img src={youtubeLogo} alt="YouTube" className="h-6 w-auto opacity-80 group-hover:opacity-100" />
            </a>
            <a 
              href="https://github.com/Boundier" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-14 w-14 flex items-center justify-center rounded-full glass-light border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            >
              <img src={githubLogo} alt="GitHub" className="h-6 w-auto opacity-80 group-hover:opacity-100" />
            </a>
            <a 
              href="mailto:boundierofficial@gmail.com"
              className="h-14 w-14 flex items-center justify-center rounded-full glass-light border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              aria-label="Email Us"
            >
              <Mail className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-16 text-xs text-white/20">
          © {new Date().getFullYear()} Boundier. All rights reserved.
        </div>
      </footer>
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#0038FF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#0038FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>
    </div>
  );
}
