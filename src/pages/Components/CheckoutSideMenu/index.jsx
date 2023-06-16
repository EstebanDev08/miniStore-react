import React from 'react'
import { ProductCart } from '../ProductCart'
import './styles.css'
import { GlobalContext } from '../../../context/GlobalContext'

const CheckoutSideMenu = () => {

    const {toggleShopingCart} = React.useContext(GlobalContext)


    const handleClikCheckout =()=>{
        toggleShopingCart()
    }


    return(
        <aside className='checkout-menu--container'>
            
            <div className='checkout-menu--head'>
                <h2 >Shoping cart</h2>
                <span onClick={toggleShopingCart}>x</span>
            </div>
            
            <ProductCart/>
            <ProductCart/>  
            <ProductCart/>  
            <ProductCart/>  
            <ProductCart/>              
            
            <div className='checkout-menu--footer'>
                <div >
               
                    <div className='footer--subtotal'>
                        <p className='subtotal-items'>
                            <span>sub-total</span> 
                            <span>2 items</span>
                        </p>
                        <p className='subtotal'>$909</p>
                    </div>

                    <button onClick={()=>{handleClikCheckout()}} className='footer--botton'>Checkout</button>
                </div>
            </div>

        </aside>


    )
}

export {CheckoutSideMenu}