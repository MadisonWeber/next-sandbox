'use client';

import { useEffect, useState } from 'react';
import API from '@/helpers/http';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import useStore from '@/store';
import { Product } from '@/types';
import toast from 'react-hot-toast';

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<Product[] | null>(null);
  const addToCart = useStore(state => state.addToCart);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const { data } = await API.get('/api/product-list');
        setProductList(data);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };

    getProductList();
  }, []);

  return (
    <div className="w-full border-0 overflow-auto flex-1 bg-transparent flex items-center justify-center">
      {isLoading ? (
        <Loader className="animate-spin text-gray-500" />
      ) : (
        <div className="w-full overflow-auto h-full flex items-start justify-center flex-wrap gap-x-5 gap-y-5 p-6">
          {productList &&
            productList.map(product => (
              <div
                className="bg-slate-900 shadow-darkBg relative w-66 h-106 rounded-b-xl rounded-t-lg flex flex-col shadow-md hover:shadow-lg hover:scale(1.1)"
                key={product.id}
              >
                <div className="w-full relative h-60">
                  <div className="z-10 absolute top-2 right-2 p-2 rounded-xl bg-black/70 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">
                      <span className="text-amber-300 text-md font-bold">$</span> {product?.price}
                    </span>
                  </div>
                  <Image
                    src={product.image}
                    fill
                    className="object-cover h-60 aspect-square rounded-t-lg"
                    // className="rounded-t-lg w-full h-full aspect-square object-cover"
                    alt="product"
                  />
                </div>
                <div className="flex flex-1 items-start justify-start flex-col p-2">
                  <span>{product?.name}</span>
                  <span className="text-sm text-gray-400 line-clamp-3">{product?.description}</span>
                </div>
                <div className="p-2 mt-auto">
                  <button
                    onClick={() => {
                      addToCart(product);
                      toast.success(`Added ${product.name} to cart`);
                    }}
                    className="w-full h-10 p-2 cursor-pointer transition-colors duration-100 round-md bg-black hover:bg-slate-800 active:bg-blue-900 rounded-md flex flex-row items-center justify-center"
                  >
                    <Plus
                      height={17}
                      width={17}
                      className="text-gray-500 mr-1"
                    />
                    <span className="text-white text-sm"> Add To Cart </span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
