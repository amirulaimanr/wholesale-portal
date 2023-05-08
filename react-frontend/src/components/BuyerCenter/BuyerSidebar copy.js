import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Link from "next/link";

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model = [
        {
            label: "Buyer Center Dashboard",
            icon: "pi pi-fw pi-briefcase",
            to: "/pages",
            items: [
                {
                    label: "Home",
                    icon: "pi pi-fw pi-globe",
                    to: "/landing",
                },
                {
                    label: "Inquiries",
                    icon: "pi pi-fw pi-user",
                    items: [
                        {
                            label: "All",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login",
                        },
                    ],
                },
                {
                    label: "RFQs",
                    icon: "pi pi-fw pi-pencil",
                    to: "/pages/crud",
                    items: [
                        {
                            label: "All",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login",
                        },
                    ],
                },
                {
                    label: "Orders",
                    icon: "pi pi-fw pi-calendar",
                    to: "/pages/timeline",
                    items: [
                        {
                            label: "All Orders",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login",
                        },
                        {
                            label: "My Coupon",
                            icon: "pi pi-fw pi-times-circle",
                            to: "/auth/error",
                        },
                        {
                            label: "My Reviews",
                            icon: "pi pi-fw pi-lock",
                            to: "/auth/access",
                        },
                    ],
                },
                {
                    label: "My Account",
                    icon: "pi pi-fw pi-exclamation-circle",
                    to: "/pages/notfound",
                    items: [
                        {
                            label: "My Favourite",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login",
                        },
                        {
                            label: "User Profile",
                            icon: "pi pi-fw pi-times-circle",
                            to: "/auth/error",
                        },
                    ],
                },
                {
                    label: "Settings",
                    icon: "pi pi-fw pi-circle-off",
                    to: "/pages/empty",
                    items: [
                        {
                            label: "Security Settings",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login",
                        },
                        {
                            label: "Change Password",
                            icon: "pi pi-fw pi-times-circle",
                            to: "/auth/error",
                        },
                        {
                            label: "Notifications",
                            icon: "pi pi-fw pi-lock",
                            to: "/auth/access",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                <Link href="https://blocks.primereact.org" target="_blank" style={{ cursor: "pointer" }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`/layout/images/banner-primeblocks${layoutConfig.colorScheme === "light" ? "" : "-dark"}.png`} />
                </Link>
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
