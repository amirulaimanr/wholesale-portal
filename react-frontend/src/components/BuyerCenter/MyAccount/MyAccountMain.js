import React from "react";
import { Button } from "primereact/button";
import "../Style/BuyerMain.css";
import { Avatar } from "primereact/avatar";

const MyAccountMain = () => {
    return (
        <>
            <section className="content-main bc-home-screen">
                {/* <div className="content-header">
                    <h2 className="content-title"> Dashboard </h2>
                </div> */}
                <div className="contact-account-container card w-full ">
                    <div className="user-card-header w-full">
                        <h4 className="font-semibold">Contact Info</h4>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="avatar-container flex flex-column mt-6">
                            <Avatar icon="pi pi-user" className="avatar-img-acc" size="xlarge" />
                            <div className="mt-4 m-auto">
                                <h5>Mr Am Ai</h5>
                            </div>
                        </div>
                        <div className="profile-home-container flex flex-column">
                            <div className="profile-home-content">
                                <div className="flex flex-row mt-3">
                                    <div className="w-4 text-l">
                                        <i className="fas fa-envelope w-2rem" style={{ fontSize: "15px" }} />
                                        Email:
                                    </div>
                                    <div className="profile-acc-email mb-4">amirulaiman@gmail.com</div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-4 text-l">
                                        <i className="fas fa-mobile-alt w-2rem" style={{ fontSize: "15px" }} />
                                        Phone:
                                    </div>
                                    <div className="profile-acc-pn mb-4">01123458679</div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-4 text-l">
                                        <i className="fas fa-building w-2rem" style={{ fontSize: "15px" }} />
                                        Office Address:
                                    </div>
                                    <div className="profile-acc-address mb-4">Malaysia</div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-4 text-l">
                                        <i className="fas fa-globe w-2rem" style={{ fontSize: "15px" }} />
                                        Company Website:
                                    </div>
                                    <div className="profile-acc-website mb-4">aar.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-account-container card w-full mt-6">
                    <div className="user-card-header w-full">
                        <h4 className="font-semibold">Company Info</h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyAccountMain;
