import { Link } from "react-router-dom";
import { Mail, MapPin, Cpu } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  expertise: [
    { name: "Domains", path: "/domains" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0B1A33] text-white mt-32">
      <div className="container mx-auto px-4 py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-quantum flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl">
                  Chukki Technologies
                </div>
                <div className="text-sm text-white/70">Pvt Ltd</div>
              </div>
            </Link>

            <p className="text-white/80 max-w-md leading-relaxed">
              Accelerating the future through the convergence of FPGA and Quantum
              Computing. Building scalable, efficient, and future-ready hardware
              solutions.
            </p>

            <div className="mt-4">
              <span className="text-accent text-sm font-medium">
                FPGA on Quantum
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-white/80">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Expertise
            </h4>
            <ul className="space-y-4 text-white/80">
              {footerLinks.expertise.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Contact Row */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/70">
          <a
            href="mailto:contact@chukkitech.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            contact@chukkitech.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            India
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Chukki Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
