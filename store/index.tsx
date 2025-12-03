import { create } from 'zustand';
import { Product } from '@/types';

type StoreState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const useStore = create<StoreState>((set, get) => ({
  cart: [],
  addToCart: product => {
    const currentCart = get().cart;

    const itemAlreadyInCart = currentCart.find(item => item.id === product.id);

    if (itemAlreadyInCart) {
      set({
        cart: currentCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ cart: [...currentCart, { ...product, quantity: 1 }] });
    }
  },
  removeFromCart: productId => {
    const currentCart = get().cart;
    const item = currentCart.find(item => item?.id === productId);
    const multipleOfThisItemInCart = item && item.quantity > 1;

    if (multipleOfThisItemInCart) {
      set({
        cart: currentCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ),
      });
    } else {
      set({ cart: currentCart.filter(product => product.id !== productId) });
    }
  },
}));

export default useStore;
