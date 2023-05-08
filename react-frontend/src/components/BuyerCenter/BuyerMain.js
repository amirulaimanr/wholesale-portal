import React from "react";
import { Button } from "primereact/button";
import "./Style/BuyerMain.css";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";

const BuyerMain = () => {
    return (
        <>
            <section className="content-main bc-home-screen">
                {/* <div className="content-header">
                    <h2 className="content-title"> Dashboard </h2>
                </div> */}
                <div className="bc-home-container card w-full flex">
                    <div className="avatar-container flex flex-column">
                        <Avatar icon="pi pi-user" className="avatar-img mr-2" size="xlarge" />
                        <div className="mt-3">Profile completeness:</div>
                    </div>
                    <div className="profile-home-container flex flex-column">
                        <div className="profile-home-content">
                            <div className="profile-home-name mb-4">
                                <h3 className="font-semibold">Am Ai</h3>
                            </div>
                            <div className="profile-home-email mb-2">amirulaiman@gmail.com</div>
                            <div className="profile-home-pn mb-4">01123458679</div>
                            <Link to="/buyer-center/userAccount">
                                <Button className="" label="Edit My Profile" />
                            </Link>
                            <div className="mt-2 text-xs">Complete your personal information so more suppliers can see you and connect with you.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BuyerMain;
