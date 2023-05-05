import axios from "axios";

export const getProducts = (supplierId) => {
    return axios.get(`/products?supplierId=${supplierId}`);
};
