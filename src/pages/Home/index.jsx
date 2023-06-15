import { useFetchData } from "../../hooks/useFetchData";
import { ProductCard } from "../Components/ProductCard";
import './home.css'

function Home () {


    const {items, loading, error} = useFetchData();
    

    return(

        <section className="cards-container">

            {loading && <div>hola</div> }
            {error && <div>{`${error}`}</div>}
            {items?.map(item=>(
             <ProductCard key={item.id} item={item} />
            ))}


                
        </section>


    )
}

export {Home}