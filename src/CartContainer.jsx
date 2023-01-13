import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Context'

const CartContainer = () => {
  const {Cart, total, clearCart} = useGlobalContext()
  if(Cart.length === 0) {
  return (
    
    <section className='cart'>
         <header>
           <h1>Your Bag</h1>
           <h4 className='empty-cart'>is Currently empty</h4>
         </header>
    
    </section>
  )  
  }
  return(
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {Cart.map(item => {
          return <CartItem {...item} key={item.id}/>
        })}
      </div>
      <footer>
        <hr/>
        <div className='cart-total'>
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
          <button className= "btn clear-btn" onClick={clearCart}>
             clear cart
          </button>
      </footer>
    </section>
  )
}

export default CartContainer