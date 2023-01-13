const reducer = (state,action) => {
    if(action.type  === "CLEAR_CART"){
         return{...state, Cart:[]}
    }
    if(action.type === 'REMOVE_CART'){
       
  const filteredItems = state.Cart.filter(item => item.id !== action.payload)
        console.log(filteredItems)
     return{...state, Cart:filteredItems}
    }
    if(action.type === "TOGGLE"){
     const tempCart = state.Cart.map(item => {
        if(item.id === action.payload.id){
            if(action.payload.type === "inc"){
                return {...item, amount: item.amount + 1}
            }
            if(action.payload.type === 'dec'){
                return{...item, amount:item.amount - 1}
            }
        }
        return item
     }).filter(item => item.amount !== 0)
        return {...state, Cart: tempCart}
    }
    if(action.type === 'GET_TOTALS')
    console.log(state.Cart)
    {

     let {total, amount} = state.Cart.reduce((cartTotal, cartItem) => {
        const{price, amount} = cartItem
        const itemtotal = price * amount
        cartTotal.total += itemtotal
        cartTotal.amount += amount
        return cartTotal 
        
     }, 
     {
        total:0,
        amount:0,
     }
     )
     total = total.toFixed(2)
        return {...state, total, amount}
    }

    
    return state

} 

export default reducer