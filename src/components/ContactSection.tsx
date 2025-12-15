import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
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

    // Basic validation
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

    // Simulate form submission
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill the form below or contact us directly. We're here to help you build your career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="font-display font-semibold text-2xl text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">Phone / WhatsApp</p>
                    <p className="text-muted-foreground text-lg group-hover:text-accent transition-colors">+91 99999 99999</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                    <p className="text-muted-foreground text-lg group-hover:text-accent transition-colors">info@techproacademy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">Address</p>
                    <p className="text-muted-foreground leading-relaxed">
                      2nd Floor, Emerald Mall, Mavoor Road,<br />
                      Calicut, Kerala - 673004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">Office Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div variants={itemVariants} className="h-64 bg-secondary/30 rounded-3xl flex items-center justify-center border border-border group overflow-hidden relative">
              <div className="absolute inset-0 bg-muted/20 group-hover:bg-muted/10 transition-colors" />
              <MapPin className="w-12 h-12 text-muted-foreground/20 absolute animate-pulse" />
              <p className="text-muted-foreground font-medium relative z-10">Google Map Location</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 bg-card rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px]" />

            <h3 className="font-display font-semibold text-2xl text-foreground mb-8 relative z-10">
              Send Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                  Full Name <span className="text-accent">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  maxLength={100}
                  required
                  className="h-12 bg-secondary/30 border-border focus:border-accent/50 transition-colors rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground ml-1">
                  Phone Number <span className="text-accent">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  required
                  className="h-12 bg-secondary/30 border-border focus:border-accent/50 transition-colors rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                  Email (Optional)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  maxLength={255}
                  className="h-12 bg-secondary/30 border-border focus:border-accent/50 transition-colors rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or requirements?"
                  maxLength={1000}
                  rows={4}
                  className="bg-secondary/30 border-border focus:border-accent/50 transition-colors rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white shadow-lg shadow-accent/20 rounded-xl h-12 text-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                {isSubmitting ? null : <ArrowRight className="w-5 h-5" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
