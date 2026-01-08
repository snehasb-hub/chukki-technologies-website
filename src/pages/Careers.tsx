import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, Rocket, Users, BookOpen, ArrowRight, 
  Lightbulb, Cpu, Atom, Code, Mail
} from "lucide-react";

const whyJoin = [
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "Work on next-generation FPGA and quantum computing projects that push the boundaries of what's possible.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access to training, conferences, and research publications to keep growing your expertise.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a team of passionate engineers who value knowledge sharing and collective problem-solving.",
  },
  {
    icon: Lightbulb,
    title: "Research-Driven",
    description: "Contribute to research that advances the field and gets published in top venues.",
  },
];

const opportunities = [
  {
    icon: Cpu,
    title: "FPGA Design Engineers",
    type: "Full-time / Contract",
    description: "Experienced RTL designers with strong verification skills for complex FPGA projects.",
  },
  {
    icon: Atom,
    title: "Quantum Systems Engineers",
    type: "Full-time / Research",
    description: "Engineers with quantum computing background to work on control and interface systems.",
  },
  {
    icon: Code,
    title: "Verification Engineers",
    type: "Full-time",
    description: "SystemVerilog/UVM experts to build and maintain verification environments.",
  },
  {
    icon: GraduationCap,
    title: "Research Interns",
    type: "Internship",
    description: "Graduate and undergraduate students interested in FPGA, quantum, or hardware acceleration.",
  },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
              Careers & Internships
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Shape the Future of Computing
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Join our team of innovators working at the intersection of FPGA and quantum technologies. 
              We're looking for curious minds ready to tackle complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Chukki"
            title="Why Join Us"
            description="Be part of a team that's advancing the frontier of hardware innovation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyJoin.map((item, index) => (
              <div key={index} className="tech-card bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Opportunities"
            title="Open Positions"
            description="Explore current opportunities to join our growing team."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {opportunities.map((opp, index) => (
              <div key={index} className="tech-card bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <opp.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h4 className="font-display font-semibold text-lg text-foreground">
                        {opp.title}
                      </h4>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
                        {opp.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {opp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Internship & Student Programs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in nurturing the next generation of hardware engineers. Our internship 
                programs offer hands-on experience with real-world FPGA and quantum computing projects, 
                mentored by experienced engineers.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-foreground">Work on cutting-edge FPGA designs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-foreground">Explore quantum computing interfaces</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-foreground">Learn from industry experts</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm text-foreground">Contribute to research publications</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Suitable for: B.Tech, M.Tech, and PhD students in ECE, EE, or CS with interest in 
                hardware design, VLSI, or quantum computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Apply?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Send us your resume and a brief note about your interests and experience. 
            We'd love to hear from you.
          </p>
          <Button 
            variant="quantum" 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a href="mailto:careers@chukkitech.com">
              <Mail className="w-4 h-4" />
              careers@chukkitech.com
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}