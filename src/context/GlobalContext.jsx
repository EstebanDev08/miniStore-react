import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useFetchUser } from '../hooks/useFeachUser';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const { userData, isUserLogin, loginUser, loading, registerUser, error } =
    useFetchUser();

  const [carCount, setCarCount] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const { data: carItem, saveData: setCart } = useLocalStorage(
    `carItems_${userData?.id}`,
    []
  );
  const { data: orderItems, saveData: setOrderItems } = useLocalStorage(
    `orderItems_${userData?.id}`,
    []
  );

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

  const addNewOrder = ({ cartItems, totalPrice, totalItems }) => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const order = {
      id: orderItems.length + 1000,
      date: `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`,
      state: 'pending',
      totalPrice: totalPrice,
      totalItems: totalItems,
      items: cartItems,
    };

    const updatedOrderItems = [...orderItems, order];
    setOrderItems(updatedOrderItems);
    setCart([]);
  };

  const getOrderById = (id) => {
    const updatedCarItems = orderItems.find((item) => item.id == id);
    return updatedCarItems;
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

  useEffect(() => {
    if (userData) {
      const storedCarItems = localStorage.getItem(`carItems_${userData.id}`);
      if (storedCarItems) {
        setCart(JSON.parse(storedCarItems));
      }

      const storedOrderItems = localStorage.getItem(
        `orderItems_${userData.id}`
      );
      if (storedOrderItems) {
        setOrderItems(JSON.parse(storedOrderItems));
      }
    }
  }, [userData]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem(`carItems_${userData.id}`, JSON.stringify(carItem));
      localStorage.setItem(
        `orderItems_${userData.id}`,
        JSON.stringify(orderItems)
      );
    }
  }, [userData, carItem, orderItems]);

  const [isOpenModal, setOpenModal] = useState(false);
  const [itemOnModal, setItemOnModal] = useState({});
  const [isOpenShopingCart, setOpenShopingCart] = useState(false);

  const openModal = () => {
    const newState = !isOpenModal;
    setOpenModal(newState);
  };

  const addItemToModal = (item) => {
    setItemOnModal(item);
  };

  const toggleShopingCart = () => {
    setOpenShopingCart((prevState) => !prevState);
  };

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
        loginUser,
        loading,
        userData,
        registerUser,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
