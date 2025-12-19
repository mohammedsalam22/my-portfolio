import { motion } from "framer-motion";
import { Github, Mail, MapPin, Download, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ms6960852@gmail.com",
    href: "mailto:ms6960852@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mohammedsalam22",
    href: "https://github.com/mohammedsalam22",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/hmoda.slam",
    href: "https://www.facebook.com/hmoda.slam",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Damascus, Syria",
    href: null,
  },
];

const ContactSection = () => {
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
    <section id="contact" className="py-24 md:py-32 bg-surface/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl"
          animate={{
            x: [0, 95, -65, 0],
            y: [0, -75, 85, 0],
            scale: [1, 1.24, 0.91, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl"
          animate={{
            x: [0, -95, 75, 0],
            y: [0, 105, -55, 0],
            scale: [1, 1.29, 0.86, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/35"
            style={{
              left: `${14 + i * 13}%`,
              top: `${16 + i * 14}%`,
            }}
            animate={{
              y: [0, -125, 0],
              x: [0, Math.cos(i * 0.75) * 65, 0],
              opacity: [0.35, 0.75, 0.35],
              scale: [1, 1.9, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          />
        ))}
        <motion.div
          className="absolute top-1/3 left-1/5 w-28 h-28 border-2 border-purple-400/25 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.38, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 0.8,
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm currently open to new opportunities. Whether you have a project in mind 
            or just want to chat about tech, feel free to reach out!
          </p>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Button
              size="lg"
              className="glow px-8 py-6 text-lg font-semibold"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download My Resume
            </Button>
          </motion.div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              const Wrapper = link.href ? 'a' : 'div';
              const wrapperProps = link.href ? { href: link.href, target: "_blank", rel: "noopener noreferrer" } : {};

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`block p-6 rounded-2xl bg-card border border-border transition-all duration-300 ${
                      link.href ? "hover:border-primary/50 hover:bg-primary/5 cursor-pointer" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-medium text-sm">{link.value}</p>
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
