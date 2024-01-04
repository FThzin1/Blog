import { useState, useEffect } from 'react';

const useGetAllData = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getAll');
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          throw new Error('Erro ao obter os dados');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return blog;
};

export default useGetAllData;
