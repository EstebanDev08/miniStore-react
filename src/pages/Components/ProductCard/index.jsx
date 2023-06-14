import './cardContainer.css'

const ProductCard = ()=>{


    return(
        <article className="card-container" >
            <figure className="card-container--content">
                <img src="" alt="" />
                <span className='card-add'>+</span>
                <span className='card-categorie'>categorie</span>
                
            </figure>

            <p className='card-container--info'>
                <span>name</span>
                <span>$800</span>
            </p>
        </article>
    )
}


export  {ProductCard}