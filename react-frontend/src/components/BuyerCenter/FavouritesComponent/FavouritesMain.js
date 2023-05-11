import React, { useState, useEffect } from "react";
import "../Style/BuyerMain.css";
import { Button } from "primereact/button";
import Products from "../../Products/Products";
import { useDispatch, useSelector } from "react-redux";

const FavouritesMain = () => {
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favouritesModel.favourites);
    console.log(favourites);
    const loading = useSelector((state) => state.favouritesModel.loading);
    const [selectedProducts, setSelectedProducts] = useState([]);
    console.log(selectedProducts);

    useEffect(() => {
        dispatch.favouritesModel.fetchFavourites(localStorage.getItem("userId"));
    }, [dispatch]);

    const handleRemoveFromFavourites = async () => {
        const removedIds = [];

        for (const product of selectedProducts) {
            await dispatch.favouritesModel.removeFromFavourites(product._id, localStorage.getItem("userId"));
            console.log(product._id);
            removedIds.push(product._id);
        }

        dispatch.favouritesModel.setFavourites(favourites.filter((product) => !removedIds.includes(product._id)));

        setSelectedProducts([]);
    };

    const handleSelectProduct = (product) => {
        if (selectedProducts.includes(product)) {
            setSelectedProducts(selectedProducts.filter((p) => p !== product));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    return (
        <>
            <section className="content-main inquiries-container">
                <div className="bc-title-container w-full">
                    <h4 className="font-semibold">My Favourites</h4>
                </div>

                <div className="p-mt-4 mt-5">
                    <Button label="Remove from Favourites" className="p-button-danger" onClick={handleRemoveFromFavourites} disabled={selectedProducts.length === 0} />
                </div>

                <div className="p-grid prod-row mt-5 ">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        favourites.map((product) => (
                            <div key={product._id} className="p-col-12 p-md-6 p-lg-4 p-xl-3">
                                <div className="card mr-5 ml-2 w-10">
                                    <div className="p-field-checkbox">
                                        <input type="checkbox" checked={selectedProducts.includes(product)} onChange={() => handleSelectProduct(product)} style={{ transform: "scale(1.5)" }} />
                                    </div>
                                    <Products product={product} loading={false} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
};

export default FavouritesMain;
