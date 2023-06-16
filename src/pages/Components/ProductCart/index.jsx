import { useContext, useState } from 'react'
import './styles.css'
import { GlobalContext } from '../../../context/GlobalContext'

const ProductCart = ({item}) => {

    const {addToCart, removeToCart, removeAllItemsCart} = useContext(GlobalContext)

    return (
        <div className='checkout-menu--product'>
            
            <img className='product--figure' src={item.images[0]} alt="" />
            

            <div className='product--info'>
                <h3>{item.title}</h3>
                <p>{item.category.name}</p>
            </div>

            <div className='product--count'>
                <button onClick={()=>removeToCart(item.id)}>-</button>
                <p>{item.amount}</p>
                <button onClick={()=>addToCart(item)}>+</button>
            </div>
            
            <div className='product--total'>
                <p>${item.price * item.amount}</p>
                <p onClick={()=> removeAllItemsCart(item.id)}>Remove</p>
            </div>
         </div>

    )
}

export {ProductCart}