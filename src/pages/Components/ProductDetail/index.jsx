import React from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import './ProductDetail.css'

const ProductDetail = ()=>{
 
    const {itemOnModal, addToCart} = React.useContext(GlobalContext)
    const item = itemOnModal;


    return(
        <article className="card-detail--container">
            <figure className="card-detail--img">
                <img src={item.images[0]} alt={item.title} />
            </figure>
            <section className="cart-detail--info-content">
                <div className="card-detail--info">
                    <h2> {item.title}</h2>
                    <p> ${item.price}</p>
                    <p> Description</p>
                    <p className="info--description">{item.description}</p>
                </div>

                <div className="card-detail--buttons">
                    
                    <button onClick={()=>addToCart(item)}>Add to Cart</button>
                </div>
            </section>

            
        </article>
    )
}

export {ProductDetail}