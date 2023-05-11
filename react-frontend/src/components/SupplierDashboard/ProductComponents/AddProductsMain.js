import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToggleButton } from "primereact/togglebutton";
import client from "../../../services/restClient";
import { connect } from "react-redux";

const AddProductsMain = (props) => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get the supplier ID from the backend
        let supplier;
        const userId = localStorage.getItem("userId");
        try {
            supplier = await client.service("supplier").find({
                query: {
                    userId: userId,
                },
            });
        } catch (error) {
            console.error(error);
        }

        const formDataWithSupplierId = { ...formData, supplierId: supplier.data[0]._id, rto: formData.rto ? true : false, smallOrder: formData.smallOrder ? true : false };

        // Validate form fields before submission
        const errors = {};
        if (!formData.name) {
            errors.name = "Product name is required.";
        }
        // if (!formData.rto) {
        //     errors.rto = "RTO is required to choose.";
        // }
        // if (!formData.smallOrder) {
        //     errors.smallOrder = "Small Order is required to choose.";
        // }
        if (!formData.brand) {
            errors.brand = "Product brand is required.";
        }
        if (!formData.model) {
            errors.model = "Product model is required.";
        }
        if (!formData.origin) {
            errors.origin = "Product origin is required.";
        }
        if (!formData.unit) {
            errors.unit = "Product unit is required.";
        }
        if (!formData.price) {
            errors.price = "Price is required.";
        } else if (isNaN(formData.price)) {
            errors.price = "Price must be a number.";
        }
        if (!formData.qty) {
            errors.qty = "Quantity is required.";
        } else if (isNaN(formData.qty)) {
            errors.qty = "Quantity must be a number.";
        }
        if (!formData.description) {
            errors.description = "Description is required.";
        }
        if (!formData.category) {
            errors.category = "Category is required.";
        }
        if (!formData.subCategory) {
            errors.subCategory = "Subcategory is required.";
        }
        if (!formData.minOrderQuantity) {
            errors.minOrderQuantity = "Minimum order quantity is required.";
        } else if (isNaN(formData.minOrderQuantity)) {
            errors.minOrderQuantity = "Minimum order quantity must be a number.";
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            await axios.post("http://localhost:3030/product", formDataWithSupplierId);
            // Clear form data after successful submission
            setFormData({
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
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
        } catch (error) {
            console.log(error);
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
    };

    // function to update the form data state when any of the input fields are changed:

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
                        <h2 className="content-title">Add product</h2>
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
                                        <input type="text" placeholder="Type here" className="form-control" id="product_title" value={formData.name} onChange={handleChange} name="name" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_brand" className="form-label">
                                            Brand
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_brand" value={formData.brand} onChange={handleChange} name="brand" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_model" className="form-label">
                                            Model
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_model" value={formData.model} onChange={handleChange} name="model" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Price
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" value={formData.price} onChange={handleChange} name="price" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_quantity" className="form-label">
                                            Quantity
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_quantity" value={formData.qty} onChange={handleChange} name="qty" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_unit" className="form-label">
                                            Unit
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_unit" value={formData.unit} onChange={handleChange} name="unit" required />
                                    </div>
                                    {/* <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Count In Stock
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" required />
                                    </div> */}
                                    <div className="mb-4">
                                        <label htmlFor="product_description" className="form-label">
                                            Description
                                        </label>
                                        <textarea placeholder="Type here" className="form-control" id="product_description" rows="7" value={formData.description} onChange={handleChange} name="description" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_category" className="form-label">
                                            Category
                                        </label>
                                        <select className="form-select" id="product_category" value={formData.category} onChange={handleChange} name="category" required>
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
                                        <select className="form-select" id="product_subcategory" value={formData.subCategory} onChange={handleChange} name="subCategory" required>
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
                                        <input type="number" placeholder="Type here" className="form-control" id="product_minorder" name="minOrderQuantity" value={formData.minOrderQuantity} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Images</label>
                                        <input placeholder="Enter image url" type="text" className="form-control" />
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
                                        <input type="text" placeholder="Type here" className="form-control" id="product_origin" value={formData.origin} onChange={handleChange} name="origin" required />
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

export default connect(null, mapDispatch)(AddProductsMain);
