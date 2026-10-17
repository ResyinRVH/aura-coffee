'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPopUp() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, totalPrice, totalItems } = useCart();
  if (!isCartOpen) return null;
  const formattedTotalPrice = `IDR ${totalPrice.toLocaleString('id-ID')}`;
  const handleCheckoutWA = () => {
    const phoneNumber = '6285607563796'; 
    const itemsList = cart
      .map((ci) => `${ci.quantity}x ${ci.item.name}`)
      .join(', ');

    const message = `Halo Aura Brew, saya ingin pesan: ${itemsList}. Total: ${formattedTotalPrice}`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-md bg-[#f6eee3] h-full shadow-2xl flex flex-col justify-between z-10 p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <h2 className="font-adventor font-bold text-lg text-stone-900">
              Keranjang Pesanan ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
            aria-label="Tutup keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500">
              <ShoppingBag className="w-12 h-12 stroke-[1.2] mb-3 text-stone-400" />
              <p className="font-medium text-sm">Keranjang belanja masih kosong</p>
              <p className="text-xs text-stone-400 mt-1">
                Pilih racikan kopi favoritmu dari katalog menu.
              </p>
            </div>
          ) : (
            cart.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="bg-white/80 rounded-2xl p-4 border border-stone-200/60 flex items-center justify-between shadow-sm"
              >
                <div className="flex-1 pr-3">
                  <h4 className="font-adventor font-bold text-sm text-stone-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#f67b52] font-semibold mt-0.5">
                    {item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-stone-100 rounded-full p-1 border border-stone-200">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors"
                    aria-label="Kurangi kuantitas"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold text-stone-900 px-1">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors"
                    aria-label="Tambah kuantitas"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-stone-600">Total Ringkasan:</span>
              <span className="font-adventor font-bold text-lg text-stone-900">
                {formattedTotalPrice}
              </span>
            </div>

            <button
              onClick={handleCheckoutWA}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
            >
              <span>Order via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}