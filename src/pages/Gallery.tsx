import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTASection } from "@/components/CTASection";
import trainingLab from "@/assets/training-lab.jpg";
import heroImage from "@/assets/hero-mobile-repair.jpg";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: trainingLab,
    alt: "Students learning mobile repair in our training lab",
    caption: "Training Lab - Hands-on Practice",
  },
  {
    src: heroImage,
    alt: "Professional mobile repair workspace",
    caption: "Professional Equipment & Tools",
  },
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop",
    alt: "Mobile repair tools and equipment",
    caption: "Advanced Repair Tools",
  },
  {
    src: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=600&h=400&fit=crop",
    alt: "Students working on mobile devices",
    caption: "Student Project Work",
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    alt: "Modern training facility",
    caption: "Modern Training Facility",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    alt: "Circuit board analysis",
    caption: "Microscope Analysis Station",
  },
];

export default function Gallery() {
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
                Our Facility
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Training Lab & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Gallery</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Take a virtual tour of our state-of-the-art training facility equipped with the latest tools and equipment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background relative">
          <div className="container">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="group relative overflow-hidden rounded-3xl bg-muted aspect-[4/3] shadow-md border border-border cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block w-8 h-1 bg-accent mb-3 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100" />
                    <p className="text-white font-semibold text-lg drop-shadow-md">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
