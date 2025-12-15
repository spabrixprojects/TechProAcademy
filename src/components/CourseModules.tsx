import { Cpu, Smartphone, Wrench, Download, Battery, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    icon: Smartphone,
    title: "Mobile Hardware Basics",
    description: "Learn smartphone components, circuit boards, and hardware fundamentals from scratch.",
  },
  {
    icon: MonitorSmartphone,
    title: "Android & iOS Troubleshooting",
    description: "Master diagnosing and fixing software issues on both Android and iOS devices.",
  },
  {
    icon: Cpu,
    title: "IC & Chip Level Repair",
    description: "Advanced training in IC replacement, reballing, and motherboard repair techniques.",
  },
  {
    icon: Battery,
    title: "Display & Battery Repair",
    description: "Hands-on training for screen replacement, battery diagnostics, and replacement.",
  },
  {
    icon: Download,
    title: "Software Flashing & Unlocking",
    description: "Learn firmware flashing, IMEI repair, FRP bypass, and software unlocking.",
  },
  {
    icon: Wrench,
    title: "Practical Hands-on Training",
    description: "Real device practice with professional tools in our state-of-the-art lab facility.",
  },
];

export function CourseModules() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 lg:py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              Course Curriculum
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive modules designed to make you a skilled mobile technician ready for the industry.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {modules.map((module) => (
            <motion.div
              key={module.title}
              variants={cardVariants}
              className="group p-6 lg:p-8 bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-accent group-hover:to-primary transition-all duration-300 shadow-inner">
                  <module.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
