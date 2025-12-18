import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const singleNutrients = [
  {
    name: "Urea",
    nutrient: "N",
    percentage: "46%",
    desc: "Primary nitrogen source",
  },
  {
    name: "SSP",
    nutrient: "P",
    percentage: "16%",
    desc: "Single Super Phosphate",
  },
  {
    name: "MOP",
    nutrient: "K",
    percentage: "60%",
    desc: "Muriate of Potash",
  },
  {
    name: "Ammonium Sulphate",
    nutrient: "N+S",
    percentage: "21%",
    desc: "Nitrogen with Sulphur",
  },
];

const multiNutrients = [
  { name: "NPK 10:26:26", desc: "Balanced growth formula" },
  { name: "NPK 20:20:0", desc: "Nitrogen-Phosphorus rich" },
  { name: "NPK 12:32:16", desc: "High phosphorus blend" },
  { name: "DAP 18:46:0", desc: "Di-ammonium Phosphate" },
];

const NutrientSection = () => {
  return (
    <section id="nutrients" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-secondary/20 text-accent rounded-full text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Classification by Nutrients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Single & Multi-Nutrient{" "}
            <span className="text-gradient-gold">Fertilizers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose between single-nutrient fertilizers for targeted nutrition or
            multi-nutrient complex fertilizers for balanced plant growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Single Nutrient */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Single-Nutrient Fertilizers
            </h3>
            <p className="text-muted-foreground mb-6">
              Supply only one main nutrient (N, P, or K) for targeted
              application.
            </p>
            <div className="space-y-4">
              {singleNutrients.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border"
                >
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {item.nutrient}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">
                        {item.name}
                      </p>
                      <span className="px-2 py-0.5 bg-secondary/20 text-accent text-xs rounded-full font-medium">
                        {item.percentage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Multi Nutrient */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Multi-Nutrient / Complex Fertilizers
            </h3>
            <p className="text-muted-foreground mb-6">
              Supply two or more nutrients together for comprehensive plant
              nutrition.
            </p>
            <div className="space-y-4">
              {multiNutrients.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border"
                >
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-sm">
                      NPK
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutrientSection;