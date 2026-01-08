import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cpu, Settings, Atom, Code, GraduationCap, ArrowRight, 
  CheckCircle, FileCode, Layers, Workflow, Server
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "FPGA Design & Verification",
    description: "End-to-end FPGA development from architecture to verified, production-ready designs.",
    details: [
      "RTL design in Verilog/SystemVerilog/VHDL",
      "UVM-based verification environments",
      "Timing closure and optimization",
      "FPGA synthesis and implementation",
      "Design review and audit services",
    ],
  },
  {
    icon: FileCode,
    title: "RTL to GDS Support",
    description: "Comprehensive support for digital design flows using both open-source and industry-standard tools.",
    details: [
      "RTL synthesis optimization",
      "Physical design support",
      "OpenROAD/OpenLane flow integration",
      "Industry EDA tool flows",
      "DRC/LVS verification support",
    ],
  },
  {
    icon: Atom,
    title: "Quantum Hardware Support",
    description: "Specialized FPGA solutions for quantum computing control and measurement systems.",
    details: [
      "Quantum control pulse generation",
      "High-precision timing systems",
      "Qubit state readout interfaces",
      "Classical-quantum data bridges",
      "Cryogenic-compatible designs",
    ],
  },
  {
    icon: Layers,
    title: "Embedded & SoC Development",
    description: "Complete embedded systems built on SoC FPGA platforms with custom peripherals.",
    details: [
      "Zynq/Zynq UltraScale+ development",
      "Custom peripheral IP development",
      "Linux BSP and driver development",
      "Bare-metal firmware",
      "Hardware-software integration",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Professional training programs for academic institutions and industry teams.",
    details: [
      "FPGA design fundamentals",
      "Advanced RTL techniques",
      "Verification methodologies",
      "Quantum computing concepts",
      "Hands-on lab sessions",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your requirements, constraints, and objectives.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Designing optimal system architecture and specifications.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "RTL development with continuous verification and testing.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Validated designs with documentation and support.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Engineering Excellence, Delivered
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From concept to silicon-ready designs, we provide comprehensive services 
              to accelerate your hardware development journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="tech-card bg-card rounded-2xl p-8 border border-border"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            description="A structured approach ensuring quality and transparency at every stage."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="tech-card bg-card rounded-xl p-6 border border-border h-full">
                  <span className="text-4xl font-display font-bold gradient-quantum-text">
                    {item.step}
                  </span>
                  <h4 className="font-display font-semibold text-lg text-foreground mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 gradient-quantum opacity-90" />
            <div className="absolute inset-0 circuit-pattern opacity-20" />
            <div className="relative z-10 px-8 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Share your requirements and let's explore how we can help accelerate 
                your hardware development.
              </p>
              <Button variant="hero-secondary" size="lg" asChild>
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}