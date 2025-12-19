import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology – Software Engineering",
    university: "Damascus University",
    location: "Damascus, Syria",
    period: "2020 — 2026",
    achievements: [
      "Mastered core software engineering principles including object-oriented programming, data structures, algorithms, and design patterns.",
      "Developed strong problem-solving and analytical thinking skills through hands-on projects and complex assignments.",
      "Designed and implemented scalable, maintainable software applications following industry best practices and clean architecture principles.",
      "Gained expertise in database design, system architecture, and software development lifecycle (SDLC) methodologies.",
      "Completed multiple capstone projects demonstrating proficiency in full-stack development and collaborative teamwork.",
      "Acquired knowledge in web technologies, mobile development frameworks, and modern software development tools.",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/12 rounded-full blur-3xl"
          animate={{
            x: [0, 85, -55, 0],
            y: [0, -65, 75, 0],
            scale: [1, 1.22, 0.92, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl"
          animate={{
            x: [0, -85, 65, 0],
            y: [0, 95, -45, 0],
            scale: [1, 1.28, 0.88, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 31,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/35"
            style={{
              left: `${12 + i * 14}%`,
              top: `${18 + i * 13}%`,
            }}
            animate={{
              y: [0, -110, 0],
              x: [0, Math.cos(i * 0.7) * 55, 0],
              opacity: [0.35, 0.7, 0.35],
              scale: [1, 1.7, 1],
            }}
            transition={{
              duration: 4.8 + i * 0.55,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.38,
            }}
          />
        ))}
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-26 h-26 border-2 border-primary/25 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
            delay: 1.2,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.2, 0.55, 0.2],
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span> & Academic Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A solid academic foundation that fuels my passion for building innovative software solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 hidden md:block" />

                <div className="md:ml-12">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-1">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-primary font-semibold">
                          <GraduationCap className="h-5 w-5" />
                          {edu.university}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

