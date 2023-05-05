import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddProductsMain = () => {
    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        category: "",
        subCategory: "",
        price: "",
        quantity: "",
        productImg: "",
        minOrderQuantity: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3030/products", formData);
            // Clear form data after successful submission
            setFormData({
                productName: "",
                description: "",
                category: "",
                subCategory: "",
                price: "",
                quantity: "",
                productImg: "",
                minOrderQuantity: "",
            });
            alert("Product added successfully!");
        } catch (error) {
            console.log(error);
            alert("Failed to add product!");
        }
    };

    // function to update the form data state when any of the input fields are changed:

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.proudctName]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.files[0] });
    };

    return (
        <>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="content-header">
                        <Link to="/supplier-products" className="btn btn-danger text-white">
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
                                        <input type="text" placeholder="Type here" className="form-control" id="product_title" value={formData.productName} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Price
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" value={formData.price} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_quantity" className="form-label">
                                            Quantity
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_quantity" value={formData.quantity} onChange={handleChange} required />
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
                                        <textarea placeholder="Type here" className="form-control" id="product_description" rows="7" value={formData.description} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_category" className="form-label">
                                            Category
                                        </label>
                                        <select className="form-select" id="product_category" value={formData.category} onChange={handleChange} required>
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
                                        <select className="form-select" id="product_subcategory" value={formData.subCategory} onChange={handleChange} required>
                                            <option value="">Select subcategory</option>
                                            <option value="laptops">Laptops</option>
                                            <option value="smartphones">Smartphones</option>
                                            <option value="tablets">Tablets</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_minorder" className="form-label">
                                            Minimum order quantity
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_minorder" name="minOrderQuantity" value={formData.minOrderQuantity} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Images</label>
                                        <input placeholder="Enter image url" type="text" className="form-control" />
                                        <input className="form-control mt-3" type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png" />
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

export default AddProductsMain;
