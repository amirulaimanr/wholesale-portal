// productsModel.js
import client from "../services/restClient";

export const productsModel = {
    state: {
        productList: [],
        searchProducts: [],
        loading: false,
        error: null,
        userId: localStorage.getItem("userId"),
    },
    reducers: {
        setProductList: (state, payload) => ({
            ...state,
            productList: payload,
        }),
        setSearchProducts: (state, payload) => ({
            ...state,
            searchProducts: payload,
        }),
        setLoading: (state, payload) => ({
            ...state,
            loading: payload,
        }),
    },
    effects: (dispatch) => ({
        async fetchProducts(category, id) {
            try {
                // dispatch.products.setLoading(true);
                const query = {
                    query: {
                        $and: [{ category }, { id: id }],
                    },
                };

                console.log("This is query", query);
                const data = await client.service("product").find(query);
                console.log(data);
                dispatch.productsModel.setProductList(data.data);
            } catch (error) {
                // dispatch.products.setError(error.response && error.response.data.message ? error.response.data.message : error.message);
            } finally {
                // dispatch.products.setLoading(false);
            }
        },

        async fetchProductsById(id) {
            console.log(id);
            try {
                const data = await client.service("product").get(id);
                console.log(data);
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        async fetchProductAndSupplierData(id) {
            try {
                const data = await client.service("product").get(id, {
                    query: {
                        $populate: "supplierId",
                    },
                });
                const supplier = await client.service("supplier").get(data.supplierId);
                return { data, supplier };
            } catch (error) {
                console.error(error);
            }
        },

        async getSearchProductsByName(name) {
            try {
                dispatch.productsModel.setLoading(true);
                const search = await client.service("product").find({
                    query: {
                        name: name,
                    },
                });
                dispatch.productsModel.setSearchProducts(search);
            } catch (error) {
                console.error(error);
            } finally {
                dispatch.productsModel.setLoading(false);
            }
        },

        // favourites

        // async addToFavourites(id) {
        //     const userId = localStorage.getItem("userId");
        //     try {
        //         const newFav = {
        //             product: id,
        //             userId: userId, // Replace with the actual user ID
        //             // buyerId: 'buyer-id-here', // Replace with the actual buyer ID
        //         };
        //         const result = await client.service("favourite").create(newFav);
        //         console.log(result);
        //         console.log(userId);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },
    }),
};
