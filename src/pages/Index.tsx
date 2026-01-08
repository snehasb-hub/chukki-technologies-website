import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import {
  Cpu,
  Atom,
  Zap,
  ArrowRight,
  ChevronRight,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const domains = [
  {
    icon: Cpu,
    title: "FPGA Design",
    description:
      "High-performance RTL design, verification, and rapid prototyping for complex digital systems.",
  },
  {
    icon: Atom,
    title: "Quantum Computing",
    description:
      "Quantum-classical interfaces and FPGA-based quantum control for next-generation computing.",
  },
  {
    icon: Zap,
    title: "Hardware Acceleration",
    description:
      "Custom accelerators for AI/ML workloads, signal processing, and compute-intensive applications.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Research Publications" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Index() {
  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c3f]/90 via-[#0b1c3f]/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-3xl">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-accent/20 text-accent">
              Deep-Tech Innovation
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Accelerating the Future with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FPGA & Quantum
              </span>{" "}
              Innovation
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-10">
              Chukki Technologies pioneers the convergence of FPGA and Quantum
              Computing, delivering scalable hardware solutions that power the
              next generation of computing.
            </p>

            {/* ✅ BUTTONS FIXED */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="quantum" size="xl" asChild>
                <Link to="/domains">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>

              <Button
                size="xl"
                className="bg-white text-[#0B1A33] hover:bg-white/90 border border-white/20"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-secondary border-y border-border">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-accent/10 text-accent">
                About Chukki Technologies
              </span>

              <h2 className="text-4xl font-display font-bold mb-8">
                Engineering Tomorrow&apos;s Computing Infrastructure
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Chukki Technologies Pvt Ltd is a deep-tech research and
                development company working at the cutting edge of FPGA and
                Quantum Computing.
              </p>

              <p className="text-muted-foreground mb-10 leading-relaxed">
                Our team delivers precision-engineered solutions for
                semiconductor companies and research institutions worldwide.
              </p>

              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-xl border">
                <Lightbulb className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Innovation First</h4>
                <p className="text-sm text-muted-foreground">
                  Research-driven problem solving.
                </p>
              </div>

              <div className="p-8 rounded-xl border mt-10">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Precision Engineering</h4>
                <p className="text-sm text-muted-foreground">
                  Industry-grade hardware solutions.
                </p>
              </div>

              <div className="p-8 rounded-xl border">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Collaborative Spirit</h4>
                <p className="text-sm text-muted-foreground">
                  Partner-first approach.
                </p>
              </div>

              <div className="p-8 rounded-xl border mt-10">
                <Cpu className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-semibold mb-2">Deep Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  FPGA & quantum specialization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOMAINS ================= */}
      <section className="py-32 bg-secondary">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Domains"
            title="Expertise Across Critical Technologies"
            description="From FPGA design to quantum computing interfaces."
          />

          <div className="grid md:grid-cols-3 gap-16 mt-20">
            {domains.map((d, i) => (
              <FeatureCard key={i} {...d} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="quantum-outline" size="lg" asChild>
              <Link to="/domains">
                View All Domains
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
