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
import productsData from "../../data/productsData";
import suppliersData from "../../data/suppliersData";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const Dashboard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { productList, id, loading } = useSelector((state) => state.productsModel);

    useEffect(() => {
        dispatch.productsModel.fetchProducts(id);
    }, [dispatch, id]);

    // product filter

    const topRankingProducts = productsData.filter((product) => product.category === "Top Rankings");

    const weeklyDealProducts = productsData.filter((product) => product.category === "Weekly Deals");

    const newProducts = productList.filter((product) => {
        const productDate = new Date(product.createdAt);
        const today = new Date();
        const daysDifference = (today.getTime() - productDate.getTime()) / (1000 * 3600 * 24);
        return daysDifference <= 33330; // Return true for products created within the last 7 days
    });

    const rtoProducts = productList.filter((product) => product.rto);

    // vertical dropdown menu

    const handleMenuItemClick = (category) => {
        history.push(`/products/category/${category}`);
    };

    const items = [
        {
            label: "Consumer Electronics",
            icon: "pi pi-fw pi-video",
            category: "electronics",
        },
        {
            label: "Apparel",
            icon: "pi pi-fw pi-users",
            category: "apparel",
        },
        {
            label: "Vehicle parts",
            icon: "pi pi-fw pi-car",
            category: "vehicle_parts",
        },
        {
            label: "Sports",
            icon: "pi pi-fw pi-bolt",
            category: "sports",
        },
        {
            label: "Industrial Machinery",
            icon: "pi pi-fw pi-building",
            category: "machinery",
        },
        {
            label: "Home & Garden",
            icon: "pi pi-fw pi-home",
            category: "home_garden",
        },
        {
            label: "Beauty",
            icon: "pi pi-fw pi-eye",
            category: "beauty",
        },
        {
            label: "All Categories",
            icon: "pi pi-fw pi-align-justify",
            items: [
                [
                    {
                        items: [
                            { label: "Gift", category: "gift" },
                            { label: "Furniture", category: "furniture" },
                            { label: "Food", category: "food" },
                        ],
                    },
                ],
                [
                    {
                        items: [
                            { label: "Packaging", category: "packaging" },
                            { label: "Printing", category: "printing" },
                            { label: "Pets", category: "pets" },
                        ],
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

    // image banner  slideshow

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ height: "400px", width: "100%", marginTop: "15px", display: "block" }} />;
    };

    // // skeleton loading
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // });

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="grid w-10 ">
                {/* vertical menu */}
                <div className="left-col col-3 text-center ">
                    <MegaMenu
                        className="lefcol-menu"
                        model={items.map((item) => {
                            console.log(item);
                            if (item.items) {
                                return {
                                    ...item,
                                    // items: item.items.map((subitem) => {
                                    //     console.log(subitem);
                                    //     return {
                                    //         ...subitem,
                                    //         items: subitem.items.map((subsubitem) => {
                                    //             console.log(subsubitem);
                                    //             return {
                                    //                 ...subsubitem,
                                    //                 command: () => handleMenuItemClick(subsubitem.category),
                                    //             };
                                    //         }),
                                    //     };
                                    // }),
                                };
                            } else {
                                return { ...item, command: () => handleMenuItemClick(item.category) };
                            }
                        })}
                        orientation="vertical"
                        breakpoint="767px"
                    />
                </div>
                <div className="mid-col col-6 text-center">
                    {/* <div className="card"> */}
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: "640px" }} autoPlay showItemNavigators showItemNavigatorsOnHover item={itemTemplate} showThumbnails={false} circular showIndicators transitionInterval={3000} />
                    {/* </div> */}
                </div>
                <div className="right-col col-3 text-center ">
                    <div className="r-banner-container">
                        <div className="r-banner-content">
                            <div className="text-content">
                                <div className="club-header cursor-pointer">
                                    Buyers Club Benefits
                                    <div className="arrow-sysmbol">
                                        <i className="pi pi-arrow-right" style={{ fontSize: "1.5rem" }}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card buyer-content cursor-pointer">
                                <div className="buyer-card1">
                                    <div className="buyer-card-text">US $10 off with a new supplier</div>
                                    <div className="buyer-card-img">
                                        <img className="benefit-img" src="https://img.alicdn.com/imgextra/i4/O1CN01TJxTjd1m7ufWlgcUQ_!!6000000004908-0-tps-1024-1024.jpg" data-spm-anchor-id="a2700.product_home_l0.buyers_club.i1.2ce267afmmhSup" />
                                    </div>
                                </div>
                            </div>
                            <div className="card buyer-content cursor-pointer">
                                <div className="buyer-card1">
                                    <div className="buyer-card-text">RFQ: quotes with supplier preferences</div>
                                    <div className="buyer-card-img">
                                        <img className="benefit-img" src="https://img.alicdn.com/imgextra/i2/O1CN01ips21L1buUuLEZGW7_!!6000000003525-0-tps-128-128.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="club-text">Sign up to enjoy exciting Buyers Club benefits</div>
                            <Button label="Join for free" className="p-button-rounded w-12 mt-3" onClick={() => history.push("/signup")} />
                            <Button label="Sign In" className="p-button-rounded p-button-outlined  w-12 mt-2" onClick={() => history.push("/login")} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid hot-products-container w-10 mt-4 p-5 justify-content-between h-18rem">
                <div className="col-3 ">
                    <div className="detail-title">Global Sources April 2023 Malaysia Show</div>
                    <div className="detail-desc">Hot products, new trends, more sourcing opportunities</div>
                </div>

                <div className="col-2 hot-col bg-white cursor-pointer">
                    <Link to={"/products/category/electronics"}>
                        <div className="hot-img">
                            <img src="https://s.globalsources.com/IMAGES/tradeShow/HK/20230110/cec_image.png" alt="" data-v-86497bee="" />
                        </div>
                        <div className="hot-text-container">
                            <div className="hot-text">Consumer Electronics & Components</div>
                        </div>
                    </Link>
                </div>
                <div className="col-2 hot-col bg-white cursor-pointer">
                    <Link to={"/products/category/electronics"}>
                        <div className="hot-img">
                            <img src="https://p.globalsources.com/IMAGES/PDT/S1186466235/LCD-screens-for-iPhone-6P.jpg" alt="" data-v-86497bee="" />
                        </div>
                        <div className="hot-text-container">
                            <div className="hot-text">Mobile Electronics</div>
                        </div>
                    </Link>
                </div>

                <div className="col-2 hot-col bg-white cursor-pointer">
                    <Link to={"/products/category/apparel"}>
                        <div className="hot-img">
                            <img src="https://p.globalsources.com/IMAGES/PDT/B1188695749/Amoled-smart-watch.jpg" alt="" data-v-86497bee="" />
                        </div>
                        <div className="hot-text-container">
                            <div className="hot-text">Lifestyle & Fashion</div>
                        </div>
                    </Link>
                </div>
                <div className="col-2 hot-col bg-white cursor-pointer">
                    <Link to={"/products/category/home_garden"}>
                        <div className="hot-img">
                            <img src="https://p.globalsources.com/IMAGES/PDT/B1193171384/Wet-and-Dry-VAC.jpg" alt="" data-v-86497bee="" />
                        </div>
                        <div className="hot-text-container">
                            <div className="hot-text">Home & Kitchen</div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* top ranking products */}

            <div className="grid w-10  mt-4 justify-content-between h-20rem">
                <div className="col top-ranking-container mr-5">
                    <div className="tr-text-container">
                        <div className="tr-text">Top Ranking</div>
                        <div className="tr-text2 cursor-pointer font-medium">
                            See All <i className="pi pi-chevron-right" style={{ fontSize: "0.7rem" }}></i>
                        </div>
                    </div>
                    <div className="tr-content">
                        <div className="grid tr-grid">
                            {topRankingProducts.slice(0, 3).map((product) => (
                                <div className="col-2 hot-col bg-white cursor-pointer tr-item" key={product.id}>
                                    <div className="col-tr-content">
                                        <div className="col-tr-image">
                                            <img data-v-453d7707="" width="100%" alt={product.name} className="img" data-src={product.image} src={product.image} lazy="loaded" />
                                        </div>
                                        <div className="tr-product-details-flexbox">
                                            <div className="tr-product-name">{product.name}</div>
                                            <div className="tr-product-price">
                                                <b>US$ {product.price}</b> / {product.unit}
                                            </div>
                                            <div className="tr-product-qty">{product.qty} Pieces (MOQ)</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col weekly-deals-container">
                    <div className="tr-text-container">
                        <div className="tr-text">Weekly Deals</div>
                        <div className="tr-text2 cursor-pointer font-medium">
                            See All <i className="pi pi-chevron-right" style={{ fontSize: "0.7rem" }}></i>
                        </div>
                    </div>
                    <div className="tr-content">
                        <div className="grid tr-grid">
                            {weeklyDealProducts.slice(0, 3).map((product) => (
                                <div className="col-2 hot-col bg-white cursor-pointer tr-item" key={product.id}>
                                    <div className="col-tr-content">
                                        <div className="col-tr-image">
                                            <img data-v-453d7707="" width="100%" alt={product.name} className="img" data-src={product.image} src={product.image} lazy="loaded" />
                                        </div>
                                        <div className="tr-product-details-flexbox">
                                            <div className="tr-product-name">{product.name}</div>
                                            <div className="tr-product-price">
                                                <b>US$ {product.price}</b> / {product.unit}
                                            </div>
                                            <div className="tr-product-qty">{product.qty} Pieces (MOQ)</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* new product wrapper */}
            <div className="new-prod-wrapper w-10">
                <div className="np-col-wrap">
                    <div className="new-product-text">New Products</div>
                    <div className="col-np-photo bg-white">
                        <img data-v-3dc34b2e="" src="https://s.globalsources.com/IMAGES/website/image/home/np_home.jpg" alt="" className="img" />
                    </div>

                    {newProducts.slice(0, 4).map((product) => (
                        <Link to={`/products/${product.category}/${product._id}`} className="text-900" key={product.id}>
                            <div className="col-np bg-white pl-3 cursor-pointer">
                                <div className="col-np-content">
                                    <div className="col-np-image-h">{loading ? <Skeleton height={200} width={180} /> : <img data-v-6fef611d="" width="100%" alt={product.name} className="img" data-src={product.image} src={product.image} lazy="loaded" />}</div>
                                    <div className="product-details-flexbox-h">
                                        {loading ? (
                                            <>
                                                <div style={{ marginTop: "20px" }}>
                                                    <Skeleton height={20} width={100} />
                                                </div>
                                                <Skeleton height={20} width={60} />
                                                <Skeleton height={20} width={40} />
                                                <Skeleton height={20} width={80} />
                                            </>
                                        ) : (
                                            <>
                                                <div className="product-name">{product.name}</div>
                                                <div className="product-price">
                                                    <b>{product.price}</b> / {product.unit}
                                                </div>
                                                <div className="product-qty-h">{product.qty} (MOQ)</div>
                                                <div className="product-button-h">Inquire Now</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="new-prod-wrapper w-10">
                <div className="np-col-wrap">
                    <div className="new-product-text">Ready to Order</div>
                    <div className="col-np-photo bg-white">
                        <img data-v-3dc34b2e="" src="https://s.globalsources.com/IMAGES/website/image/home/rto_home.jpg" alt="" className="img" />
                    </div>
                    {rtoProducts.slice(0, 4).map((product) => (
                        <Link to={`/products/${product.category}/${product._id}`} className="text-900">
                            <div className="col-np bg-white pl-3 cursor-pointer" key={product.id}>
                                <div className="col-np-content">
                                    <div className="col-np-image-h"> {loading ? <Skeleton height={200} width={180} /> : <img data-v-6fef611d="" width="100%" alt={product.name} className="img" data-src={product.image} src={product.image} lazy="loaded" />}</div>
                                    <div className="product-details-flexbox-h">
                                        {loading ? (
                                            <>
                                                <div style={{ marginTop: "20px" }}>
                                                    <Skeleton height={20} width={100} />
                                                </div>
                                                <Skeleton height={20} width={60} />
                                                <Skeleton height={20} width={40} />
                                                <Skeleton height={20} width={80} />
                                            </>
                                        ) : (
                                            <>
                                                <div className="product-name">{product.name}</div>
                                                <div className="product-price">
                                                    <b>{product.price}</b> / {product.unit}
                                                </div>
                                                <div className="product-qty-h">{product.qty} (MOQ)</div>
                                                <div className="product-button-h">Order Now</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="recommended-wrapper w-10 bg-white">
                <div className="recommended-container">
                    <div className="recommended-header w-full text-2xl font-bold pt-4 pl-3">Recommended Suppliers</div>
                    <div className="recommended-grid">
                        {suppliersData.map((company, index) => (
                            <div className="card col-recommended" key={index}>
                                <div className="recommended-company-logo">
                                    <img src={company.logo} alt={company.name}></img>
                                </div>
                                <div className="recommended-flexbox mt-4">
                                    <div className="recommended-company-name text-xl text-center font-medium">{company.name}</div>
                                    <div className="recommended-company-type text-center text-sm">{company.type}</div>
                                    <div className="recommended-company-details text-center text-xs">
                                        Business Type: {company.businessType} | No. of employees: {company.employees}
                                    </div>
                                </div>
                                <div className="recommended-products-img">
                                    <ul className="products-item-ul">
                                        {company.products.map((product, index) => (
                                            <li className="products-item" key={index}>
                                                <img data-v-3dc34b2e="" alt="" className="img" data-src={product.img} src={product.img} lazy="loaded" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
