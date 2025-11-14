'use client';

import React, { useEffect, useState } from 'react';
import API from '@/helpers/http';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import useStore from '@/store';

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState(null);
  const addToCart = useStore(state => state.addToCart);
  console.log('prodlist', productList);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const { data } = await API.get('/api/product-list');
        setProductList(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
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
          {productList.map(product => (
            <div
              className="bg-slate-900 relative w-66 h-106 rounded-b-xl rounded-t-lg flex flex-col shadow-md hover:shadow-lg hover:scale(1.1)"
              key={product.id}
            >
              <div className="absolute top-2 right-2 p-2 rounded-xl bg-black/70 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">
                  <span className="text-amber-300 text-md font-bold">$</span> {product?.price}
                </span>
              </div>
              <img
                src={product.image}
                className="rounded-t-lg w-full aspect-square object-cover"
                alt="product"
              />
              <div className="flex flex-1 items-start justify-start flex-col p-2">
                <span>{product?.name}</span>
                <span className="text-sm text-gray-400 line-clamp-3">{product?.description}</span>
              </div>
              <div className="p-2 mt-auto">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full h-10 p-2 cursor-pointer round-md bg-black hover:bg-black/50 rounded-md flex flex-row items-center justify-center"
                >
                  <Plus
                    height={17}
                    width={17}
                    className="text-blue-500 mr-1"
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
