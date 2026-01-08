import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, Atom, Zap, Lightbulb, ArrowRight, Check, CircuitBoard, Waves, BrainCircuit, Radio } from "lucide-react";

const domains = [
  {
    icon: Cpu,
    title: "FPGA Design & Prototyping",
    description: "Comprehensive FPGA development services from RTL design to production-ready systems.",
    features: [
      "RTL Design & Optimization",
      "Functional Verification (UVM/SystemVerilog)",
      "High-Speed Serial Interfaces (PCIe, Ethernet)",
      "SoC FPGA Development",
      "IP Core Development",
      "FPGA-based Prototyping",
    ],
  },
  {
    icon: Atom,
    title: "Quantum Computing",
    description: "Building the bridge between classical and quantum computing through specialized interfaces.",
    features: [
      "Quantum-Classical Interfaces",
      "FPGA-based Quantum Control",
      "Qubit Readout Systems",
      "Timing & Synchronization",
      "Cryogenic Control Logic",
      "Quantum Error Correction Support",
    ],
  },
  {
    icon: Zap,
    title: "Hardware Acceleration",
    description: "Custom accelerators designed for maximum performance in compute-intensive applications.",
    features: [
      "AI/ML Inference Acceleration",
      "Deep Learning Accelerators",
      "Signal Processing Pipelines",
      "Video & Image Processing",
      "Financial Computing",
      "Scientific Computing",
    ],
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Cutting-edge research in emerging hardware technologies and computing paradigms.",
    features: [
      "Novel Architecture Exploration",
      "Academic Collaborations",
      "Proof-of-Concept Development",
      "Technology Feasibility Studies",
      "Publication Support",
      "Innovation Consulting",
    ],
  },
];

const technologies = [
  { icon: CircuitBoard, name: "Xilinx/AMD FPGAs" },
  { icon: Cpu, name: "Intel FPGAs" },
  { icon: Waves, name: "High-Speed Interfaces" },
  { icon: BrainCircuit, name: "Neural Network IPs" },
  { icon: Radio, name: "RF & DSP Systems" },
  { icon: Atom, name: "Quantum Control" },
];

export default function Domains() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
              Our Domains
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Expertise That Powers Innovation
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Specialized capabilities across FPGA, quantum computing, and hardware acceleration 
              to address your most complex engineering challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="tech-card bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <domain.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {domain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Technologies"
            title="Platforms We Work With"
            description="Industry-leading tools and platforms for comprehensive hardware development."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-card bg-card rounded-xl p-6 border border-border text-center"
              >
                <tech.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your hardware development.
          </p>
          <Button variant="quantum" size="lg" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}