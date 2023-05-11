import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../Style/BuyerMain.css";
import { Password } from "primereact/password";

const SettingsMain = () => {
    const [formValues, setFormValues] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    const handleForgotPassword = () => {
        // Handle forgot password here
    };

    return (
        <>
            <section className="content-main bc-home-screen">
                {/* <div className="content-header">
            <h2 className="content-title"> Dashboard </h2>
          </div> */}
                <div className="contact-account-container h-full card w-full ">
                    <div className="user-card-header  w-full">
                        <h4 className="font-semibold">Security Settings</h4>
                    </div>
                    <form onSubmit={handleSubmit} className="p-fluid">
                        <div className="p-field mt-5">
                            <label htmlFor="currentPassword" className="w-2">
                                Current Password<span style={{ color: "red" }}>*</span>
                            </label>
                            <div className="flex flex-row">
                                <Password id="currentPassword" className="mt-2 w-6" name="currentPassword" type="password" value={formValues.currentPassword} onChange={handleInputChange} toggleMask feedback={false} />
                                <Button label="Forgot Password?" onClick={handleForgotPassword} className="p-button-secondary w-2 ml-4 mt-2" />
                            </div>
                        </div>
                        <div className="p-field mt-5">
                            <label htmlFor="newPassword" className="w-2">
                                New Password<span style={{ color: "red" }}>*</span>
                            </label>
                            <Password id="newPassword" className="mt-2 w-6" name="newPassword" type="password" value={formValues.newPassword} onChange={handleInputChange} toggleMask />
                        </div>
                        <div className="p-field mt-5">
                            <label htmlFor="confirmNewPassword" className="w-2">
                                Confirm New Password<span style={{ color: "red" }}>*</span>
                            </label>
                            <Password id="confirmNewPassword" className="mt-2 w-6" name="confirmNewPassword" type="password" value={formValues.confirmNewPassword} onChange={handleInputChange} toggleMask />
                        </div>
                        <div className="p-mt-4 mt-5">
                            <Button label="Save Changes" type="submit" className="p-button-success w-3" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default SettingsMain;
