import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, MapPin, Clock, Calendar, IndianRupee } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const OrderHistory = () => {
  const { orders } = useCart();
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <>
        <Helmet>
          <title>Order History - RRR Enterprise</title>
          <meta name="description" content="View your order history" />
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl font-medium text-foreground mb-4">No orders yet</p>
            <p className="text-muted-foreground mb-6">Your order history will appear here</p>
            <Button onClick={() => navigate("/")} variant="outline">
              Start Shopping
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order History - RRR Enterprise</title>
        <meta name="description" content="View your order history" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Shop</span>
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-foreground mb-8"
          >
            Order History
          </motion.h1>

          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {format(order.orderDate, "PPP 'at' p")}
                      </p>
                    </div>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    order.status === 'pending' && "bg-yellow-100 text-yellow-800",
                    order.status === 'confirmed' && "bg-blue-100 text-blue-800",
                    order.status === 'delivered' && "bg-green-100 text-green-800"
                  )}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{order.deliveryDetails.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.deliveryDetails.address}, {order.deliveryDetails.village} - {order.deliveryDetails.pincode}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.deliveryDetails.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {order.deliveryDetails.date ? format(order.deliveryDetails.date, "PPP") : "Not specified"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.deliveryDetails.slot === 'morning' && "Morning (8:00 AM - 12:00 PM)"}
                        {order.deliveryDetails.slot === 'afternoon' && "Afternoon (12:00 PM - 4:00 PM)"}
                        {order.deliveryDetails.slot === 'evening' && "Evening (4:00 PM - 7:00 PM)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="space-y-2 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-medium">
                          ₹{(item.priceNum * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {order.totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;