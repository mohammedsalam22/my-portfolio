import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Pill, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    icon: Activity,
    title: "Hospital Management System",
    subtitle: "Enterprise Automation Platform",
    overview: "A comprehensive hospital automation system designed to centralize and streamline hospital operations, improving efficiency across all departments.",
    problem: "Hospitals faced fragmented systems causing communication delays, manual errors, and lack of real-time visibility into operations.",
    solution: "Built a unified platform with real-time WebSocket notifications, role-based access control, and modular architecture for seamless scalability.",
    features: [
      "Employee & Patient Management",
      "Laboratory & Radiology Systems",
      "ICU & Room Management",
      "Operating Room Scheduling",
      "Real-time Notifications",
    ],
    technologies: ["Flutter", "BLoC", "WebSocket", "SQLite", "Clean Architecture"],
    impact: [
      "40% reduction in operational delays",
      "Real-time cross-department visibility",
      "Improved patient care coordination",
    ],
    gradient: "from-red-500 via-pink-500 to-primary",
  },
  {
    id: 2,
    icon: Pill,
    title: "Pharmacy Application",
    subtitle: "Modern Medication Ordering Platform",
    overview: "A user-centric pharmacy application focused on providing a smooth and intuitive medication ordering experience with comprehensive drug information.",
    problem: "Traditional pharmacy ordering was slow, error-prone, and lacked detailed medication information for users.",
    solution: "Developed a mobile-first application with smart search, detailed drug information, and a streamlined ordering workflow.",
    features: [
      "Medication Browsing & Details",
      "Smart Search & Filtering",
      "Secure Ordering Workflow",
      "Order History & Tracking",
      "User-friendly Mobile UI",
    ],
    technologies: ["Flutter", "Provider", "Hive", "REST API", "Clean Architecture"],
    impact: [
      "60% faster ordering process",
      "Reduced user errors by 75%",
      "Enhanced user engagement",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: 3,
    icon: Warehouse,
    title: "Warehouse Automation System",
    subtitle: "Inventory Optimization Platform",
    overview: "An advanced warehouse automation system built to optimize inventory management, reduce errors, and provide real-time operational insights.",
    problem: "Manual inventory tracking led to stockouts, overstocking, and lack of visibility into warehouse operations.",
    solution: "Created a real-time inventory system with automated workflows, live dashboards, and predictive analytics.",
    features: [
      "Real-time Inventory Tracking",
      "Automated Workflows",
      "Live Operational Dashboard",
      "Error Detection & Prevention",
      "Performance Analytics",
    ],
    technologies: ["Flutter", "GetX", "SQLite", "WebSocket", "Docker"],
    impact: [
      "85% reduction in manual errors",
      "Real-time inventory visibility",
      "30% increase in operational efficiency",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500">
        {/* Project header with gradient */}
        <div className={`relative h-48 md:h-64 bg-gradient-to-br ${project.gradient} p-8 flex items-end`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="relative z-10">
            <p className="text-white/80 text-sm font-medium mb-1">{project.subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Project content */}
        <div className="p-6 md:p-8">
          {/* Overview */}
          <p className="text-muted-foreground mb-6">{project.overview}</p>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">THE PROBLEM</h4>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">THE SOLUTION</h4>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3">KEY FEATURES</h4>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3">TECHNOLOGIES</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="pt-6 border-t border-border">
            <h4 className="text-sm font-semibold text-primary mb-3">IMPACT & RESULTS</h4>
            <ul className="space-y-2">
              {project.impact.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with engineering excellence. Each project 
            showcases problem-solving, architecture decisions, and measurable impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
