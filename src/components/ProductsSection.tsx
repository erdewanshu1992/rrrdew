import { motion } from "framer-motion";
import { ShoppingCart, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import organicImage from "@/assets/organic-fertilizer.jpg";
import chemicalImage from "@/assets/chemical-fertilizer.jpg";
import liquidImage from "@/assets/liquid-fertilizer.jpg";

const products = [
  {
    id: 1,
    name: "Premium Vermicompost",
    category: "Organic",
    price: "₹450",
    unit: "per 25kg bag",
    rating: 4.8,
    image: organicImage,
    badge: "Best Seller",
    badgeColor: "bg-leaf",
  },
  {
    id: 2,
    name: "Urea 46% N",
    category: "Chemical",
    price: "₹320",
    unit: "per 50kg bag",
    rating: 4.9,
    image: chemicalImage,
    badge: "Popular",
    badgeColor: "bg-primary",
  },
  {
    id: 3,
    name: "NPK 10:26:26",
    category: "Complex",
    price: "₹1,450",
    unit: "per 50kg bag",
    rating: 4.7,
    image: chemicalImage,
    badge: null,
    badgeColor: "",
  },
  {
    id: 4,
    name: "Liquid Fertilizer Spray",
    category: "Liquid",
    price: "₹280",
    unit: "per 1L bottle",
    rating: 4.6,
    image: liquidImage,
    badge: "New",
    badgeColor: "bg-secondary",
  },
  {
    id: 5,
    name: "DAP 18:46:0",
    category: "Chemical",
    price: "₹1,350",
    unit: "per 50kg bag",
    rating: 4.8,
    image: chemicalImage,
    badge: null,
    badgeColor: "",
  },
  {
    id: 6,
    name: "Organic Compost Mix",
    category: "Organic",
    price: "₹550",
    unit: "per 30kg bag",
    rating: 4.5,
    image: organicImage,
    badge: "Eco-Friendly",
    badgeColor: "bg-leaf",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-secondary/20 text-accent rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality <span className="text-gradient-gold">Fertilizers</span>{" "}
            Delivered to You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive range of fertilizers and agricultural inputs.
            All products are quality-tested and delivered right to your
            doorstep.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 ${product.badgeColor} text-primary-foreground text-xs font-medium px-3 py-1 rounded-full`}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-secondary text-secondary" />
                  <span className="text-xs font-medium text-foreground">
                    {product.rating}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {product.unit}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Truck className="w-4 h-4" />
                  <span>Free delivery on bulk orders</span>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;