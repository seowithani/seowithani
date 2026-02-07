const stats = [
  { value: "250%", label: "Average Traffic Increase" },
  { value: "Top 3", label: "Rankings Achieved" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "50+", label: "Brands Transformed" },
];

const Results = () => {
  return (
    <section id="results" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            Proven Results
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            Numbers That Speak
          </h2>
          <p className="text-primary-foreground/70 text-lg font-body">
            Our boutique approach delivers enterprise-level results with personalized attention.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-gold mb-3">
                {stat.value}
              </div>
              <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
