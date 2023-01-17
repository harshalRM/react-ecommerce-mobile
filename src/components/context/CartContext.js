import {createContext, useContext, useEffect, useReducer} from 'react'
import reducer from '../reducer/CartReducer';

const CartContext = createContext();

const CartProvider = ({children}) => {

  const initialState = {
    cart:[],
};

  const [state, dispatch] = useReducer(reducer, initialState);

  const  addToCart = (id, color, product, productquantity) => {
    dispatch({type:"ADD_TO_CART", payload: {id, color, product, productquantity}})
  };

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM", payload:id});
  }

  useEffect(()=>{
    dispatch({type:"CART_TOTAL_PRICE"});
  })

    return <CartContext.Provider value={{...state, addToCart, removeItem}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider, useCartContext}