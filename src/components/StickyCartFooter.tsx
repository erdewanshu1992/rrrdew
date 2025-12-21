import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const StickyCartFooter = () => {
  const { items, getTotal, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {items.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"} in cart
                  </p>
                  <p className="font-bold text-foreground">
                    ₹{getTotal().toLocaleString()}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleProceed}
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                size="lg"
              >
                Proceed Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCartFooter;
