import { motion } from "framer-motion";
import { Check, FlaskConical, Zap } from "lucide-react";
import chemicalImage from "@/assets/chemical-fertilizer.jpg";

const benefits = [
  "Provides nutrients immediately to plants",
  "Helps significantly increase crop yield",
  "Precise nutrient ratios for specific needs",
  "Cost-effective for large-scale farming",
  "Easy to store and apply",
];

const examples = [
  { name: "Urea", desc: "46% Nitrogen content", tag: "N" },
  { name: "DAP", desc: "Phosphorus rich", tag: "P" },
  { name: "MOP", desc: "Potassium chloride", tag: "K" },
  { name: "NPK", desc: "Balanced nutrients", tag: "NPK" },
];

const ChemicalSection = () => {
  return (
    <section id="chemical" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4" />
              Chemical Fertilizers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fast-Acting Nutrients for{" "}
              <span className="text-primary">Maximum Yield</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Chemical or inorganic fertilizers are produced through industrial
              processes and contain essential nutrients like Nitrogen (N),
              Phosphorus (P), and Potassium (K) in precise ratios for optimal
              crop growth.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {examples.map((example, index) => (
                <motion.div
                  key={example.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-muted/50 rounded-xl p-4 border border-border flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary text-sm">
                    {example.tag}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {example.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {example.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <img
                src={chemicalImage}
                alt="Chemical fertilizer granules"
                className="relative rounded-3xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Fast Acting</p>
                  <p className="text-sm text-muted-foreground">High Yield</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChemicalSection;