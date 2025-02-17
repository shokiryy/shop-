import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext'; // ShopContext'ni to'g'ri import qilish
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);  // `ShopContext`dan `products` olish
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {  // Agar `products` mavjud bo'lsa
      setLatestProduct(products.slice(-10));  // Oxirgi 5 mahsulotni olish
    }
  }, [products]);  // products o'zgarganda qayta ishlash

  return (
    <div className='my-10'>
      <div className='text-center p-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero architecto neque ab deleniti, molestias rerum.
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
  {latestProduct && latestProduct.length > 0 ? (  // Agar `latestProduct` mavjud va bo'sh emas bo'lsa
    latestProduct.map((item, index) => (
      <ProductItem
        key={index}
        id={item._id}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    ))
  ) : (
    <p>Loading...</p>  // Agar mahsulotlar hali yuklanmagan bo'lsa
  )}
</div>

    </div>
  );
};

export default LatestCollection;
