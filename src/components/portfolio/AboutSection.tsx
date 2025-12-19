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
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Senior Flutter & Frontend Developer with over 3 years of experience 
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
