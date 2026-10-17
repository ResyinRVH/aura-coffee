'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '@/data/menu';

export interface CartItem {
    item: MenuItem;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, delta: number) => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item: MenuItem) => {
        setCart((prevCart) => {
            const existing = prevCart.find((ci) => ci.item.id === item.id);
            if (existing) {
                return prevCart.map((ci) =>
                    ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
                );
            }
            return [...prevCart, { item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart((prevCart) => prevCart.filter((ci) => ci.item.id !== itemId));
    };

    const updateQuantity = (itemId: string, delta: number) => {
        setCart((prevCart) =>
            prevCart
                .map((ci) => {
                    if (ci.item.id === itemId) {
                        const nextQty = ci.quantity + delta;
                        return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
                    }
                    return ci;
                })
                .filter(Boolean) as CartItem[]
        );
    };

    const totalItems = cart.reduce((sum, ci) => sum + ci.quantity, 0);

    const totalPrice = cart.reduce((sum, ci) => {
        return sum + parsePrice(ci.item.price) * ci.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalItems,
                totalPrice,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}