import React from 'react'
import { ProductCart } from '../ProductCart'
import './styles.css'
import { GlobalContext } from '../../../context/GlobalContext'

const CheckoutSideMenu = () => {

    const {toggleShopingCart, carItems, carCount, subTotal} = React.useContext(GlobalContext)

   

    const handleClikCheckout =( item)=>{
        toggleShopingCart()
    }


    return(
        <aside className='checkout-menu--container'>
            
            <div className='checkout-menu--head'>
                <h2 >Shoping cart</h2>
                <span onClick={toggleShopingCart}>x</span>
            </div>
            

            { carCount > 0 ? carItems?.map((item)=>(

                <ProductCart key={item.id} item={item}/>

            ) ) : <div> Add Products</div> }              
            

            <div className='checkout-menu--footer'>
                <div >
               
                    <div className='footer--subtotal'>
                        <p className='subtotal-items'>
                            <span>sub-total</span> 
                            <span>{carCount} items</span>
                        </p>
                        <p className='subtotal'>${subTotal}</p>
                    </div>

                    <button onClick={()=>handleClikCheckout(carItems)} className='footer--botton'>Checkout</button>
                </div>
            </div>

        </aside>


    )
}

export {CheckoutSideMenu}