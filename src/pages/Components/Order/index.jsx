import { data } from 'autoprefixer';
import './styles.css'

const Order = ({item}) => {

    const fortmatedNumber = item.totalPrice.toLocaleString('es-ES',
        {
            style:'currency',
            currency:'USD'
        }
    )

    return (

        <div className="order--container">
            <p>#{item.id}</p>
            <p>{item.date.toDateString()}</p>
            <p>{item.totalItems} Items</p>
            <p>{fortmatedNumber}</p>
            <p>{item.state}</p>
            <a href='/my-order'>View</a>
        </div>

    )
}

export {Order}