import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Smartphone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Course", href: "/about" },
  { name: "Modules", href: "/modules" },
  { name: "Careers", href: "/careers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in the Mobile Technician Course. Please share more details."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-border/50 shadow-sm py-3"
          : "bg-background/0 border-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
            <img src={logo} alt="TechPro Logo" className="w-full h-full object-contain" />
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}>
            TechPro
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-pulse-glow">
              Academy
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-background/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-foreground",
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {location.pathname === link.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-secondary/80 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 hover:bg-secondary/80"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">Call Now</span>
          </Button>
          <Button
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105"
            size="sm"
            onClick={handleWhatsAppClick}
          >
            Enroll via WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden relative z-50 p-2 active:scale-95 transition-transform transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  className="absolute inset-0"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  className="absolute inset-0"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[85%] max-w-[300px] bg-black/40 backdrop-blur-xl border-l border-white/10 shadow-2xl z-40 lg:hidden p-6 pt-24"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-lg transition-colors",
                          location.pathname === link.href
                            ? "bg-white/10 text-white font-semibold border border-white/10"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.name}
                        {location.pathname === link.href && (
                          <ChevronRight className="w-4 h-4 text-primary" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={itemVariants}
                  className="h-px bg-border my-2"
                />

                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full gap-2 justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/25"
                    onClick={handleWhatsAppClick}
                  >
                    Enroll via WhatsApp
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
