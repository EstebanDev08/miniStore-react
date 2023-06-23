import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const API = 'https://api.escuelajs.co/api/v1/auth/profile';

const useFetchUser = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUserLogin, setIsLogin] = useState(false);

  const { data: accessToken, saveData: saveAccessToken } = useLocalStorage(
    'accessToken',
    ''
  );

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await fetch(`${API}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('user is not login');
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
        setIsLogin(true);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  return { userData, loading, error, isUserLogin };
};

export { useFetchUser };
