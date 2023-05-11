import React from "react";

const EmptyCart = () => {
    return (
        <div className="page-shopping-no-data">
            <h2 class="page-shopping-title">My Shopping Cart</h2>
            <div class="no-data flex-center">
                <div class="no-data-box">
                    <img src="https://s.globalsources.com/IMAGES/website/image/common/shoppingcart.png" data-v-73bcb051="" />
                    <p class="no-data-tip">Your shopping cart is empty.</p>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;
