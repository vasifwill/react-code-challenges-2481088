import { useEffect, useReducer, useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]



function ShoppingCart () {
//  const cart = [{ name: 'apple', quantity: 3, price: 0.39 }]
  const [carts, setCarts] = useState([])

  const AddToCart = (item) => {
    const cartCopy = [...carts]
    const itemInCart = cartCopy.find(e => e.name === item.name)
    if(itemInCart){
      itemInCart.quantity+=1
      setCarts(cartCopy)
    }else{
      setCarts(() => [...carts, {...item, quantity:1}])

    }
    
  }

  const add = (name) => {
   const cartCopy = [...carts]
   const findName = cartCopy.find(e => e.name === name)
   findName.quantity+=1
   setCarts(cartCopy)
    }
  
  const subTrack = (name) => {
    const cartCopy = [...carts]
    const findName = cartCopy.find(e => e.name === name)
    findName.quantity-=1
    setCarts(cartCopy)
      }



  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button  onClick={() => AddToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {carts.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => subTrack(item.name)}>-</button>
                {item.quantity}
                <button  onClick={() => add(item.name)}>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${carts.reduce((item,initial) => ((initial.quantity * initial.price)+item),0)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
