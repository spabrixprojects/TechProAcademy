import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  const handleEnrollClick = () => {
    const message = encodeURIComponent("Hi! I want to enroll in the Mobile Technician Course. Please share details about fees and batch timings.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            Limited Seats Available
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Ready to Build Your Future in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Mobile Technology?</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join our next batch and start your journey towards becoming a certified mobile technician. Gain skills that pay for life.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="xl"
              onClick={handleEnrollClick}
              className="gap-2 text-lg h-14 px-8 bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20 hover:scale-105 transition-all duration-300"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="text-white border-white/20 bg-white/5 hover:bg-white/10 gap-2 text-lg h-14 px-8 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call: +91 99999 99999
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-white/50 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Next Batch Starting Soon
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              100% Placement Support
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              ISO Certified Institute
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
