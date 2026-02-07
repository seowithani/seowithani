import { CheckCircle } from "lucide-react";

const benefits = [
  "Personalized strategies tailored to your business",
  "Direct access to senior SEO expertise",
  "Transparent reporting and communication",
  "Long-term partnership approach",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              The Boutique <span className="text-gold">Advantage</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body mb-8 leading-relaxed">
              Unlike large agencies where you're just another account number, at SEO with Ani, 
              you work directly with seasoned professionals who genuinely care about your success. 
              We bring big-agency expertise with boutique-level attention.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-body">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-gold">A</span>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">
                  Ani
                </p>
                <p className="text-muted-foreground text-sm">
                  Founder & SEO Strategist
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-heading text-6xl font-bold text-gold">A</span>
                  </div>
                  <p className="font-heading text-2xl text-foreground font-semibold">
                    SEO with Ani
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Your Partner in Growth
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
