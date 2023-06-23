import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useFetchUser } from '../hooks/useFeachUser';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //const [carItem , setCart] = useState([])

  const [carCount, setCarCount] = useState(0);

  const [subTotal, setSubtotal] = useState(0);

  // const [orderItems, setOrderItems] = useState([]);

  const { data: carItem, saveData: setCart } = useLocalStorage('carItem', []);
  const { data: orderItems, saveData: setOrderItems } = useLocalStorage(
    'OrderItems',
    []
  );

  //para aregar prodcutos al carrito
  const addToCart = (item) => {
    const carItems = [...carItem];
    const existingItem = carItems.find((carItem) => carItem.id === item.id);

    if (existingItem) {
      existingItem.amount += 1;
    } else {
      carItems.push({ ...item, amount: 1 });
    }

    setCart(carItems);
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
    setCart(filteredCarItems);
  };

  const removeAllItemsCart = (id) => {
    const updatedCarItems = carItem.filter((item) => item.id !== id);
    setCart(updatedCarItems);
  };

  //orders

  const addNewOrder = ({ cartItems, totalPrice, totalItems }) => {
    let id = orderItems.length + 1000;

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const oreder = {
      id: id,
      date: `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`,
      state: 'pending',
      totalPrice: totalPrice,
      totalItems: totalItems,
      items: cartItems,
    };

    id += 1;

    const newOreders = [...orderItems];

    newOreders.push(oreder);

    setOrderItems(newOreders);
    setCart([]);
  };

  const getOrderById = (id) => {
    return orderItems.find((item) => item.id == id);
  };

  useEffect(() => {
    const totalItems = carItem.reduce((total, item) => total + item.amount, 0);
    setCarCount(totalItems);
  }, [carItem]);

  useEffect(() => {
    const subTotal = carItem.reduce(
      (total, item) => total + item.amount * item.price,
      0
    );
    setSubtotal(subTotal);
  }, [carItem]);

  const [isOpenModal, setOpenModal] = useState(false);

  const openModal = () => {
    const newState = !isOpenModal;

    setOpenModal(newState);
  };

  const [itemOnModal, setItemOnModal] = useState({});

  const addItemToModal = (item) => {
    setItemOnModal(item);
  };

  const [isOpenShopingCart, setOpenShopingCart] = useState(false);

  const toggleShopingCart = () => {
    setOpenShopingCart((prevState) => !prevState);
  };

  //flujo registro del usuario

  const { isUserLogin } = useFetchUser();

  return (
    <GlobalContext.Provider
      value={{
        addToCart,
        carCount,
        openModal,
        isOpenModal,
        addItemToModal,
        itemOnModal,
        isOpenShopingCart,
        toggleShopingCart,
        carItems: carItem,
        subTotal,
        removeToCart,
        removeAllItemsCart,
        addNewOrder,
        orderItems,
        getOrderById,
        isUserLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
