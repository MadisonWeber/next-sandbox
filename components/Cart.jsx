'use client';

import React, { useState, useRef, useEffect } from 'react';
import useStore from '@/store';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import { clsx } from 'clsx';

const Cart = () => {
  const cart = useStore(state => state.cart);
  const cartRef = useRef(null);
  const removeFromCart = useStore(state => state.removeFromCart);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = event => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const cartHasItems = cart && cart.length > 0;
  const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price * item.quantity), 0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(p => !p)}
        className={clsx(
          'text-md cursor-pointer font-semibold text-black border-2 p-2 rounded-md flex flex-row items-center gap-x-2 transition-all 100ms',
          isOpen ? 'border-blue-100 border-2 bg-blue-900' : 'border-gray-400 bg-blue-950'
        )}
      >
        <ShoppingCart
          className="text-white"
          height={18}
          width={18}
        />
      </button>
      {cartHasItems && (
        <div className="w-4.5 h-4.5 rounded-full bg-blue-700 absolute top-[-7px] right-[-6px] flex items-center justify-center">
          <span className="text-xs font-bold text-gray-100">{cart.length}</span>
        </div>
      )}
      {isOpen && (
        <div
          ref={cartRef}
          className="absolute top-11 right-0 shadow-xl bg-slate-900 min-w-100 rounded-xl border-2 border-gray-400"
        >
          <div className="w-full p-3 border-b-1 border-gray-500 flex items-center gap-x-2">
            <ShoppingCart
              className="text-white"
              height={18}
              width={18}
            />
            <span className="font-bold text-lg">Your Cart</span>
          </div>

          <div className="flex-1 flex flex-col items-start justify-start p-2 max-h-140 overflow-auto">
            {!cartHasItems && (
              <div className="p-4">
                <span className="text-gray-500">No items in your cart</span>
              </div>
            )}
            {cart?.map(item => (
              <div
                key={item.id}
                className="p-2 border-b-1 border-gray-800 w-full flex items-center"
              >
                <img
                  className="w-8 h-8 rounded-md object-cover mr-1.5 border-1 border-gray-700"
                  src={item?.image}
                  alt="product"
                />
                <span className="text-sm text-gray-400">{item.name}</span>
                {item.quantity > 1 && (
                  <div className="p-1 ml-2 flex gap-x-0.5 items-center bg-blue-700 rounded-lg">
                    <span className="text-xs">x</span>
                    <span className="text-xs">{item.quantity}</span>
                  </div>
                )}
                <span className="ml-auto text-sm text-gray-400 font-semibold">
                  $ {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-black/80 hover:bg-red-700 p-1.5 rounded-full ml-2 cursor-pointer"
                >
                  <Trash2
                    height={14}
                    width={14}
                  />
                </button>
              </div>
            ))}
          </div>
          {cartHasItems && (
            <div className="w-full p-2 px-3 flex">
              <span className="text-lg">Total</span>
              <span className="text-lg font-bold ml-auto text-gray-300">
                <span className="text-amber-500">$</span> {totalPrice?.toFixed(2)}
              </span>
            </div>
          )}
          <div className="w-full p-2.5 min-h-12 border-t-1 mt-2 border-gray-500">
            <button
              disabled={!cartHasItems}
              className="w-full bg-blue-900 rounded-md p-2 font-semibold"
            >
              <span>{cartHasItems ? 'Checkout' : 'No items in cart'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
