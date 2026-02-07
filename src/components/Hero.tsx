import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-beige-dark/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 animate-fade-up">
            <TrendingUp className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-foreground">
              Boutique SEO Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Elevate Your Brand's{" "}
            <span className="text-gold relative">
              Visibility
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 4 150 2 298 6"
                  stroke="hsl(43 74% 49%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Strategic SEO solutions crafted with precision. We help ambitious brands 
            dominate search results and drive sustainable organic growth.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="gold" size="xl" className="group">
              Book a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 pt-10 border-t border-border animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by forward-thinking brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["Brand One", "Brand Two", "Brand Three", "Brand Four"].map((brand) => (
                <span key={brand} className="font-heading text-xl text-foreground/70">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
