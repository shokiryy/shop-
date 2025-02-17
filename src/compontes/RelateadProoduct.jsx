import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelateadProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      
      // Filtering by category and subCategory
      if (category) {
        productsCopy = productsCopy.filter((item) => category.includes(item.category));
      }
      if (subCategory) {
        productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
      }

      // Setting the first 5 related products
      setRelated(productsCopy.slice(0, 5));

      console.log(productsCopy.slice(0, 5));  // Checking the filtered products
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
       <div className=' text-center text-3xl py-2'>
         <Title text1={'RELETED'} text2={'PRODUCTS'}/>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
           ))}
       </div>
    </div>
  );
};

export default RelateadProduct;
