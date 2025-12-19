import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@developer.com",
    href: "mailto:hello@developer.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/developer",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/developer",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Open to Remote",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/50">
      <div className="container mx-auto px-6">
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
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </a>
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
