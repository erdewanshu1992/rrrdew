import { useState, ReactNode } from "react";
import { CartContext, CartItem, DeliveryDetails, Order } from "./CartContextValue";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    name: "",
    phone: "",
    address: "",
    village: "",
    pincode: "",
    date: undefined,
    slot: "",
  });

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((sum, item) => sum + item.priceNum * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const clearDeliveryDetails = () => {
    setDeliveryDetails({
      name: "",
      phone: "",
      address: "",
      village: "",
      pincode: "",
      date: undefined,
      slot: "",
    });
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [...prev, order]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getTotalItems,
        deliveryDetails,
        setDeliveryDetails,
        clearDeliveryDetails,
        orders,
        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
