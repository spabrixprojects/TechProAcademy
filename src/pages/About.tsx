import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AboutCourse } from "@/components/AboutCourse";
import { CTASection } from "@/components/CTASection";
import { GraduationCap, Clock, FileCheck, Target, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const courseDetails = [
  "Complete mobile hardware understanding",
  "Android & iOS software troubleshooting",
  "Chip-level repair & IC replacement",
  "Display, battery & charging port repair",
  "Software flashing, IMEI, FRP bypass",
  "Business setup guidance & support",
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="container relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 backdrop-blur-sm border border-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                About The Course
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                After +2 Mobile Technician <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Professional Course</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                A comprehensive 3-6 month program designed to transform +2 graduates into skilled mobile repair professionals with industry-recognized certification.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-background relative">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Course Overview
                </motion.h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <motion.p variants={itemVariants}>
                    Our mobile technician course is specifically designed for students who have completed their +2/12th standard and want to build a successful career in the booming mobile repair industry. No prior technical knowledge is required.
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    With <strong className="text-foreground">80% practical training</strong> and <strong className="text-foreground">20% theory</strong>, you'll get hands-on experience with real devices from day one. Our state-of-the-art lab facility and experienced trainers ensure you're job-ready upon completion.
                  </motion.p>
                </div>

                <motion.div variants={itemVariants} className="space-y-6 pt-4">
                  <h3 className="font-display font-semibold text-2xl text-foreground">
                    What You'll Master:
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {courseDetails.map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-transparent hover:border-accent/20 hover:bg-secondary/50 transition-colors"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0, transition: { delay: index * 0.05 } }
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid sm:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {[
                  {
                    icon: GraduationCap,
                    title: "Eligibility",
                    value: "10+2 / 12th Pass",
                    desc: "Students from science, commerce, or arts background can join. Basic computer knowledge is helpful."
                  },
                  {
                    icon: Clock,
                    title: "Duration",
                    value: "3 to 6 Months",
                    desc: "Flexible batch timings: Morning (9AM-12PM), Afternoon (2PM-5PM), Weekend batches available."
                  },
                  {
                    icon: FileCheck,
                    title: "Certification",
                    value: "Industry Recognized",
                    desc: "Receive a certificate valid for employment at service centers and for starting your own business."
                  },
                  {
                    icon: Target,
                    title: "Training Mode",
                    value: "80% Practical",
                    desc: "Hands-on practice with real devices using professional tools and equipment in our advanced lab."
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-card hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                        <card.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>

                      <h3 className="font-semibold text-lg text-foreground mb-1">{card.title}</h3>
                      <p className="text-accent font-bold mb-3">{card.value}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <AboutCourse />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
