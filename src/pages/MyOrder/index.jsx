function MyOrder ({item}) {
    return(
        <div className="flex bg-slate-600 h-9 w-72 ">
                    <div className='checkout-menu--product'>
            
            <img className='product--figure'  alt="" />
            

            <div className='product--info'>
                <h3>{}</h3>
                <p>{}</p>
            </div>

            <div className='product--count'>
                <p>{}</p>
            </div>
            
            <div className='product--total'>
                <p>{}</p>
            </div>
         </div>
        </div>
    )
}

export {MyOrder}