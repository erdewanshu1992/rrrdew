import { motion } from "framer-motion";
import { Circle, Droplets, Wind } from "lucide-react";
import liquidImage from "@/assets/liquid-fertilizer.jpg";

const forms = [
  {
    icon: Circle,
    name: "Granular",
    description:
      "Most commonly used form. Easy to apply and store. Dissolves slowly for sustained nutrient release.",
    advantages: ["Easy handling", "Long-lasting", "Uniform application"],
    color: "bg-soil",
  },
  {
    icon: Droplets,
    name: "Liquid",
    description:
      "Fast-acting solution ideal for fertigation. Perfect for drip irrigation and foliar application.",
    advantages: ["Quick absorption", "Precise dosing", "Uniform distribution"],
    color: "bg-primary",
  },
  {
    icon: Wind,
    name: "Powder",
    description:
      "Dissolves in water for spray application. Also used for direct broadcasting in fields.",
    advantages: ["Versatile use", "Fast dissolving", "Cost-effective"],
    color: "bg-secondary",
  },
];

const FormSection = () => {
  return (
    <section id="form" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 bg-soil/10 text-soil rounded-full text-sm font-medium mb-4">
              <Droplets className="w-4 h-4" />
              Classification by Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose the Right <span className="text-soil">Form</span> for Your
              Needs
            </h2>
            <p className="text-muted-foreground mb-8">
              Fertilizers come in different physical forms - granular, liquid,
              and powder. Each form has specific advantages depending on your
              application method and crop requirements.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={liquidImage}
                alt="Liquid fertilizer spray bottle"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-background">
                <p className="font-bold text-lg">Fertigation Ready</p>
                <p className="text-sm text-background/80">
                  Liquid fertilizers for modern irrigation systems
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {forms.map((form, index) => (
              <motion.div
                key={form.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${form.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <form.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {form.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {form.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {form.advantages.map((adv) => (
                        <span
                          key={adv}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {adv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;