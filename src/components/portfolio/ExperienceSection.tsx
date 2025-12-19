import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "FullStack Developer",
    company: "Levantyx",
    location: "Remote (CA)",
    period: "Feb 2025 — Present",
    description: [
      "Developed responsive and accessible interfaces using React.js, TypeScript, and Material UI.",
      "Built cross-platform mobile applications with Flutter, implementing BLoC architecture for state management and clean architecture principles.",
      "Implemented modular, reusable components for consistent UI and faster development across web and mobile platforms.",
      "Integrated RESTful APIs and optimized data fetching with React Query and caching techniques.",
      "Designed and developed Flutter widgets with custom animations, responsive layouts, and platform-specific features.",
      "Focused on performance optimization, clean architecture, and maintainable TypeScript and Dart code.",
      "Worked within an agile workflow, contributing to feature planning, code reviews, and releases.",
    ],
    technologies: [
      "Flutter",
      "Bloc",
      "Clean architecture",
      "React",
      "TypeScript",
      "Redux",
      "Docker",
      "Azure DevOps",
      "GitLab",
      "ASP.NET",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, -110, 80, 0],
            y: [0, 50, -70, 0],
            scale: [1, 1.28, 0.88, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -90, 60, 0],
            scale: [1, 1.32, 0.82, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400/35"
            style={{
              left: `${10 + i * 12}%`,
              top: `${25 + i * 10}%`,
            }}
            animate={{
              y: [0, -130, 0],
              x: [0, Math.sin(i * 0.8) * 70, 0],
              opacity: [0.35, 0.75, 0.35],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4.5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          />
        ))}
        <motion.div
          className="absolute top-1/3 left-1/6 w-24 h-24 border-2 border-purple-400/25 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
          animate={{
            x: ["100%", "-100%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
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
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions and growing with innovative teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
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
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-primary font-semibold">
                          <Briefcase className="h-5 w-5" />
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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

export default ExperienceSection;

