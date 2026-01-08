import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Target, Eye, Heart, Lightbulb, Search, Compass, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries in hardware design and quantum computing research to create breakthrough solutions.",
  },
  {
    icon: Search,
    title: "Research",
    description: "Deep commitment to scientific rigor and continuous exploration of emerging technologies.",
  },
  {
    icon: Compass,
    title: "Precision",
    description: "Meticulous attention to detail in every design, ensuring reliability and performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships with industry leaders, academics, and research institutions.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Pioneering the Future of Computing
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Chukki Technologies Pvt Ltd is an Indian deep-tech company advancing compute 
              through the convergence of FPGA and Quantum technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
              Company Overview
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Founded with a vision to bridge the gap between classical and quantum computing, 
                Chukki Technologies operates at the intersection of FPGA design, quantum computing 
                research, and hardware acceleration. Our team comprises experts in RTL design, 
                verification, high-speed interfaces, and quantum control systems.
              </p>
              <p>
                We work with semiconductor companies, research institutions, and technology 
                innovators to deliver precision-engineered hardware solutions. Our approach 
                combines rigorous research methodology with practical industry experience, 
                enabling us to tackle complex challenges in hardware-software co-design.
              </p>
              <p>
                From FPGA prototyping to quantum control logic, we provide end-to-end support 
                for projects that demand the highest levels of technical expertise and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="tech-card bg-card rounded-2xl p-8 md:p-10 border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advancing compute through FPGA and Quantum convergence. We envision a future 
                where the power of quantum computing is accessible through optimized classical 
                interfaces, enabling breakthrough applications across science, industry, and society.
              </p>
            </div>

            {/* Mission */}
            <div className="tech-card bg-card rounded-2xl p-8 md:p-10 border border-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build scalable, efficient, and future-ready hardware solutions. We are committed 
                to developing robust FPGA designs, quantum-classical interfaces, and hardware 
                accelerators that meet the demanding requirements of next-generation computing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Core Values"
            title="What Drives Us"
            description="Our values guide every decision we make and every solution we deliver."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <div key={index} className="tech-card bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-8">
              Why Partner With Chukki Technologies?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-display font-bold">01</span>
                </div>
                <h4 className="font-display font-semibold text-primary-foreground mb-2">
                  Deep Technical Expertise
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  Our team brings years of experience in FPGA design, quantum systems, 
                  and semiconductor engineering.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-display font-bold">02</span>
                </div>
                <h4 className="font-display font-semibold text-primary-foreground mb-2">
                  Research-Driven Approach
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  We combine academic rigor with practical implementation, 
                  staying at the forefront of technology.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-display font-bold">03</span>
                </div>
                <h4 className="font-display font-semibold text-primary-foreground mb-2">
                  End-to-End Solutions
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  From concept to deployment, we provide comprehensive support 
                  throughout your project lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}