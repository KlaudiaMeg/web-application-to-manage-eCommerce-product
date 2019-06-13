import axios from 'axios';
import {useState, useEffect} from 'react';

const api = axios.create({
    baseURL: 'http://localhost:3005/'
});

export const useWelcome = () => {
    const [products, setProducts] = useState([]);
    const pageLimit = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);

    const getProducts = async (query) => {
        const {data} = await api.get(`products?q=${query}`);
        setProducts(data);
        setCurrentProducts(data.slice((currentPage - 1) * pageLimit, pageLimit * currentPage));
    }

    useEffect(() => {
        getProducts("");
    }, []);

    return {
        products,
        getProducts,
        currentPage,
        setCurrentPage,
        pageLimit,
        currentProducts,
        setCurrentProducts
    }
}
