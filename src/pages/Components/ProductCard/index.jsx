import './cardContainer.css'

const ProductCard = ({item})=>{


    return(
        <article className="card-container" >
            <figure className="card-container--content">
                <img src={`${item.images[0]}`} alt={`${item.title}`} />
                <span className='card-add'>+</span>
                <span className='card-categorie'>{`${item.category.name}`}</span>
                
            </figure>

            <p className='card-container--info'>
                <span>{`${item.title}`}</span>
                <span>$ {`${item.price}`}</span>
            </p>
        </article>
    )
}


export  {ProductCard}