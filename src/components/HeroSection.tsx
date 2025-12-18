import { motion } from "framer-motion";
import { ArrowDown, Truck, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const stats = [
  { number: "500+", label: "Products" },
  { number: "10K+", label: "Farmers Served" },
  { number: "50+", label: "Districts Covered" },
  { number: "24/7", label: "Support" },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Golden wheat field at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"
            >
              <Truck className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">
                Door to Door Delivery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6"
            >
              Empowering Farmers with{" "}
              <span className="text-gradient-gold">Premium Fertilizers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-background/80 mb-8 max-w-xl"
            >
              From organic compost to high-yield chemical fertilizers, we bring
              quality agricultural inputs directly to your doorstep. Boost your
              crop productivity with RRR Enterprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                onClick={() => scrollToSection("#products")}
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8"
              >
                Explore Products
              </Button>
              <Button
                onClick={() => scrollToSection("#fertilizers")}
                size="lg"
                variant="hero"
                className="font-semibold px-8"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-background/80">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Leaf className="w-5 h-5 text-secondary" />
                <span className="text-sm">Eco-Friendly Options</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Truck className="w-5 h-5 text-secondary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-background/10 backdrop-blur-md border border-background/20 rounded-2xl p-6 text-center"
              >
                <p className="text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </p>
                <p className="text-background/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("#fertilizers")}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-background/60 hover:text-background transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;