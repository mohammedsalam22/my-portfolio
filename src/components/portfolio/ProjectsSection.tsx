import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Pill, Warehouse, School, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    icon: Home,
    title: "Property E-commerce Application",
    subtitle: "Real Estate Platform with Social Features",
    overview: "Real estate e-commerce platform with social features, property search, saved listings, real-time messaging, and user interaction capabilities.",
    problem: "Traditional real estate platforms lacked social engagement features, making it difficult for users to interact, share properties, and communicate in real-time with other users and property owners.",
    solution: "Developed a comprehensive e-commerce application with social networking capabilities including posts, comments, and interactions to enhance user engagement. Implemented advanced search functionality and saved property features to improve user experience and content accessibility. Designed real-time notification system and messaging functionality using WebSocket for seamless communication. Built follow request system to manage connections between users and create a social network within the platform. Utilized Laravel for robust backend development and Flutter for dynamic and responsive frontend interface. Applied efficient database management and optimized API performance for scalability and reliability.",
    features: [
      "Property Search & Filtering",
      "Saved Property Listings",
      "Social Posts & Comments",
      "User Interactions & Engagement",
      "Real-time Messaging System",
      "Follow Request System",
      "Real-time Notifications",
      "User Profile Management",
    ],
    technologies: ["Flutter", "Laravel", "PHP", "WebSocket", "Real-time Messaging"],
    impact: [
      "Enhanced user engagement through social features",
      "Improved property discovery with advanced search",
      "Enabled real-time communication between users",
      "Created social network within the platform",
      "Optimized performance for scalability",
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    id: 2,
    icon: School,
    title: "School Ecosystem Management System",
    subtitle: "Full-Scale Educational Platform (Web & Mobile)",
    overview: "A comprehensive full-scale school ecosystem platform designed to digitally manage all school operations from A to Z. The system consists of a web application for school staff and mobile applications for parents and receptionists, all connected through real-time data synchronization.",
    problem: "Schools struggled with manual, paper-based workflows, fragmented communication between parents and staff, lack of real-time visibility into student performance, and inefficient administrative operations across multiple departments.",
    solution: "Built an enterprise-level multi-platform ecosystem with a centralized web administration panel for school staff and mobile applications for parents and receptionists. Implemented real-time synchronization between all platforms with advanced offline-first architecture for mobile apps, including robust sync strategies to handle offline scenarios seamlessly. Designed comprehensive role-based access control and modular architecture for high-volume daily usage. The system handles student registration, placement tests, attendance tracking, test creation and grading, homework management, incident reporting, accounting, and full CRUD operations for staff with granular permissions. Mobile applications feature intelligent offline data caching and conflict resolution strategies ensuring data consistency when connectivity is restored.",
    features: [
      "Web Admin Panel (Staff/Teachers/Receptionists)",
      "Mobile Apps (Parents/Receptionists)",
      "Student Registration & Profile Management",
      "Placement Test System",
      "Attendance Tracking (Students & Staff)",
      "Test Creation, Grading & Reporting",
      "Homework Management & Evaluation",
      "Incident Reporting & History",
      "Accounting & Financial Management",
      "Staff CRUD with Role-Based Permissions",
      "Real-time Data Synchronization",
      "Offline-First Mobile Architecture",
      "Advanced Sync Strategies & Conflict Resolution",
      "Direct Messaging & Announcements",
      "Live Notifications System",
    ],
    technologies: ["Flutter", "React", "Django", "WebSocket", "SQLite", "BLoC", "Redux"],
    impact: [
      "Eliminated manual and paper-based school workflows",
      "Improved communication between parents and school staff",
      "Increased transparency and trust through real-time visibility",
      "Enabled instant access to student performance and behavior data",
      "Streamlined administrative and academic operations",
      "Designed for enterprise-level educational institutions",
    ],
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    id: 3,
    icon: Activity,
    title: "Hospital Management System",
    subtitle: "Enterprise Automation Platform",
    overview: "Comprehensive hospital management system automating operations across all departments including patient records, laboratory workflows, ICU, and operating rooms with real-time notifications.",
    problem: "Hospitals faced fragmented systems causing communication delays, manual errors, and lack of real-time visibility into operations.",
    solution: "Designed and implemented an automated comprehensive hospital management system covering key departments: employee records, patient records, laboratory and radiology workflows, patient rooms, ICU, and operating rooms. Built consultation, referral, and patient file retrieval system to streamline operations. Integrated WebSocket technology for real-time notifications, applied modular design principles and layered architecture for scalability, enhanced data security with role-based authentication, and optimized performance through efficient database design.",
    features: [
      "Employee & Patient Records Management",
      "Laboratory & Radiology Workflows",
      "Patient Rooms & ICU Management",
      "Operating Room Scheduling",
      "Consultation & Referral System",
      "Patient File Retrieval System",
      "Real-time WebSocket Notifications",
      "Role-based Access Control",
    ],
    technologies: ["Flutter", "Node.js", "Express.js", "WebSocket", "PostgreSQL"],
    impact: [
      "40% reduction in operational delays through automation",
      "Real-time cross-department visibility and communication",
      "Improved patient care coordination and workflow efficiency",
      "Enhanced data security with role-based authentication",
      "Optimized system performance through efficient database design",
    ],
    gradient: "from-red-500 via-pink-500 to-primary",
  },
  {
    id: 4,
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
    technologies: ["Flutter", "GetX", "Hive", "REST API"],
    impact: [
      "60% faster ordering process",
      "Reduced user errors by 75%",
      "Enhanced user engagement",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: 5,
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
    technologies: ["Flutter", "Cubit", "React", "Redux", "Laravel"],
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
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 105, -70, 0],
            y: [0, -85, 90, 0],
            scale: [1, 1.26, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -105, 85, 0],
            y: [0, 110, -60, 0],
            scale: [1, 1.3, 0.87, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-2xl"
          animate={{
            x: [0, 65, -45, 0],
            y: [0, -95, 70, 0],
            scale: [1, 1.35, 0.85, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${8 + i * 11}%`,
              top: `${12 + i * 11}%`,
            }}
            animate={{
              y: [0, -140, 0],
              x: [0, Math.sin(i * 0.9) * 80, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 5.2 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        <motion.div
          className="absolute top-1/3 right-1/6 w-30 h-30 border-2 border-primary/25 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/6 w-22 h-22 border-2 border-purple-400/25 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10,
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
