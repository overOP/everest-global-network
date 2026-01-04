import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Get In Touch
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Schedule a consultation with our experts and discover how we can 
              help you achieve your strategic objectives.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-foreground font-medium">hello@apexconsulting.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground font-medium">New York, NY • London • Singapore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-gold opacity-10 rounded-2xl blur-xl" />
            
            <form className="relative bg-card border border-border rounded-2xl p-8 shadow-elevated">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                Schedule a Consultation
              </h3>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-medium mb-2 text-sm">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2 text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button variant="hero" size="lg" className="w-full flex">
                  Send Message<ArrowRight className="ml-2 hover:translate-x-1 transition-all" />
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
