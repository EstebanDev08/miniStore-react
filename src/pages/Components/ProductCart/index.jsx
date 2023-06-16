import './styles.css'

const ProductCart = ({item}) => {
    return (
        <div className='checkout-menu--product'>
            
            <img className='product--figure' src="https://picsum.photos/640/640?r=1056" alt="" />
            

            <div className='product--info'>
                <h3>title pruduct</h3>
                <p>description</p>
            </div>

            <div className='product--count'>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            
            <div className='product--total'>
                <p>$700</p>
                <p>Remove</p>
            </div>
         </div>

    )
}

export {ProductCart}