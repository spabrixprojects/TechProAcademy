import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.name.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (max 100 characters).",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you within 24 hours. Thank you!",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-12 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have questions about the course, placement, or fees, our team is here to guide you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Bento Grid Info - Takes up 7 columns on desktop */}
          <motion.div
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Phone Card */}
            <motion.div variants={itemVariants} className="p-6 bg-secondary/30 rounded-3xl border border-border hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-2">Mon-Sat from 9am to 7pm</p>
              <a href="tel:+919061780845" className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                +91 90617 80845
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={itemVariants} className="p-6 bg-secondary/30 rounded-3xl border border-border hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-2">Get response within 24hrs</p>
              <a href="mailto:info@techproacademy.com" className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                info@techproacademy.com
              </a>
            </motion.div>

            {/* Address Card - Span 2 cols */}
            <motion.div variants={itemVariants} className="sm:col-span-2 p-6 bg-secondary/30 rounded-3xl border border-border hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 group flex items-start gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 mt-1">
                <MapPin className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Visit Our Academy</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm group-hover:text-foreground/80 transition-colors">
                  2nd Floor, Emerald Mall, Mavoor Road, Calicut, Kerala - 673004
                </p>
              </div>
            </motion.div>

            {/* Map Placeholder - Span 2 cols */}
            <motion.div variants={itemVariants} className="sm:col-span-2 h-64 bg-card rounded-3xl border border-border overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-secondary/50 group-hover:bg-secondary/30 transition-colors flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-10 h-10 text-accent animate-bounce" />
                  <span className="font-medium text-muted-foreground">View on Google Maps</span>
                </div>
              </div>
              {/* Add actual iframe here if needed */}
            </motion.div>
          </motion.div>

          {/* Contact Form - Takes up 5 columns on desktop */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 bg-card/80 backdrop-blur-xl rounded-3xl border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-[100px] -mr-10 -mt-10" />

              <div className="relative z-10 mb-8">
                <h3 className="font-display font-semibold text-2xl text-foreground mb-2">Send Message</h3>
                <p className="text-muted-foreground text-sm">We'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 bg-secondary/50 border-transparent focus:border-accent focus:bg-background transition-all rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="90617 80845"
                    required
                    maxLength={10}
                    className="h-12 bg-secondary/50 border-transparent focus:border-accent focus:bg-background transition-all rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    className="bg-secondary/50 border-transparent focus:border-accent focus:bg-background transition-all rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white shadow-lg shadow-accent/20 rounded-xl h-14 text-lg font-bold tracking-wide mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
