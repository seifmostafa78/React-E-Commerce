import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext({});

const initialCartItems = localStorage.getItem("cart")
? JSON.parse(localStorage.getItem("cart")) 
: [];

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(initialCartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, cartItems)

  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => {
        return item.quantity + total
    }, 0)
  };

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemsQuantity = (id) => {
    setCartItems((currItems) => {
        if(currItems.find((item) => item.id === id) == null){
            return [...currItems, {id, quantity: 1}]
        }
        else{
            return currItems.map((item) => {
                if(item.id === id){
                    return {id, quantity: item.quantity + 1};
                }
                else{
                    return item;
                }
            });
        }
    });
  };

  const decreaseItemsQuantity = (id) => {
    setCartItems((currItems) => {
        if(currItems.find((item) => item.id === id).quantity === 1){
            return currItems.filter((item) => item.id !== id)
        }
        else{
            return currItems.map((item) => {
                if(item.id === id){
                    return {id, quantity: item.quantity - 1}
                }
                else{
                    return item;
                }
            });
        }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id))
  };

  return (
    <CartContext.Provider 
    value={{
        cartItems, 
        getItemsQuantity, 
        increaseItemsQuantity, 
        decreaseItemsQuantity,
        removeFromCart,
        getCartQuantity,
    }}
    >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;

export const useCart = () => {
    return useContext(CartContext);
};