import React, { useState } from "react";
import "../Style/BuyerMain.css";
import { Button } from "primereact/button";
import Products from "../../Products/Products";

const FavouritesMain = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 10.99,
            unit: "pieces",
            isFavourite: true,
            image: "https://via.placeholder.com/150x150",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: 15.99,
            unit: "pieces",
            isFavourite: false,
            image: "https://via.placeholder.com/150x150",
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description 3",
            price: 20.99,
            unit: "pieces",
            isFavourite: true,
            image: "https://via.placeholder.com/150x150",
        },
        {
            id: 4,
            name: "Product 4",
            description: "Description 4",
            price: 25.99,
            unit: "pieces",
            isFavourite: true,
            image: "https://via.placeholder.com/150x150",
        },
    ]);

    const handleRemoveFromFavourites = () => {
        setProducts(
            products.map((product) => {
                if (selectedProducts.includes(product)) {
                    return {
                        ...product,
                        isFavourite: false,
                    };
                }
                return product;
            })
        );
        setSelectedProducts([]);
    };

    const handleSelectProduct = (product) => {
        if (selectedProducts.includes(product)) {
            setSelectedProducts(selectedProducts.filter((p) => p !== product));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const favouriteProducts = products.filter((product) => product.isFavourite);

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
                    {favouriteProducts.map((product) => (
                        <div key={product.id} className="p-col-12 p-md-6 p-lg-4 p-xl-3">
                            <div className="card mr-5 ml-2 w-10">
                                <div className="p-field-checkbox">
                                    <input type="checkbox" checked={selectedProducts.includes(product)} onChange={() => handleSelectProduct(product)} style={{ transform: "scale(1.5)" }} />
                                </div>
                                <Products product={product} loading={false} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FavouritesMain;
