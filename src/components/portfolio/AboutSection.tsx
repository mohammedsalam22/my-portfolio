import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Shield } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Advocate for maintainable, testable code with clear separation of concerns.",
  },
  {
    icon: Rocket,
    title: "Performance-Driven",
    description: "Obsessed with optimizing every millisecond of user experience.",
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Building systems that grow seamlessly from MVP to millions of users.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Rigorous testing and code review to ensure rock-solid applications.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs with rotation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 70, 0],
            y: [0, 90, -40, 0],
            scale: [1, 1.25, 0.85, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Moving particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Rotating gradient shapes */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-32 h-32 border-2 border-primary/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 border-purple-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1), transparent 50%), radial-gradient(circle at 70% 80%, hsl(262 83% 58% / 0.1), transparent 50%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        />
        
        {/* Animated gradient lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.2, 0.5, 0.2],
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
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          
          {/* Profile Image and Bio Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex-shrink-0"
            >
              <div className="relative group">
                {/* Subtle animated gradient ring */}
                <motion.div 
                  className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-400/10 to-primary/10 blur-2xl"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Image container */}
                <motion.div 
                  className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10"
                  whileHover={{ 
                    borderColor: "hsl(var(--primary) / 0.4)",
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Mohammed Salam"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                </motion.div>
                
                {/* Subtle decorative accent */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary/60 border-2 border-background shadow-md"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Bio Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a Mid Flutter & Frontend Developer with over 3 years of experience 
                building production-ready applications that solve real business problems. 
                My expertise spans across mobile development with Flutter, web applications 
                with React, and robust backend integrations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on transforming complex requirements into elegant, user-friendly 
                solutions. Whether it's architecting a hospital management system or 
                optimizing warehouse operations, I bring the same level of dedication 
                to every project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* My Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My <span className="text-gradient">Approach</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I combine solid academic foundations in software engineering with hands-on experience in modern web technologies, always prioritizing clean code, optimal performance, and intuitive design.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
