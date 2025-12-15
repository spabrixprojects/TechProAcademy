import { Store, Building2, Briefcase, TrendingUp, IndianRupee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const careers = [
  {
    icon: Store,
    title: "Start Your Own Shop",
    description: "Open your mobile repair shop with low investment and earn ₹30,000 - ₹80,000+ monthly.",
  },
  {
    icon: Building2,
    title: "Service Center Jobs",
    description: "Work at authorized service centers of Samsung, Vivo, Oppo, Xiaomi, and more brands.",
  },
  {
    icon: Briefcase,
    title: "Freelance Technician",
    description: "Offer doorstep repair services and earn flexibly based on your schedule.",
  },
  {
    icon: TrendingUp,
    title: "Trainer / Instructor",
    description: "Become a certified trainer and teach at institutes or start your own training center.",
  },
];

export function CareerOpportunities() {
  const handleEnrollClick = () => {
    const message = encodeURIComponent("Hi! I want to know more about career opportunities after the Mobile Technician Course.");
    window.open(`https://wa.me/919061780845?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm border border-accent/20 text-accent-foreground font-medium rounded-full text-sm mb-4">
            Career Scope
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Career Opportunities After Course
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            The mobile repair industry is booming with endless opportunities. Here's what awaits you.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {careers.map((career) => (
            <motion.div
              key={career.title}
              variants={itemVariants}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                <career.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{career.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {career.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Salary Range */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-accent/20 rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <IndianRupee className="w-10 h-10 text-primary font-bold" />
              </div>
              <div>
                <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-1">Expected Salary Range</p>
                <p className="font-display font-bold text-3xl md:text-4xl text-white mb-1">₹15,000 - ₹80,000+</p>
                <p className="text-primary-foreground/60 text-sm">per month (based on skills & experience)</p>
              </div>
            </div>
            <Button
              variant="default"
              size="lg"
              onClick={handleEnrollClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold gap-2 shadow-xl shadow-white/10 min-w-[200px]"
            >
              Start Your Career Today
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
