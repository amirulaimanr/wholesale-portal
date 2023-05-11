import client from "../services/restClient";

export const supplierModel = {
    state: {
        supplierProduct: [],
        loading: false,
        error: null,
    },
    reducers: {
        setSupplierProduct: (state, payload) => ({
            ...state,
            supplierProduct: payload,
        }),
        setLoading: (state, payload) => ({
            ...state,
            loading: payload,
        }),
    },

    effects: (dispatch) => ({
        async fetchSupplierProductBySupplierId() {
            // dispatch.supplierModel.setLoading(true);
            try {
                const userId = localStorage.getItem("userId");
                const supplier = await client.service("supplier").find({
                    query: {
                        userId: userId,
                    },
                });
                console.log("This is supplier", supplier.data[0]._id);
                const data = await client.service("product").find({
                    query: {
                        supplierId: supplier.data[0]._id,
                    },
                });
                console.log(data);
                dispatch.supplierModel.setSupplierProduct(data.data);
            } catch (error) {
                console.error(error);
            }
        },
    }),
};
