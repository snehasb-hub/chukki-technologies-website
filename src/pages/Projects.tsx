import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, Atom, Zap, BrainCircuit, GraduationCap, ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    category: "FPGA Acceleration",
    title: "High-Performance DSP Accelerator",
    description: "Custom FPGA-based digital signal processing accelerator achieving 10x performance improvement over CPU-based solutions for real-time data processing applications.",
    tags: ["Xilinx", "DSP", "High-Speed"],
  },
  {
    icon: Atom,
    category: "Quantum Control",
    title: "Quantum Pulse Generator",
    description: "Precision FPGA-based pulse generation system for superconducting qubit control, featuring sub-nanosecond timing resolution and real-time feedback capabilities.",
    tags: ["Quantum", "Timing", "Control"],
  },
  {
    icon: Zap,
    category: "Hardware Acceleration",
    title: "AI Inference Engine",
    description: "Low-latency neural network inference accelerator optimized for edge deployment, supporting multiple model architectures with configurable precision.",
    tags: ["AI/ML", "Edge", "Inference"],
  },
  {
    icon: BrainCircuit,
    category: "Research",
    title: "Hybrid Quantum-Classical Interface",
    description: "Novel interface architecture enabling seamless data exchange between quantum processors and classical computing systems with minimal overhead.",
    tags: ["Research", "Interface", "Hybrid"],
  },
];

const studentProgram = {
  title: "Student Project Support",
  description: "We actively support academic research and student projects in FPGA and quantum computing. Our internship and project programs provide hands-on experience with cutting-edge technologies.",
  benefits: [
    "Mentorship from industry experts",
    "Access to professional FPGA development tools",
    "Real-world project experience",
    "Publication and conference support",
    "Pathway to full-time opportunities",
  ],
};

export default function Projects() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
              Projects & Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Innovation in Action
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Explore our portfolio of FPGA accelerators, quantum control systems, 
              and research demonstrators pushing the boundaries of hardware innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Featured Work"
            title="Project Highlights"
            description="Representative examples of our work across FPGA, quantum, and acceleration domains."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="tech-card bg-card rounded-2xl p-8 border border-border group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Program */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Academic Collaboration
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {studentProgram.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {studentProgram.description}
              </p>
              <Button variant="quantum" asChild>
                <Link to="/careers">
                  Explore Opportunities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h4 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Program Benefits
              </h4>
              <ul className="space-y-4">
                {studentProgram.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Have a Challenging Project?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your hardware innovation to life.
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