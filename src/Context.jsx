import React, {useState, useContext, useReducer, useEffect} from "react"
import reducer from "./Reducer"
import CartItems from "./Data"

const AppContext = React.createContext()

const initialState = {
    loading: false,
    Cart: CartItems,
    total: 0 ,
    amount:0,
}

export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
  
     const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
     }

     const removeCart = (id) =>{
        dispatch({type: 'REMOVE_CART', payload:id})
     }

     const increaseCart = (id) => {
        dispatch({type: "INCREASE_CART", payload: id})
     }
     const decreaseCart = (id) => {
        dispatch({type: "DECREASE_CART", payload: id})
     }

     const toggleType = (id, type) => {
       dispatch({type: "TOGGLE", payload:{id,type}})
     } 

     useEffect(() => {
        dispatch({type: "  GET_TOTALS"})
     },[state.Cart])

     return <AppContext.Provider value={
        {
            ...state,
            clearCart,
            removeCart,
            increaseCart,
            decreaseCart,
            toggleType
        }}>
         {children}
     </AppContext.Provider>
}

//creating a custom hook

export const useGlobalContext = () => {
    return useContext(AppContext)
}