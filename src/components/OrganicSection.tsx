import { motion } from "framer-motion";
import { Check, Leaf } from "lucide-react";
import organicImage from "@/assets/organic-fertilizer.jpg";

const benefits = [
  "Improves soil structure and water-holding capacity",
  "Supplies nutrients over a long period",
  "Environmentally friendly and sustainable",
  "Enhances microbial activity in soil",
  "Reduces soil erosion and degradation",
];

const examples = [
  { name: "Manure", desc: "Animal waste compost" },
  { name: "Vermicompost", desc: "Earthworm processed" },
  { name: "Green Manure", desc: "Crop residue based" },
  { name: "Peat Moss", desc: "Organic matter rich" },
];

const OrganicSection = () => {
  return (
    <section id="organic" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-leaf/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <img
                src={organicImage}
                alt="Organic fertilizer - rich compost soil"
                className="relative rounded-3xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-leaf/10 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-leaf" />
                </div>
                <div>
                  <p className="font-bold text-foreground">100% Natural</p>
                  <p className="text-sm text-muted-foreground">Eco-Friendly</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-leaf/10 text-leaf rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Organic Fertilizers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Natural Nutrition for{" "}
              <span className="text-leaf">Sustainable Growth</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Organic fertilizers are derived from natural sources such as
              animal manure, compost, vermicompost, and green manure. They
              improve soil health while providing long-term nutrient release.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-leaf/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-leaf" />
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
                  className="bg-muted/50 rounded-xl p-4 border border-border"
                >
                  <p className="font-semibold text-foreground">{example.name}</p>
                  <p className="text-sm text-muted-foreground">{example.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganicSection;