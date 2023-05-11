import React from "react";

const AddProductForm = ({ props }) => {
    return (
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
    );
};

export default AddProductForm;
