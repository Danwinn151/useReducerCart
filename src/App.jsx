import { useState } from 'react'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './Context'

function App() {
 const {loading} = useGlobalContext()
if(loading){
 return (
  <div className='loading'>
      <h1>Loading...</h1>
  </div>
 )
}

  return (
    <div className="">
      <Navbar/>
      <CartContainer/>
    </div>
  )
}

export default App
