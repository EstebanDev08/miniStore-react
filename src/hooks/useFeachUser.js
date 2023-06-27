import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { data } from 'autoprefixer';

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

  const loginUser = async ({ email, password }) => {
    try {
      const info = {
        email: email,
        password: password,
      };

      await checkEmail(email);
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

  const registerUser = async ({ email, password, name }) => {
    try {
      const info = {
        name: name,
        email: email,
        password: password,
        avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
      };

      const isEmailAvailable = await checkEmail(email);
      if (isEmailAvailable) {
        const response = await fetch(`${API}/users`, {
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
          setUserData(data);
          setLoading(false);

          await loginUser({ email: email, password: password });

          console.log(loginUser(email, password));
        }
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const checkEmail = async (email) => {
    try {
      const response = await fetch(`${API}/users`);
      if (!response.ok) {
        throw new Error('fallo el check del email');
      } else {
        const data = await response.json();

        const existEmail = data.find((item) => item.email === email);
        setLoading(false);
        if (existEmail) {
          return false;
        } else {
          return true;
        }
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { userData, loading, error, isUserLogin, loginUser, registerUser };
};

export { useFetchUser };
