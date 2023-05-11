import React, { useState } from "react";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";
import "./Style/ShoppingCart.css";

const ShoppingCartMain = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <main className="cart-container cart-layout-container">{cartItems.length === 0 ? <EmptyCart /> : <FullCart cartItems={cartItems} setCartItems={setCartItems} />}</main>
        </>
    );
};

export default ShoppingCartMain;
