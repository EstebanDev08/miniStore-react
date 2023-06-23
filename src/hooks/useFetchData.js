import { useEffect, useState } from 'react';

const API = 'https://api.escuelajs.co/api/v1/products';

const useFetchData = (query = '') => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API}${query}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return { items, loading, error };
};

export { useFetchData };
