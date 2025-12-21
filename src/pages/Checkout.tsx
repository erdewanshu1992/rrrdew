import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, CalendarIcon, Clock, MapPin, User, Phone, Truck } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const deliverySlots = [
  { id: "morning", label: "Morning", time: "8:00 AM - 12:00 PM" },
  { id: "afternoon", label: "Afternoon", time: "12:00 PM - 4:00 PM" },
  { id: "evening", label: "Evening", time: "4:00 PM - 7:00 PM" },
];

const Checkout = () => {
  const { items, getTotal, deliveryDetails, setDeliveryDetails } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSlot, setSelectedSlot] = useState(deliveryDetails.slot);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(deliveryDetails.date);
  const [formData, setFormData] = useState({
    name: deliveryDetails.name,
    phone: deliveryDetails.phone,
    address: deliveryDetails.address,
    village: deliveryDetails.village,
    pincode: deliveryDetails.pincode,
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-medium text-foreground mb-4">Your cart is empty</p>
          <Button onClick={() => navigate("/")} variant="outline">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const handleProceedToPayment = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.village || !formData.pincode) {
      toast({
        title: "Missing Details",
        description: "Please fill in all delivery details",
        variant: "destructive",
      });
      return;
    }
    if (!selectedDate) {
      toast({
        title: "Select Date",
        description: "Please select a delivery date",
        variant: "destructive",
      });
      return;
    }
    if (!selectedSlot) {
      toast({
        title: "Select Slot",
        description: "Please select a delivery time slot",
        variant: "destructive",
      });
      return;
    }

    setDeliveryDetails({
      ...formData,
      date: selectedDate,
      slot: selectedSlot,
    });

    navigate("/payment");
  };

  return (
    <>
      <Helmet>
        <title>Checkout - RRR Enterprise</title>
        <meta name="description" content="Complete your order with delivery details and payment" />
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
            Checkout
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Delivery Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Personal Details */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Delivery Details
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-muted/50 pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Delivery Address
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Address</label>
                    <Textarea
                      placeholder="House/Farm No., Street, Landmark..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="bg-muted/50 resize-none"
                      rows={3}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Village / City</label>
                      <Input
                        placeholder="Enter village or city"
                        value={formData.village}
                        onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                        className="bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">PIN Code</label>
                      <Input
                        placeholder="Enter PIN code"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="bg-muted/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Slot Selection */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Delivery Date & Time
                </h2>
                
                <div className="space-y-6">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-muted/50",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a delivery date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Select Time Slot</label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {deliverySlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all",
                            selectedSlot === slot.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <p className="font-semibold text-foreground">{slot.label}</p>
                          <p className="text-sm text-muted-foreground">{slot.time}</p>
                        </button>
                      ))}
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
                    <span className="font-medium">₹{getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium text-leaf">
                      {getTotal() >= 2000 ? "FREE" : "₹100"}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">
                      ₹{(getTotal() + (getTotal() >= 2000 ? 0 : 100)).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-leaf/10 rounded-lg flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-leaf" />
                  <span className="text-foreground">
                    {getTotal() >= 2000 
                      ? "You get FREE delivery!" 
                      : `Add ₹${(2000 - getTotal()).toLocaleString()} more for free delivery`}
                  </span>
                </div>

                <Button
                  onClick={handleProceedToPayment}
                  className="w-full mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  size="lg"
                >
                  Proceed to Payment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
