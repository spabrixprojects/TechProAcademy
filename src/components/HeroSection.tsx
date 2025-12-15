import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Users, Award, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-mobile-repair.jpg";
import { motion } from "framer-motion";

export function HeroSection() {
  const handleEnrollClick = () => {
    const message = encodeURIComponent(
      "Hi! I want to enroll in the Mobile Technician Course. Please share details."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const floatingCardVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent text-sm font-medium">
                Admissions Open for 2024-25
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Launch Your Career in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Mobile Repair
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Professional mobile technician course for +2 graduates. Learn
              smartphone repair, troubleshooting & servicing with 100% practical
              training. Start your own business or get placed in top service
              centers.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={handleEnrollClick}
                className="gap-2 group shadow-lg shadow-primary/25"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/20 bg-white/5 hover:bg-white/10 gap-2 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-6">
              {[
                { icon: Users, label: "Students Trained", value: "5000+" },
                { icon: Award, label: "Years Experience", value: "10+" },
                { icon: Briefcase, label: "Placement Rate", value: "95%" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image / Features Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={heroImage}
                alt="Mobile phone repair training"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Floating card */}
              <motion.div
                variants={floatingCardVariants}
                animate="animate"
                className="absolute bottom-6 left-6 right-6 bg-card/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Industry Certified Course
                    </p>
                    <p className="text-sm text-white/70">
                      Get recognized certification after completion
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
