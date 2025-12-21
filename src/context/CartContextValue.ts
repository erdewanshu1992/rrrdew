import { createContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  unit: string;
  image: string;
  quantity: number;
}

export interface DeliveryDetails {
  name: string;
  phone: string;
  address: string;
  village: string;
  pincode: string;
  date: Date | undefined;
  slot: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  deliveryDetails: DeliveryDetails;
  totalAmount: number;
  orderDate: Date;
  status: 'pending' | 'confirmed' | 'delivered';
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTotalItems: () => number;
  deliveryDetails: DeliveryDetails;
  setDeliveryDetails: (details: DeliveryDetails) => void;
  clearDeliveryDetails: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);