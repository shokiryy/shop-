import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();  // Subtotal hisoblash
  const total = subtotal + delivery_fee;  // Umumiy summa

  // Debug uchun loglar
  useEffect(() => {
    console.log("Subtotal:", subtotal);
    console.log("Delivery Fee:", delivery_fee);
    console.log("Total:", total);
  }, [subtotal, delivery_fee, total]);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'HAMMASI'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping fee</p>
          <p>{currency} {delivery_fee}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <p>{currency} {subtotal === 0 ? 0 : total}</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
                 