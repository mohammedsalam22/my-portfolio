import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Flutter / Mobile",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
      { name: "Provider / BLoC / GetX", level: 90 },
      { name: "Clean Architecture", level: 90 },
      { name: "Animations & Custom Widgets", level: 85 },
    ],
  },
  {
    title: "Frontend / React",
    color: "from-primary to-purple-400",
    skills: [
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "REST API Integration", level: 90 },
    ],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "SQLite", level: 90 },
      { name: "Hive", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Azure DevOps", level: 80 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/12 rounded-full blur-3xl"
          animate={{
            x: [0, 90, -60, 0],
            y: [0, -70, 80, 0],
            scale: [1, 1.25, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl"
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.3, 0.85, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.cos(i) * 60, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 5 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
        <motion.div
          className="absolute top-1/4 right-1/4 w-28 h-28 border-2 border-primary/25 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over 3+ years of solving real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={categoryIndex * 0.1 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
