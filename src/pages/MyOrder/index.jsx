import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function MyOrder () {

        const idOrder = window.location.pathname.split('/')[3];

        const {getOrderById} = useContext(GlobalContext)

        const order = getOrderById(idOrder)
        
        

        return(
        <section className="myorder-container">
            <div className="myorder--header">
                <h2 className="header-title"> My order</h2>
            </div>

            <div>

            </div>
            
        </section>
    )
}

export {MyOrder}