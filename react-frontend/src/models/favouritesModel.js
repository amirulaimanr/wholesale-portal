import client from "../services/restClient";

export const favouritesModel = {
    state: {
        favourites: [],
        loading: false,
        error: null,
    },
    reducers: {
        setFavourites: (state, payload) => ({
            ...state,
            favourites: payload,
        }),
        setLoading: (state, payload) => ({
            ...state,
            loading: payload,
        }),
        setError: (state, payload) => ({
            ...state,
            error: payload,
        }),
    },
    effects: (dispatch) => ({
        async addToFavourites(id) {
            const userId = localStorage.getItem("userId");
            try {
                // Check if favorite with the same product and user id already exists
                const existingFav = await client.service("favourite").find({
                    query: {
                        product: id,
                        userId: userId,
                    },
                });
                if (existingFav.total === 0) {
                    // If favorite does not exist, create new favorite
                    const newFav = {
                        product: id,
                        userId: userId, // Replace with the actual user ID
                        // buyerId: 'buyer-id-here', // Replace with the actual buyer ID
                    };
                    const result = await client.service("favourite").create(newFav);
                    console.log(result);
                } else {
                    // If favorite already exists, do nothing
                    console.log("Favorite already exists");
                }
            } catch (error) {
                console.error(error);
            }
        },

        async removeFromFavourites(id) {
            const userId = localStorage.getItem("userId");
            try {
                const favourites = await client.service("favourite").find({
                    query: {
                        product: id,
                        userId: userId,
                    },
                });

                if (favourites.total === 0) {
                    console.log("No favourite record found for product", id, "and user", userId);
                    return;
                }

                const favouriteId = favourites.data[0]._id;
                console.log(favouriteId);

                const data = await client.service("favourite").remove(favouriteId);

                console.log("Removed favourite record", favouriteId, "from favourites", data);
            } catch (error) {
                console.error(error);
            }
        },

        async fetchFavourites(userId) {
            try {
                dispatch.favouritesModel.setLoading(true);
                const favourites = await client.service("favourite").find({
                    query: {
                        userId: userId,
                    },
                });
                const productIds = favourites.data.map((favourite) => favourite.product);
                console.log(productIds);

                if (productIds.length > 0) {
                    const products = await client.service("product").find({
                        query: {
                            _id: {
                                $in: productIds,
                            },
                        },
                    });
                    dispatch.favouritesModel.setFavourites(products.data);
                } else {
                    dispatch.favouritesModel.setFavourites([]);
                }
            } catch (error) {
                console.error(error);
                dispatch.favouritesModel.setError(error);
            } finally {
                dispatch.favouritesModel.setLoading(false);
            }
        },
    }),
};
