import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, MapPin, Package, Calendar, IndianRupee } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Profile = () => {
  const { orders, deliveryDetails } = useCart();
  const navigate = useNavigate();

  // Mock user details - in a real app, this would come from a user context or API
  const userDetails = {
    name: deliveryDetails.name || "John Doe",
    email: "john.doe@example.com",
    phone: deliveryDetails.phone || "+91 9876543210",
    joinDate: new Date("2023-01-15"),
  };

  return (
    <>
      <Helmet>
        <title>Profile - RRR Enterprise</title>
        <meta name="description" content="View your profile, delivery information, and order history" />
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
            My Profile
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Details Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">User Details</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium text-foreground">{userDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{userDetails.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{userDetails.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p className="font-medium text-foreground">{format(userDetails.joinDate, "PPP")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Delivery Information Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Delivery Information</h2>
                </div>
                {deliveryDetails.name ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium text-foreground">{deliveryDetails.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">{deliveryDetails.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium text-foreground">
                        {deliveryDetails.address}, {deliveryDetails.village} - {deliveryDetails.pincode}
                      </p>
                    </div>
                    {deliveryDetails.date && (
                      <div>
                        <p className="text-sm text-muted-foreground">Preferred Delivery Date</p>
                        <p className="font-medium text-foreground">{format(deliveryDetails.date, "PPP")}</p>
                      </div>
                    )}
                    {deliveryDetails.slot && (
                      <div>
                        <p className="text-sm text-muted-foreground">Preferred Time Slot</p>
                        <p className="font-medium text-foreground">
                          {deliveryDetails.slot === 'morning' && "Morning (8:00 AM - 12:00 PM)"}
                          {deliveryDetails.slot === 'afternoon' && "Afternoon (12:00 PM - 4:00 PM)"}
                          {deliveryDetails.slot === 'evening' && "Evening (4:00 PM - 7:00 PM)"}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No delivery information saved yet.</p>
                )}
              </div>
            </motion.div>

            {/* Order History Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Order History</h2>
                </div>
                {orders.length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-xl font-medium text-foreground mb-4">No orders yet</p>
                    <p className="text-muted-foreground mb-6">Your order history will appear here</p>
                    <Button onClick={() => navigate("/")} variant="outline">
                      Start Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.slice(0, 3).map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-border rounded-xl p-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Package className="w-5 h-5 text-primary" />
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
                      </motion.div>
                    ))}
                    {orders.length > 3 && (
                      <div className="text-center">
                        <Button onClick={() => navigate("/order-history")} variant="outline">
                          View All Orders
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;