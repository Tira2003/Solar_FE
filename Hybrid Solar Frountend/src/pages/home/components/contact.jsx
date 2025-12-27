import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours with your personalized solar quote.",
    });
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Get your free, no-obligation quote today. Our solar experts will design a custom system for your home.
            </p>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm md:text-base">Call Us</div>
                  <div className="text-muted-foreground text-sm md:text-base">+94 71694345</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm md:text-base">Email Us</div>
                  <div className="text-muted-foreground text-sm md:text-base">hello@hybridenergy.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm md:text-base">Headquarters</div>
                  <div className="text-muted-foreground text-sm md:text-base">No.145, Baseline Road, Negombo</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Why get a quote?</h3>
              <ul className="space-y-2 text-muted-foreground text-xs md:text-sm">
                <li>• See exactly how much you can save each month</li>
                <li>• Get a custom system design for your home</li>
                <li>• No obligation - 100% free consultation</li>
                <li>• Response within 24 hours</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Get Your Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="name" className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2 block">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nancy Weeler"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-sm md:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0716943456"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-sm md:text-base"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2 block">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tiranga@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="address" className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2 block">
                  Home Address
                </label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main St, City, State ZIP"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="text-sm md:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2 block">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your home or any questions you have..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="text-sm md:text-base"
                />
              </div>
              <Button type="submit" className="w-full text-sm md:text-base" size="lg">
                Get My Free Quote
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive communications from Hybrid Energy. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;