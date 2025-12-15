import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Contact() {
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
                Contact Us
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Get In Touch <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">With Us</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Have questions about our course? Want to visit our training center? Reach out to us and we'll be happy to help.
              </p>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
