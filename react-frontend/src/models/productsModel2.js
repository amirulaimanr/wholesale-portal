// productsModel.js
import client from "../services/restClient";

export const productsModel = {
    state: {
        productList: [],
        loading: false,
        error: null,
    },
    reducers: {
        setProductList: (state, payload) => ({
            ...state,
            productList: payload,
        }),
    },
    effects: (dispatch) => ({
        async fetchProducts(category) {
            try {
                // dispatch.products.setLoading(true);
                const query = {
                    query: {
                        $and: [{ category }],
                    },
                };

                console.log("This is quesry", query);
                const data = await client.service("product").find(query);
                console.log(data);
                dispatch.productsModel.setProductList(data.data);
            } catch (error) {
                // dispatch.products.setError(error.response && error.response.data.message ? error.response.data.message : error.message);
            } finally {
                // dispatch.products.setLoading(false);
            }
        },
    }),
};
