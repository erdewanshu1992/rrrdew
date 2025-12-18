import { motion } from "framer-motion";
import { Leaf, FlaskConical, Layers, Droplets } from "lucide-react";

const categories = [
  {
    id: "organic",
    icon: Leaf,
    title: "Organic Fertilizers",
    description: "Natural sources for sustainable farming",
    color: "bg-leaf/10 text-leaf border-leaf/20",
  },
  {
    id: "chemical",
    icon: FlaskConical,
    title: "Chemical Fertilizers",
    description: "Fast-acting nutrients for high yields",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    id: "nutrients",
    icon: Layers,
    title: "By Nutrients",
    description: "Single & multi-nutrient options",
    color: "bg-secondary/20 text-accent border-secondary/30",
  },
  {
    id: "form",
    icon: Droplets,
    title: "By Form",
    description: "Granular, liquid & powder types",
    color: "bg-soil/10 text-soil border-soil/20",
  },
];

const FertilizerCategories = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fertilizers" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Range of <span className="text-primary">Fertilizers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From organic compost to precision chemical formulations, we offer
            everything your crops need to thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(category.id)}
              className={`p-6 rounded-2xl border-2 ${category.color} text-left transition-all duration-300 hover:scale-105 hover:shadow-card group`}
            >
              <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft">
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FertilizerCategories;