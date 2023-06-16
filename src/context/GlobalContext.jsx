

import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();


const GlobalContextProvider = ({children})=>{

    const [carItem , setCar] = useState([])

    const [carCount , setCarCount] = useState(0)

    const [subTotal, setSubtotal] = useState(0)

    const addToCart = (item) => {
        const carItems = [...carItem];
        const existingItem = carItems.find((carItem) => carItem.id === item.id);
      
        if (existingItem) {
          existingItem.amount += 1;
        } else {
          carItems.push({ ...item, amount: 1 });
        }
        
        setCar(carItems);

    };


    const removeToCart = (id) => {
        const updatedCarItems = carItem.map((item) => {
          if (item.id === id) {
            if (item.amount > 0) {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        });
      
        const filteredCarItems = updatedCarItems.filter((item) => item.amount > 0);
        setCar(filteredCarItems);
      };


      const removeAllItemsCart = (id)=>{

        const updatedCarItems = carItem.filter((item) => item.id !== id);
        setCar(updatedCarItems);

      }
            
    useEffect(() => {
        const totalItems = carItem.reduce((total, item) => total + item.amount, 0);
        setCarCount(totalItems);

    }, [carItem]);

    useEffect(() => {
        const subTotal = carItem.reduce((total, item) => total + (item.amount * item.price), 0);
        setSubtotal(subTotal);

    }, [carItem]);


    

    const [isOpenModal, setOpenModal] = useState(false)
 
    const openModal = () => {

        const newState = !isOpenModal

        setOpenModal(newState)        
    }

    const [itemOnModal, setItemOnModal] = useState({})

    const addItemToModal = (item) =>{
        setItemOnModal(item)
    }


    const [isOpenShopingCart, setOpenShopingCart] = useState(false)

    const toggleShopingCart = () => {

        const newState = !isOpenShopingCart
        setOpenShopingCart(newState)
    }

    return(
                
        <GlobalContext.Provider value={{
            addToCart,
            carCount,
            openModal,
            isOpenModal,
            addItemToModal,
            itemOnModal,
            isOpenShopingCart,
            toggleShopingCart,
            carItems:carItem,
            subTotal,
            removeToCart,
            removeAllItemsCart
         
           


        }}>
            {children}
        </GlobalContext.Provider>
    
    )

}




export {GlobalContext,GlobalContextProvider}