import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CourseModules as ModulesSection } from "@/components/CourseModules";
import { CTASection } from "@/components/CTASection";
import { Cpu, Smartphone, Wrench, Download, Battery, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const detailedModules = [
  {
    icon: Smartphone,
    title: "Mobile Hardware Fundamentals",
    duration: "2 Weeks",
    topics: [
      "Understanding smartphone architecture",
      "PCB layout and component identification",
      "Power section components",
      "Charging circuits and connectors",
      "Audio section components",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Display & Touch Technology",
    duration: "2 Weeks",
    topics: [
      "LCD vs AMOLED technology",
      "Touch panel working principle",
      "Display connector types",
      "Screen replacement techniques",
      "Touch calibration methods",
    ],
  },
  {
    icon: Cpu,
    title: "IC Level Repair",
    duration: "3 Weeks",
    topics: [
      "Chip identification and functions",
      "Reballing techniques",
      "BGA chip replacement",
      "Power IC troubleshooting",
      "CPU/RAM repair basics",
    ],
  },
  {
    icon: Battery,
    title: "Battery & Charging System",
    duration: "1 Week",
    topics: [
      "Battery technology types",
      "Battery health diagnostics",
      "Charging IC repair",
      "Fast charging troubleshooting",
      "Battery replacement safety",
    ],
  },
  {
    icon: Download,
    title: "Software & Flashing",
    duration: "2 Weeks",
    topics: [
      "Android firmware flashing",
      "iOS restore and update",
      "IMEI repair techniques",
      "FRP bypass methods",
      "Software unlocking",
    ],
  },
  {
    icon: Wrench,
    title: "Advanced Troubleshooting",
    duration: "2 Weeks",
    topics: [
      "Dead phone diagnosis",
      "Water damage recovery",
      "Network and signal issues",
      "Camera module repair",
      "Microphone and speaker repair",
    ],
  },

];

export default function Modules() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent/20">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-30" />

          <div className="container relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 backdrop-blur-sm border border-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Course Curriculum
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Complete Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Modules</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Detailed breakdown of everything you'll learn in our comprehensive mobile technician training program.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Modules */}
        <section className="py-24 bg-background relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50" />
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              {detailedModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-8 bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <module.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-semibold text-2xl text-foreground group-hover:text-accent transition-colors">
                          {module.title}
                        </h3>
                      </div>
                      <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        Module {index + 1}
                      </span>
                      <p className="mt-3 text-sm font-medium text-muted-foreground">Duration: {module.duration}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {module.topics.map((topic, i) => (
                      <li key={topic} className="flex items-start gap-3 text-base text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ModulesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
