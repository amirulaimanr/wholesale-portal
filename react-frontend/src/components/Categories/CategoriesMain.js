// CategoriesMain.js

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../Products/Products";
import CategoriesFilter from "./CategoriesFilter";
import { Paginator } from "primereact/paginator";
import client from "../../services/restClient";
import Skeleton from "react-loading-skeleton";

const CategoriesMain = ({ match }) => {
    const category = match.params.category;
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(12);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        window.scrollTo(0, 0);
    };

    const dispatch = useDispatch();

    const { productList, loading } = useSelector((state) => state.productsModel);
    console.log("productList:", productList);

    // useEffect(() => {
    //     dispatch.productsModel.fetchProducts(category);
    // }, [dispatch, category]);

    const [products, setProducts] = useState([]);

    const [filters, setFilters] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // setLoading(true);
                const res = await client.service("product").find({ query: { category } });
                console.log("res", res.data);
                setProducts(res.data);
                // setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [category]);

    const applyFilters = (newFilters) => {
        console.log("applyFIlter", newFilters);
        setFilters(newFilters);
        console.log("this setFilter", setFilters(newFilters));
    };

    const filteredProducts = products.filter((product) => {
        console.log(product.length);
        let pass = true;
        if (filters.rto && !product.rto) {
            pass = false;
        }
        if (filters.minOrderQuantity !== "" && product.minOrderQuantity < parseInt(filters.minOrderQuantity)) {
            pass = false;
        } else if (filters.minOrderQuantity === "" && product.minOrderQuantity < parseInt(filters.minOrderQuantity)) {
            pass = false;
        }
        if (filters.priceRange && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) {
            pass = false;
        }
        if (filters.subCategory && product.subCategory !== filters.subCategory) {
            pass = false;
        }
        return pass;
    });

    console.log(filteredProducts.length);
    const productsToDisplay = filteredProducts;
    console.log(productsToDisplay.length);

    return (
        <>
            <CategoriesFilter applyFilters={applyFilters} />
            <main className="main-wrap pl-4" style={{ minHeight: "800px" }}>
                <div className="text-orange-600 font-bold pl-4">
                    <h2>{match.params.category.replace(/_/g, " ").charAt(0).toUpperCase() + match.params.category.slice(1).replace(/_/g, " ")}</h2>
                </div>
                <div className="card-body">
                    {loading ? (
                        <div style={{ marginRight: "20px" }}>
                            <Skeleton height={400} width={240} />
                        </div>
                    ) : (
                        <div className="prod-row">
                            {/* Products */}
                            {productsToDisplay.length > 0 ? (
                                productsToDisplay.slice(first, first + rows).map((product) => {
                                    console.log(productsToDisplay.length);
                                    return <Products key={product._id} product={product} />;
                                })
                            ) : (
                                <div className="text-center"></div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <div className="paginator-bar">
                <div className="paginator-card">
                    <Paginator first={first} rows={rows} totalRecords={productsToDisplay.length} rowsPerPageOptions={[12, 24, 38]} onPageChange={onPageChange} />
                </div>
            </div>
        </>
    );
};

export default CategoriesMain;
