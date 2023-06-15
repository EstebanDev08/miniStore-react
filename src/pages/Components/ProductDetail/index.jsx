import React from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import './ProductDetail.css'

const ProductDetail = ()=>{
 
    const {itemOnModal} = React.useContext(GlobalContext)
    const item = itemOnModal;


    return(
        <article className="card-detail--container">
            <figure>
                <img src={item.images[0]} alt={item.title} />
            </figure>
            <div>
                <p> {item.title}</p>
                <p> $ {item.price}</p>
                <p>{item.category.name}</p>
                <p>{item.description}</p>
            </div>

            <div>
                <button>cancel</button>
                <button>add to car</button>
            </div>
            
        </article>
    )
}

export {ProductDetail}