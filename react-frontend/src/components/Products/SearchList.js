import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { Paginator } from "primereact/paginator";
import CategoriesFilter from "../Categories/CategoriesFilter";

const SearchList = () => {
    const dispatch = useDispatch();
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(12);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");

    const searchProducts = useSelector((state) => state.productsModel.searchProducts);
    console.log("Search Prod", searchProducts);
    const loading = useSelector((state) => state.loadingModel);

    useEffect(() => {
        dispatch.productsModel.getSearchProductsByName(name);
    }, [dispatch, name]);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <CategoriesFilter />
            <main className="main-wrap pl-4">
                <div className="text-orange-600 font-bold pl-4">
                    <h2>Search Results for "{name.replace(/_/g, " ").charAt(0).toUpperCase() + name.slice(1).replace(/_/g, " ")}"</h2>
                </div>
                <div className="card-body">
                    {loading ? (
                        <div className="text-center">
                            <h3>Loading...</h3>
                        </div>
                    ) : (
                        <div className="prod-row">
                            {/* Products */}
                            {searchProducts && searchProducts.data && searchProducts.data.length > 0 ? (
                                searchProducts.data.slice(first, first + rows).map((product) => {
                                    console.log(searchProducts.length);
                                    return <Products key={product._id} product={product} />;
                                })
                            ) : (
                                <div className="text-center mt-4">No search results found</div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <div className="paginator-bar">
                <div className="paginator-card">
                    <Paginator first={first} rows={rows} totalRecords={searchProducts.length} rowsPerPageOptions={[12, 24, 38]} onPageChange={onPageChange} />
                </div>
            </div>
        </>
    );
};

export default SearchList;
