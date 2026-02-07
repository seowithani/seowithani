import { Search, BarChart3, FileText, Link, Zap, Target } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Technical SEO",
    description: "Comprehensive site audits and technical optimization to ensure search engines can perfectly crawl and index your content.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Data-driven content planning that attracts your ideal audience and positions you as an industry authority.",
  },
  {
    icon: Link,
    title: "Link Building",
    description: "Strategic outreach and relationship building to earn high-quality backlinks that boost your domain authority.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Crystal-clear reporting and insights that demonstrate ROI and guide data-informed decisions.",
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Dominate local search results and connect with customers in your area through optimized local presence.",
  },
  {
    icon: Zap,
    title: "Page Speed Optimization",
    description: "Lightning-fast loading times that improve user experience and search rankings simultaneously.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Tailored SEO Solutions
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Every strategy is custom-crafted to match your unique goals, industry, and competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background p-8 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-500 border border-border hover:border-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
