'use client';

import React, { useEffect, useState } from 'react';
import API from '@/helpers/http';
import { Loader } from 'lucide-react';

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState(null);
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
    <div className="w-full border-0 flex-1 bg-transparent flex items-center justify-center">
      {isLoading ? <Loader className="animate-spin text-gray-500" /> : <span>loaded</span>}
    </div>
  );
};

export default ProductList;
