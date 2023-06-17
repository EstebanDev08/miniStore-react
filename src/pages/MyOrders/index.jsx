import React from "react"
import { Order } from "../Components/Order"

import './styles.css'
import { GlobalContext } from "../../context/GlobalContext"

function MyOrders () {

    const {orderItems} = React.useContext(GlobalContext)

    return(
        <section className="myorders-container">
            <div className="myorders--header">
                <h2 className="header-title"> My orders</h2>
            </div>

            <div className="myorders-card--container">
                <div className="card--titles">
                    <p>Order N.</p>
                    <p>fecha</p>
                    <p>Total Items</p>
                    <p>Total price</p>
                    <p>Status</p>
                </div>

                {orderItems.map((item)=>(
                    <Order key={item.id} item={item}/>
                ))

                }

            </div>
            
        </section>
    )
}

export {MyOrders}