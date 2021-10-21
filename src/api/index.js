import axios from 'axios';

import { prepareQuery, prepareFilters } from './utils'

const BACKEND_URL = '  http://localhost:3001';

const getResource = async (url) => {
    try {
        return await axios.get(url);
    } catch (error) {
        throw new Error (`Could not fetch ${url}, received ${error}`)
    }
}

const fetchAllProducts = async () => {
    const url = new URL("products", BACKEND_URL);
    return await getResource(url.data);
}

const fetchFilteredProducts = async (filters) => {
    const url = new URL("products", BACKEND_URL);
    url.search = prepareQuery(filters);
    const res = await getResource(url);
    const products = res.data;
    const total = res.headers['x-total-count'];
    return [products, total];
}

const fetchCategories = async () => {
    const url = new URL("categories", BACKEND_URL);
    const res = await getResource(url);
    return prepareFilters(res.data, 'category');
}

const fetchBrands = async () => {
    const url = new URL("brands", BACKEND_URL);
    const res = await getResource(url);
    return prepareFilters(res.data, 'brand');
}

export {
    fetchAllProducts,
    fetchFilteredProducts,
    fetchCategories,
    fetchBrands
}





