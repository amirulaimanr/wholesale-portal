import React from "react";
import { Badge } from "primereact/badge";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const FavouritesMenuItem = () => {
    const favourites = useSelector((state) => state.favouritesModel.favourites);

    return (
        <div>
            <Badge value={favourites.length}>
                <i className="pi pi-fw pi-heart" style={{ marginRight: "0.5rem" }} />
                <span style={{ verticalAlign: "middle" }}>Favourites</span>
            </Badge>
        </div>
    );
};

export default FavouritesMenuItem;
