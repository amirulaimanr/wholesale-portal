import React, { useState, useEffect } from "react";
import { Checkbox } from "primereact/checkbox";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import client from "../../services/restClient";
import { useParams, useHistory } from "react-router-dom";

const CategoriesFilter = ({ applyFilters }) => {
    const history = useHistory();

    const [rto, setRto] = useState(false);
    const [minOrderQuantity, setMinOrderQuantity] = useState("");
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [subCategory, setSubCategory] = useState(null);
    const [subCategoryOptions, setSubCategoryOptions] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const fetchSubCategoryOptions = async () => {
            try {
                const data = await client.service("product").find({ query: { category } });
                const subCategories = new Set();
                data.data.forEach((product) => {
                    subCategories.add(product.subCategory);
                });
                const options = Array.from(subCategories).map((subCategory) => ({
                    label: subCategory
                        .split(" ")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" "),
                    value: subCategory,
                }));
                setSubCategoryOptions(options);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSubCategoryOptions();
    }, [category]);

    const onApplyFilters = () => {
        applyFilters({ rto, minOrderQuantity, priceRange, subCategory });
        console.log("minOrder", minOrderQuantity);
        console.log("this is applyFilter", applyFilters({ rto, minOrderQuantity, priceRange, subCategory }));
    };

    const onClearFilters = () => {
        setRto(false);
        setMinOrderQuantity(" ");
        setPriceRange([0, 5000]);
        setSubCategory(null);
    };

    return (
        <aside className="navbar-aside pt-8 z-0" id="offcanvas-aside">
            <div className="p-3 mb-4">
                <div className="empty-box" />
                <Button label="Back" icon="fas fa-chevron-left" className="mt-3 mr-2 w-8rem h-2rem mb-5" onClick={() => history.push("/")} />
                {/* <h6 className="card-header text-white border-round mb-3 " style={{ backgroundColor: "#e28743" }}>
                    Product's Filters
                </h6> */}
                <div className="card-body">
                    <div className="mb-3 flex">
                        <h6 className="mt-1">Ready to order :</h6>
                        <Checkbox inputId="rto-checkbox" checked={rto} onChange={(e) => setRto(e.checked)} className="ml-3" />
                    </div>
                    <div className="mb-4">
                        <h6>Minimum order quantity:</h6>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-cube"></i>
                            </span>

                            <InputNumber
                                inputId="minmax-buttons"
                                value={minOrderQuantity}
                                onChange={(e) => {
                                    setMinOrderQuantity(e.value);
                                    console.log("setMin", e.value);
                                }}
                                mode="decimal"
                                showButtons
                                min={0}
                                max={1000}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <h6>Price range:</h6>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fas fa-dollar-sign w-1rem"></i>
                            </span>
                            <InputText value={priceRange} onChange={(e) => setPriceRange(e.value)} className="w-full pl-5 border-noround" />
                        </div>
                        <Slider range value={priceRange} onChange={(e) => setPriceRange(e.value)} style={{ width: "100%" }} tooltipVisible tooltipFormat={(e) => `$${e.value}`} min={0} max={5000} className="mt-5" />
                    </div>
                    <div className="mb-6">
                        <h6>SubCategory:</h6>
                        <Dropdown
                            options={subCategoryOptions}
                            value={subCategory}
                            onChange={(e) => {
                                setSubCategory(e.value);
                                console.log("Selected subCategory:", e.value);
                            }}
                            placeholder="Select a subcategory"
                            className="w-13rem"
                        />
                    </div>
                    <div>
                        <Button label="Apply" icon="pi pi-filter" className="mb-4 mr-2 w-full" onClick={onApplyFilters} />
                        <Button label="Clear" icon="pi pi-times" className="mb-4 mr-2 w-full" onClick={onClearFilters} />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default CategoriesFilter;
