// context/Shopcontext.jsx
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(); // To'g'ri eksport qilindi

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false) 
  const [cartItems,setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId,size) =>{
    if (!size) {
        toast.error('mahsulat olchamni tanlang')
        return;
    }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
          if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
          }
          else{
            cartData[itemId][size] = 1;
          }
        }
        else{
          cartData[itemId] = {};
          cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
  }

   
    const getCartCount = () =>{
      let totalCount = 0;
      for(const items in  cartItems){
          for( const item in cartItems[items]){
              try {
               if (cartItems[items][item] > 0) {
                   totalCount += cartItems[items][item];
               } 
              } catch (error) {
                
              }
          }
      }
      return totalCount;
    } 
        
    const getCartAmount = () => {
      let totalAmount = 0;
    
      // Debugging: Check cartItems and products
      console.log("Cart Items:", cartItems); 
      console.log("Products:", products);  
    
      // Loop through cartItems
      for (const itemId in cartItems) {
        // Find the product by its _id
        let itemInfo = products.find((product) => product._id === itemId);
    
        if (itemInfo) {
          // Loop through sizes for the item in the cart
          for (const size in cartItems[itemId]) {
            const quantity = cartItems[itemId][size]; // Quantity for the specific size
    
            // Only add to total if quantity is greater than 0
            if (quantity > 0) {
              totalAmount += itemInfo.price * quantity; // Price * quantity
            }
          }
        }
      }
    
      // Log the calculated total for debugging
     
      return totalAmount;
    };
    
 
      
    const updateQuantity = async (itemId,size,quantity) =>{
            let cartData = structuredClone(cartItems);
            cartData[itemId] [size] = quantity;

          setCartItems(cartData);
    } 

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItems,addToCart,
    getCartCount,updateQuantity,
    getCartAmount, navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;  // ShopContextProvider'ni eksport qilish
