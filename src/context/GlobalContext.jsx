

import { createContext, useState } from "react";

const GlobalContext = createContext();


const GlobalContextProvider = ({children})=>{

    const [carItem , setCar] = useState([])

    const [carCount , setCarCount] = useState(0)

    const addCar = (item)=>{

        const carItems = [...carItem]

        carItems.push(item)

        setCar(carItems)

        setCarCount(carItems.length)
    }


    const [isOpenModal, setOpenModal] = useState(false)
 
    const openModal = () => {

        const newState = !isOpenModal

        setOpenModal(newState)        
    }

    const [itemOnModal, setItemOnModal] = useState({})

    const addItemToModal = (item) =>{
        setItemOnModal(item)
    }

    return(
                
        <GlobalContext.Provider value={{
            addCar,
            carItem,
            carCount,
            openModal,
            isOpenModal,
            addItemToModal,
            itemOnModal


        }}>
            {children}
        </GlobalContext.Provider>
    
    )

}




export {GlobalContext,GlobalContextProvider}