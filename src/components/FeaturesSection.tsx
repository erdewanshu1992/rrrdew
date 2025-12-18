import { motion } from "framer-motion";
import { Truck, Shield, Clock, Headphones, CreditCard, MapPin } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Door to Door Delivery",
    description:
      "We deliver fertilizers and agricultural inputs directly to your farm gate, saving you time and transport costs.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "All our products are quality-tested and sourced from certified manufacturers for best results.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Get your orders delivered within 2-3 business days. Seasonal demands handled with priority.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Our agricultural experts provide guidance on choosing the right fertilizers for your crops.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description:
      "Pay via cash, UPI, cards, or avail credit facilities for bulk orders. Multiple options available.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description:
      "Serving 50+ districts across the region. Expanding continuously to reach more farmers.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-leaf rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Farmer-First <span className="text-secondary">Approach</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            We understand farming challenges. That's why we've built a service
            that puts farmers' convenience and success at the center.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;