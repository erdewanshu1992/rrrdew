import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8229068112",
    link: "tel:+918229068112",
  },
  {
    icon: Mail,
    label: "Email",
    value: "qadev432@gmail.com",
    link: "mailto:qadev432@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Triveniganj, Supaul, Bihar - 852139",
    link: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 8:00 AM - 7:00 PM",
    link: "#",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll contact you shortly to discuss your requirements.",
    });
    setFormData({ name: "", phone: "", village: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="text-primary">Order?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for bulk orders, product inquiries, or expert
            agricultural advice. We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send an Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Village / City
                </label>
                <Input
                  placeholder="Enter your village or city name"
                  value={formData.village}
                  onChange={(e) =>
                    setFormData({ ...formData, village: e.target.value })
                  }
                  required
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Requirements
                </label>
                <Textarea
                  placeholder="Tell us what products you need..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-muted/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-hero rounded-3xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">
                Direct Contact
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Reach out to us directly for immediate assistance with your
                orders or inquiries.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-secondary/20 rounded-2xl p-6 border border-secondary/30">
              <h4 className="font-bold text-foreground mb-2">
                Bulk Order Discount
              </h4>
              <p className="text-muted-foreground text-sm">
                Orders above ₹10,000 get special pricing. Contact us for a
                customized quote for your farm's requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;