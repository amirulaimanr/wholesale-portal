import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import client from "../../../services/restClient";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

const EditProductsMain = (props) => {
    const { productId } = props;
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        unit: "",
        description: "",
        category: "",
        subCategory: "",
        price: "",
        qty: "",
        image: "",
        minOrderQuantity: "",
        rto: "",
        smallOrder: "",
        brand: "",
        model: "",
        origin: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/product/${productId}`);
                setFormData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(`/product/${productId}`, formData);
            props.alert({ type: "success", title: "Updated", message: "Updated successfully" });
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data);
                props.alert({ type: "error", title: "Updated", message: "Failed to updated" });
            }
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        // Clear the error message when the user starts typing again
        if (errors[event.target.name]) {
            setErrors({ ...errors, [event.target.name]: null });
        }
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    };

    return (
        <>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="content-header">
                        <Link to="/supplier-dashboard/supplier-products" className="btn btn-danger text-white">
                            Go to products
                        </Link>
                        <h2 className="content-title">Update Products</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Publish now
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card-main mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" className="form-label">
                                            Product Name
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_title" value={formData.name} onChange={handleChange} name="name" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_brand" className="form-label">
                                            Brand
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_brand" value={formData.brand} onChange={handleChange} name="brand" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_model" className="form-label">
                                            Model
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_model" value={formData.model} onChange={handleChange} name="model" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Price
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" value={formData.price} onChange={handleChange} name="price" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_quantity" className="form-label">
                                            Quantity
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_quantity" value={formData.qty} onChange={handleChange} name="qty" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_unit" className="form-label">
                                            Unit
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_unit" value={formData.unit} onChange={handleChange} name="unit" />
                                    </div>
                                    {/* <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Count In Stock
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" />
                                    </div> */}
                                    <div className="mb-4">
                                        <label htmlFor="product_description" className="form-label">
                                            Description
                                        </label>
                                        <textarea placeholder="Type here" className="form-control" id="product_description" rows="7" value={formData.description} onChange={handleChange} name="description" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_category" className="form-label">
                                            Category
                                        </label>
                                        <select className="form-select" id="product_category" value={formData.category} onChange={handleChange} name="category">
                                            <option value="">Select category</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="fashion">Fashion</option>
                                            <option value="home-garden">Home & Garden</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_subcategory" className="form-label">
                                            Subcategory
                                        </label>
                                        <select className="form-select" id="product_subcategory" value={formData.subCategory} onChange={handleChange} name="subCategory">
                                            <option value="">Select subcategory</option>
                                            <option value="laptops">Laptops</option>
                                            <option value="smartphones">Smartphones</option>
                                            <option value="tablets">Tablets</option>
                                            <option value="photography">Photography</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_minorder" className="form-label">
                                            Minimum order qty
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_minorder" name="minOrderQuantity" value={formData.minOrderQuantity} onChange={handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Images</label>
                                        <input placeholder="Enter image url" type="text" className="form-control" value={formData.image} onChange={handleChange} name="image" />
                                        <input className="form-control mt-3" type="file" onChange={handleFileChange} name="image" accept=".jpg, .jpeg, .png" />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="product_rto" className="form-label">
                                            Ready to Order
                                        </label>
                                        <input type="checkbox" className="form-check-input" id="product_rto" name="rto" checked={formData.rto} onChange={(event) => setFormData({ ...formData, rto: event.target.checked })} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_smallOrder" className="form-label">
                                            Small Order
                                        </label>
                                        <input type="checkbox" className="form-check-input" id="product_smallOrder" name="smallOrder" checked={formData.smallOrder} onChange={(event) => setFormData({ ...formData, smallOrder: event.target.checked })} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_origin" className="form-label">
                                            Origin
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_origin" value={formData.origin} onChange={handleChange} name="origin" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(EditProductsMain);
