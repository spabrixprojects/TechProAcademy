import { GraduationCap, Clock, FileCheck, Target } from "lucide-react";
import trainingLab from "@/assets/training-lab.jpg";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: GraduationCap,
    title: "Eligibility",
    description: "10+2 / 12th Pass from any stream. No prior technical knowledge required.",
  },
  {
    icon: Clock,
    title: "Duration",
    description: "3 to 6 months comprehensive training with flexible batch timings.",
  },
  {
    icon: FileCheck,
    title: "Certification",
    description: "Industry-recognized certificate valid for jobs and self-employment.",
  },
  {
    icon: Target,
    title: "Mode",
    description: "80% practical training + 20% theory. Learn by doing on real devices.",
  },
];

export function AboutCourse() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src={trainingLab}
                alt="Mobile repair training lab with students"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm"
            >
              <p className="font-display font-bold text-4xl mb-1">100%</p>
              <p className="text-sm font-medium opacity-90">Practical Training</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                About The Course
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                After +2 Mobile Technician Course
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our comprehensive mobile technician course is designed specifically for +2 graduates and beginners who want to build a successful career in the mobile repair industry. With hands-on practical training, you'll be job-ready from day one.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
