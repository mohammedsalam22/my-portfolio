import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingIcon = ({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) => (
  <motion.div
    className={`absolute text-primary/20 ${className}`}
    animate={{
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    // Simple direct download approach
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mohammed_Salam_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
        
        {/* Dynamic floating orbs with rotation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -100, 110, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/12 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 90, 0],
            y: [0, 130, -70, 0],
            scale: [1, 1.35, 0.85, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/12 rounded-full blur-3xl"
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -120, 95, 0],
            scale: [1, 1.4, 0.8, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Moving particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 8}%`,
              top: `${10 + i * 8}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 90, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 2.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Rotating shapes */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-32 h-32 border-2 border-primary/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 border-purple-400/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        
        {/* Animated gradient lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
          animate={{
            x: ["100%", "-100%"],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      {/* Floating tech icons */}
      <FloatingIcon delay={0} className="top-20 left-[15%] text-4xl">
        <span className="font-mono text-primary/30">{"<Flutter/>"}</span>
      </FloatingIcon>
      <FloatingIcon delay={1} className="top-32 right-[20%] text-3xl">
        <span className="font-mono text-primary/30">{"{ React }"}</span>
      </FloatingIcon>
      <FloatingIcon delay={2} className="bottom-32 left-[10%] text-2xl">
        <span className="font-mono text-primary/30">{"async/await"}</span>
      </FloatingIcon>
      <FloatingIcon delay={0.5} className="bottom-40 right-[15%] text-3xl">
        <span className="font-mono text-primary/30">{"=> BLoC"}</span>
      </FloatingIcon>
      <FloatingIcon delay={1.5} className="top-1/2 left-[5%] text-2xl">
        <span className="font-mono text-primary/30">{"Docker"}</span>
      </FloatingIcon>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-foreground">Mid </span>
            <span className="text-gradient">Flutter</span>
            <br />
            <span className="text-foreground">& Frontend Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            3+ years crafting high-performance mobile and web applications with 
            <span className="text-primary"> clean architecture</span>, 
            <span className="text-primary"> scalable solutions</span>, and 
            <span className="text-primary"> pixel-perfect UIs</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="glow px-8 py-6 text-lg font-semibold"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-primary/30 hover:bg-primary/10"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/mohammedsalam22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ms6960852@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
