import { Link } from "react-router-dom";
import { Smartphone, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                <img src={logo} alt="TechPro Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                TechPro<span className="text-accent">Academy</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Leading mobile technician training institute. Build your career in mobile phone repair & servicing with hands-on practical training.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Course", "Course Modules", "Career Opportunities", "Gallery", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-6">Course Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center justify-between border-b border-border/50 pb-2">
                <span>Duration</span>
                <span className="font-semibold text-foreground">3-6 Months</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/50 pb-2">
                <span>Eligibility</span>
                <span className="font-semibold text-foreground">12th Pass</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/50 pb-2">
                <span>Mode</span>
                <span className="font-semibold text-foreground">Practical</span>
              </li>
              <li className="flex items-center justify-between border-b border-border/50 pb-2">
                <span>Placement</span>
                <span className="font-semibold text-foreground">100% Support</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  2nd Floor, Emerald Mall, Mavoor Road, Calicut, Kerala - 673004
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-foreground font-medium hover:text-accent transition-colors cursor-pointer">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-foreground font-medium hover:text-accent transition-colors cursor-pointer">info@techproacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 TechPro Academy. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
