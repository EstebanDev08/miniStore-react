import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const API = 'https://api.escuelajs.co/api/v1';

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
        const response = await fetch(`${API}/auth/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error('user is not login');
        } else {
          const data = await response.json();
          setUserData(data);
          setIsLogin(true);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, [accessToken]);

  const f = async ({ email, password }) => {
    try {
      const info = {
        email: email,
        password: password,
      };

      const response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      });
      if (!response.ok) {
        throw new Error('Info icorrect');
      } else {
        const data = await response.json();
        saveAccessToken(data.access_token);
        setIsLogin(true);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { userData, loading, error, isUserLogin, f };
};

export { useFetchUser };
