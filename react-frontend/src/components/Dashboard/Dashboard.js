import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { MegaMenu } from "primereact/megamenu";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { PhotoService } from "../../services/photoServices";
import { ProductService } from "../../services/productServices";

const Dashboard = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    // vertical dropdown menu

    const items = [
        {
            label: "Consumer Electronics",
            icon: "pi pi-fw pi-video",
            items: [
                [
                    {
                        label: "Video 1",
                        items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
                    },
                    {
                        label: "Video 2",
                        items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
                    },
                ],
                [
                    {
                        label: "Video 3",
                        items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
                    },
                    {
                        label: "Video 4",
                        items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Apparel",
            icon: "pi pi-fw pi-users",
            items: [
                [
                    {
                        label: "User 1",
                        items: [{ label: "User 1.1" }, { label: "User 1.2" }],
                    },
                    {
                        label: "User 2",
                        items: [{ label: "User 2.1" }, { label: "User 2.2" }],
                    },
                ],
                [
                    {
                        label: "User 3",
                        items: [{ label: "User 3.1" }, { label: "User 3.2" }],
                    },
                    {
                        label: "User 4",
                        items: [{ label: "User 4.1" }, { label: "User 4.2" }],
                    },
                ],
                [
                    {
                        label: "User 5",
                        items: [{ label: "User 5.1" }, { label: "User 5.2" }],
                    },
                    {
                        label: "User 6",
                        items: [{ label: "User 6.1" }, { label: "User 6.2" }],
                    },
                ],
            ],
        },
        {
            label: "Vehicle parts",
            icon: "pi pi-fw pi-calendar",
            items: [
                [
                    {
                        label: "Event 1",
                        items: [{ label: "Event 1.1" }, { label: "Event 1.2" }],
                    },
                    {
                        label: "Event 2",
                        items: [{ label: "Event 2.1" }, { label: "Event 2.2" }],
                    },
                ],
                [
                    {
                        label: "Event 3",
                        items: [{ label: "Event 3.1" }, { label: "Event 3.2" }],
                    },
                    {
                        label: "Event 4",
                        items: [{ label: "Event 4.1" }, { label: "Event 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Sports",
            icon: "pi pi-fw pi-cog",
            items: [
                [
                    {
                        label: "Setting 1",
                        items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
                    },
                ],
                [
                    {
                        label: "Technology 4",
                        items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Industrial Machinery",
            icon: "pi pi-fw pi-cog",
            items: [
                [
                    {
                        label: "Setting 1",
                        items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
                    },
                ],
                [
                    {
                        label: "Technology 4",
                        items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Home & Garden",
            icon: "pi pi-fw pi-cog",
            items: [
                [
                    {
                        label: "Setting 1",
                        items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
                    },
                ],
                [
                    {
                        label: "Technology 4",
                        items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "Beauty",
            icon: "pi pi-fw pi-cog",
            items: [
                [
                    {
                        label: "Setting 1",
                        items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
                    },
                ],
                [
                    {
                        label: "Technology 4",
                        items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
                    },
                ],
            ],
        },
        {
            label: "All Categories",
            icon: "pi pi-fw pi-cog",
            items: [
                [
                    {
                        label: "Setting 1",
                        items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
                    },
                ],
                [
                    {
                        label: "Technology 4",
                        items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
                    },
                ],
            ],
        },
    ];

    // autoplay img
    const [images, setImages] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: "991px",
            numVisible: 4,
        },
        {
            breakpoint: "767px",
            numVisible: 3,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
        },
    ];

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%", display: "block" }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: "block" }} />;
    };

    // just for you products

    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState("grid");

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case "INSTOCK":
                return "success";

            case "LOWSTOCK":
                return "warning";

            case "OUTOFSTOCK":
                return "danger";

            default:
                return null;
        }
    };

    const listItem = (product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === "OUTOFSTOCK"}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
                        <div className="text-2xl font-bold">{product.name}</div>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === "OUTOFSTOCK"}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const productsTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === "list") return listItem(product);
        else if (layout === "grid") return gridItem(product);
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="grid w-10 ">
                <div class="left-col col-3 text-center ">
                    <MegaMenu className="lefcol-menu" model={items} orientation="vertical" breakpoint="767px" />
                </div>
                <div class="mid-col col-6 text-center">
                    {/* <div className="card"> */}
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: "640px" }} autoPlay showItemNavigators showItemNavigatorsOnHover item={itemTemplate} showThumbnails={false} circular showIndicators transitionInterval={2000} />
                    {/* </div> */}
                </div>
                <div class="right-col col-3 text-center ">
                    <div className="r-banner-container">
                        <div className="r-banner-content">
                            <div className="text-content">
                                <div className="club-header">
                                    Buyers Club Benefits
                                    <div className="arrow-sysmbol">
                                        <i className="pi pi-arrow-right" style={{ fontSize: "1.5rem" }}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card buyer-content">
                                <div className="buyer-card1"></div>
                            </div>
                            <div className="card buyer-content">
                                <div className="buyer-card2"></div>
                            </div>
                            <div className="club-text">Sign up to enjoy exciting Buyers Club benefits</div>
                            <Button label="Join for free" className="p-button-rounded w-12 mt-3" onClick={() => history.push("/signup")} />
                            <Button label="Sign In" className="p-button-rounded p-button-outlined  w-12 mt-2" onClick={() => history.push("/login")} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid hot-products-container w-10 border-solid border-blue-500 mt-4 p-5 justify-content-between h-18rem">
                <div class="col-3 border-solid border-blue-500"></div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
                <div class="col-2 border-solid border-blue-500">
                    <div className="hot-img">img</div>
                    <div className="hot-text">Consumer Electronics & Components</div>
                </div>
            </div>
            <div className="grid hot-products-container w-10 border-solid border-blue-500 mt-4 p-3 justify-content-between h-25rem">
                <div className="col border-solid border-blue-500 mr-2"></div>
                <div className="col border-solid border-blue-500"></div>
            </div>

            {/* just for you products * */}
            <div className="card">
                <DataView value={products} itemTemplate={productsTemplate} layout={layout} header={header()} />
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
