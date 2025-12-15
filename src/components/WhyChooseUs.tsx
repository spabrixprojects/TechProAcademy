import { Users, Microscope, Award, HeadphonesIcon, BookOpen, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from industry professionals with 10+ years of hands-on experience in mobile repair.",
  },
  {
    icon: Microscope,
    title: "Advanced Lab Facility",
    description: "State-of-the-art lab with latest tools, equipment, and real devices for practice.",
  },
  {
    icon: Award,
    title: "Certified Course",
    description: "Receive industry-recognized certification valid across India and abroad.",
  },
  {
    icon: Wrench,
    title: "80% Practical Training",
    description: "Focus on hands-on learning with real devices, not just theory classes.",
  },
  {
    icon: HeadphonesIcon,
    title: "100% Placement Support",
    description: "Dedicated placement cell to help you find jobs at top service centers.",
  },
  {
    icon: BookOpen,
    title: "Lifetime Study Material",
    description: "Access to updated course materials, video tutorials, and repair guides forever.",
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 lg:py-24 bg-background relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              Why TechPro Academy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of successful graduates who built their careers with our training.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className="relative p-6 lg:p-8 bg-card rounded-3xl border border-border group hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-7xl font-display font-bold text-muted/20 group-hover:text-accent/10 transition-colors duration-500 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
