import { data } from 'autoprefixer';
import './styles.css'
import { Link } from 'react-router-dom';

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
            <p>{item.date}</p>
            <p>{item.totalItems} Items</p>
            <p>{fortmatedNumber}</p>
            <p>{item.state}</p>
            <Link to={`/my-order/id/${item.id}`}>
                <p>View</p>
            </Link>
        </div>

    )
}

export {Order}