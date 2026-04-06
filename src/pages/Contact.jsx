import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0243848848877!2d85.34553980000001!3d27.685641199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d7af4ff3b%3A0x4f545ba343e2a265!2sEverest%20Global%20Network!5e0!3m2!1sen!2snp!4v1767948121118!5m2!1sen!2snp";
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
              <h2
                className="text-4xl font-semibold mb-3 text-blue-600
              "
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Get in Touch
              </h2>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Kick Start</span> Your
              Career Abroad?
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Schedule a consultation with our experts and discover how we can
              help you achieve your abroad success.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <p className="text-foreground font-medium hover:underline cursor-pointer ">
                    <a href="mailto:info@everestglobalnetwork.com.np">
                      info@everestglobalnetwork.com.np
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="text-foreground font-medium">+977 9820556003</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground font-medium">
                    Tinkune Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}

          <div className="h-86 w-96 border rounded-2xl border-primary sm:mx-auto md:mt-20">
            <img
              src="/public/whatsAPp.png"
              alt="Contact Us"
              className="h-20 w-20 items-center flex mx-auto mt-16"
            />
            <h2 className="font-display text-xl md:text-2xl font-bold mb-6 text-center mt-6">
              Chat With Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-center">
              Get your consultation from our experts.
            </p>
            <button className="flex mx-auto">
              <a
                href="https://api.whatsapp.com/message/P2LICPEUG3BYK1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center mx-auto mb-10"
              >
                <span className="">Chat on WhatsApp</span>
                <ArrowRight className="ml-2 " />
              </a>
            </button>
          </div>

          {/* <div className="relative">
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
                    placeholder="john@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2 text-sm">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Phone Number"
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
                  Send Message
                  <ArrowRight className="ml-2 hover:translate-x-1 transition-all" />
                </button>
              </div>
            </form>
          </div>
          
          </div> */}
          <div className="lg:col-span-2">
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-elevated h-96">
              <iframe
                title="Location Map"
                src={MAP_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
