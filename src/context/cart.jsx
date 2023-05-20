
import { createContext, useReducer } from 'react'
import { CART_ACTION_TYPES, cartReducer, initialState } from '../reducers/cart'

export const CartContext = createContext()

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product
    })

  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
