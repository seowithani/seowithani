import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-10 md:p-16 shadow-elevated border border-border text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Let's Work Together
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to <span className="text-gold">Grow</span>?
            </h2>
            <p className="text-muted-foreground text-lg font-body mb-10 max-w-2xl mx-auto">
              Book a free consultation to discuss your SEO goals and discover how we can help 
              you achieve sustainable organic growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="gold" size="xl" className="group">
                <Calendar className="h-5 w-5" />
                Schedule a Call
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Mail className="h-5 w-5" />
                Send an Email
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Free 30-minute strategy session • No obligation • Tailored recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
