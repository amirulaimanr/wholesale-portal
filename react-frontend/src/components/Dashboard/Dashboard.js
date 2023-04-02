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
            <div className="grid hot-products-container w-10 mt-4 p-5 justify-content-between h-18rem">
                <div class="col-3 ">
                    <div className="detail-title">Global Sources April 2023 Malaysia Show</div>
                    <div className="detail-desc">Hot products, new trends, more sourcing opportunities</div>
                </div>
                <div class="col-2 hot-col bg-white cursor-pointer">
                    <div className="hot-img">
                        <img src="https://s.globalsources.com/IMAGES/tradeShow/HK/20230110/cec_image.png" alt="" data-v-86497bee="" />
                    </div>
                    <div className="hot-text-container">
                        <div className="hot-text">Consumer Electronics & Components</div>
                    </div>
                </div>
                <div class="col-2 hot-col bg-white cursor-pointer">
                    <div className="hot-img">
                        <img src="https://s.globalsources.com/IMAGES/tradeShow/HK/20230110/cec_image.png" alt="" data-v-86497bee="" />
                    </div>
                    <div className="hot-text-container">
                        <div className="hot-text">Mobile Electronics</div>
                    </div>
                </div>
                <div class="col-2 hot-col bg-white cursor-pointer">
                    <div className="hot-img">
                        <img src="https://s.globalsources.com/IMAGES/tradeShow/HK/20230110/cec_image.png" alt="" data-v-86497bee="" />
                    </div>
                    <div className="hot-text-container">
                        <div className="hot-text">Lifestyle & Fashion</div>
                    </div>
                </div>
                <div class="col-2 hot-col bg-white cursor-pointer">
                    <div className="hot-img">
                        <img src="https://s.globalsources.com/IMAGES/tradeShow/HK/20230110/cec_image.png" alt="" data-v-86497bee="" />
                    </div>
                    <div className="hot-text-container">
                        <div className="hot-text">Home & Kitchen</div>
                    </div>
                </div>
            </div>
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
                            <div className="col-2 hot-col bg-white cursor-pointer tr-item"></div>
                            <div className="col-2 hot-col bg-white cursor-pointer tr-item"></div>
                            <div className="col-2 hot-col bg-white cursor-pointer tr-item"></div>
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
                            <div className="col-2 hot-col bg-white cursor-pointer tr-item"></div>
                            <div className="col-2 hot-col bg-white cursor-pointer tr-item"></div>
                            <div className="col-2 hot-col bg-white cursor-pointer tr-item"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* new product wrapper */}
            <div className="new-prod-wrapper w-10">
                <div className="np-col-wrap">
                    <div className="new-product-text">New Products</div>
                    <div className="col-np-photo bg-white">
                        <img data-v-3dc34b2e="" src="https://s.globalsources.com/IMAGES/website/image/home/np_home.jpg" alt="" class="img" />
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new-prod-wrapper w-10">
                <div className="np-col-wrap">
                    <div className="new-product-text">Ready to Order</div>
                    <div className="col-np-photo bg-white">
                        <img data-v-3dc34b2e="" src="https://s.globalsources.com/IMAGES/website/image/home/rto_home.jpg" alt="" class="img" />
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-np bg-white">
                        <div className="col-np-content">
                            <div className="col-np-image">
                                <img
                                    data-v-6fef611d=""
                                    width="100%"
                                    alt="Flip Flap Insulated Cooler Bag, Made of 70D Nylon, Measuring 17 x 15 x 6 Inches"
                                    class="img"
                                    data-src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    src="https://p.globalsources.com/IMAGES/PDT/S1022804304/Cooler-Bag.jpg"
                                    lazy="loaded"
                                />
                            </div>
                            <div className="product-details-flexbox">
                                <div className="product-name">Stamped Metal Parts OEM Aluminium Deep Drawn Caps</div>
                                <div className="product-price">
                                    <b>US$ 0.01 - 9.99</b> / Piece
                                </div>
                                <div className="product-qty">100 Pieces (MOQ)</div>
                                <div className="product-button">Inquire Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommended-wrapper w-10 bg-white">
                <div className="recommended-container">
                    <div className="recommended-header w-full text-2xl font-bold pt-4 pl-3">Recommended Suppliers</div>
                    <div className="recommended-grid">
                        <div className="card col-recommended">
                            <div className="recommended-company-logo">
                                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104710/1267.png" alt="Girl in a jacket"></img>
                            </div>
                            <div className="recommended-flexbox mt-4">
                                <div className="recommended-company-name text-xl text-center font-medium">Underkingo Garments Manufacturing</div>
                                <div className="recommended-company-type text-center text-sm">Manufacturer</div>
                                <div className="recommended-company-details text-center text-xs">Bussiness Type: Trading Company | No. of employees : 500</div>
                            </div>
                            <div className="recommended-products-img">
                                <ul className="products-item-ul">
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card col-recommended">
                            <div className="recommended-company-logo">
                                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104710/1267.png" alt="Girl in a jacket"></img>
                            </div>
                            <div className="recommended-flexbox mt-4">
                                <div className="recommended-company-name text-xl text-center font-medium">Underkingo Garments Manufacturing</div>
                                <div className="recommended-company-type text-center text-sm">Manufacturer</div>
                                <div className="recommended-company-details text-center text-xs">Bussiness Type: Trading Company | No. of employees : 500</div>
                            </div>
                            <div className="recommended-products-img">
                                <ul className="products-item-ul">
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card col-recommended">
                            <div className="recommended-company-logo">
                                <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104710/1267.png" alt="Girl in a jacket"></img>
                            </div>
                            <div className="recommended-flexbox mt-4">
                                <div className="recommended-company-name text-xl text-center font-medium">Underkingo Garments Manufacturing</div>
                                <div className="recommended-company-type text-center text-sm">Manufacturer</div>
                                <div className="recommended-company-details text-center text-xs">Bussiness Type: Trading Company | No. of employees : 500</div>
                            </div>
                            <div className="recommended-products-img">
                                <ul className="products-item-ul">
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                    <li className="products-item">
                                        <img
                                            data-v-3dc34b2e=""
                                            alt=""
                                            class="img"
                                            data-src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            src="https://p.globalsources.com/IMAGES/PDT/S1167920493/Women-s-yoga-wear-yoga-pants-yoga-tops.jpg"
                                            lazy="loaded"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
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
