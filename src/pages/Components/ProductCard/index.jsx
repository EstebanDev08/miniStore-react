import React, { useContext } from 'react'
import './cardContainer.css'
import { GlobalContext } from '../../../context/GlobalContext'

const ProductCard = ({item})=>{

    const {addCar, openModal, addItemToModal } = React.useContext(GlobalContext)


    const handleCardClick = (event, item) => {
        // Evitar que se ejecute la función si se hizo clic en el elemento hijo
        if (event.target.className === 'card-add') {
          return;
        }
    
        openModal();

        addItemToModal(item);
      }

    return(
        <article className="card-container" onClick={()=>handleCardClick(event, item)} >
            <figure className="card-container--content">
                <img src={item.images[0]} alt={item.title} />
                <span className='card-add' onClick={(item)=>addCar(item)}>+</span>
                <span className='card-categorie'>{item.category.name}</span>
                
            </figure>

            <p className='card-container--info'>
                <span>{item.title}</span>
                <span>${item.price}</span>
            </p>
        </article>
    )
}


export  {ProductCard}