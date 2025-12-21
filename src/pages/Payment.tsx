import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { Order } from "@/context/CartContextValue";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Truck, MapPin, Clock, Calendar, IndianRupee } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Payment = () => {
  const { items, getTotal, deliveryDetails, addOrder, clearCart, clearDeliveryDetails } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState("cod");

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-medium text-foreground mb-4">No items to pay for</p>
          <Button onClick={() => navigate("/")} variant="outline">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const handlePayment = () => {
    // Create order
    const order: Order = {
      id: `ORD-${Date.now()}`,
      items: [...items],
      deliveryDetails: { ...deliveryDetails },
      totalAmount: getTotal() + (getTotal() >= 2000 ? 0 : 100),
      orderDate: new Date(),
      status: 'pending',
    };

    addOrder(order);
    clearCart();
    clearDeliveryDetails();

    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been confirmed and will be delivered soon.",
    });

    navigate("/order-history");
  };

  const total = getTotal();
  const deliveryFee = total >= 2000 ? 0 : 100;
  const finalTotal = total + deliveryFee;

  return (
    <>
      <Helmet>
        <title>Payment - RRR Enterprise</title>
        <meta name="description" content="Complete your payment for fertilizer delivery" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate("/checkout")}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Checkout</span>
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-foreground mb-8"
          >
            Payment
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Payment Method */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {/* Cash on Delivery */}
                    <div
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedPayment === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setSelectedPayment('cod')}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={selectedPayment === 'cod'}
                          onChange={() => setSelectedPayment('cod')}
                          className="w-4 h-4"
                        />
                        <div>
                          <p className="font-semibold text-foreground">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Pay when your order is delivered</p>
                        </div>
                      </div>
                    </div>

                    {/* UPI */}
                    <div
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedPayment === 'upi' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setSelectedPayment('upi')}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="upi"
                          checked={selectedPayment === 'upi'}
                          onChange={() => setSelectedPayment('upi')}
                          className="w-4 h-4"
                        />
                        <div>
                          <p className="font-semibold text-foreground">UPI</p>
                          <p className="text-sm text-muted-foreground">Pay using UPI apps like Google Pay, PhonePe, etc.</p>
                        </div>
                      </div>
                    </div>

                    {/* Credit/Debit Card */}
                    <div
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedPayment === 'card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setSelectedPayment('card')}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={selectedPayment === 'card'}
                          onChange={() => setSelectedPayment('card')}
                          className="w-4 h-4"
                        />
                        <div>
                          <p className="font-semibold text-foreground">Credit/Debit Card</p>
                          <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay accepted</p>
                        </div>
                      </div>
                    </div>

                    {/* Net Banking */}
                    <div
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedPayment === 'netbanking' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setSelectedPayment('netbanking')}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="netbanking"
                          checked={selectedPayment === 'netbanking'}
                          onChange={() => setSelectedPayment('netbanking')}
                          className="w-4 h-4"
                        />
                        <div>
                          <p className="font-semibold text-foreground">Net Banking</p>
                          <p className="text-sm text-muted-foreground">Pay through your bank account</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    For this demo, all payment methods work the same way. In a real application, you would integrate payment gateways like Razorpay, Stripe, etc.
                  </p>
                </div>
              </div>

              {/* Delivery Summary */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  Delivery Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{deliveryDetails.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {deliveryDetails.address}, {deliveryDetails.village} - {deliveryDetails.pincode}
                      </p>
                      <p className="text-sm text-muted-foreground">{deliveryDetails.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">
                        {deliveryDetails.date ? format(deliveryDetails.date, "PPP") : "Not specified"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {deliveryDetails.slot === 'morning' && "Morning (8:00 AM - 12:00 PM)"}
                        {deliveryDetails.slot === 'afternoon' && "Afternoon (12:00 PM - 4:00 PM)"}
                        {deliveryDetails.slot === 'evening' && "Evening (4:00 PM - 7:00 PM)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border sticky top-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 bg-muted/50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-primary">
                        ₹{(item.priceNum * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium text-leaf">
                      {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handlePayment}
                  className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  size="lg"
                >
                  Complete Payment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
