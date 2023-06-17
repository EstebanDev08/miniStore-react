import { data } from 'autoprefixer';
import './styles.css'

const Order = ({item}) => {


    return (

        <div className="order--container">
            <p>#{item.id}</p>
            <p>{item.date.toDateString()}</p>
            <p>{item.totalItems} Items</p>
            <p>${item.totalPrice}</p>
            <p>{item.state}</p>
            <p>View</p>
        </div>

    )
}

export {Order}