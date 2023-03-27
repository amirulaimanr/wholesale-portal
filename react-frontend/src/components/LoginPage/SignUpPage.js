import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";

// import { deviceDetect } from "react-device-detect";
const SignUpPage = (props) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState(null);

    // error
    const [countryError, setCountryError] = useState({});
    const [roleError, setRoleError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [companyNameError, setCompanyNameError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    const [maskPassword, setMaskPassword] = useState(true);
    const [maskConfirmPassword, setMaskConfirmPassword] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(false);

    const history = useHistory();

    // dropdown country

    const countries = [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: "18px" }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: "18px" }} />
                <div>{option.name}</div>
            </div>
        );
    };

    // end of dropdown

    useEffect(() => {
        if (props.isLoggedIn === true) history.push("/user/studio");
    }, [props.isLoggedIn]);

    useEffect(() => {
        setPasswordMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    const onEnter = (e) => {
        if (e.key === "Enter") signup();
    };

    const signup = () => {
        if (validate()) {
            if (!passwordMatch) {
                setConfirmPasswordError("Passwords do not match");
                return;
            }
            // handle form submission
            props.createUser({ selectedCountry, role, name, email, companyName, phoneNo, password }).then((res) => {
                history.push("/login");
            });
        }
    };

    const validate = () => {
        let isValid = true;
        let re = /\S+@\S+\.\S+/;

        let errors = {};
        if (!selectedCountry) {
            errors.country = "Please select a country";
        }
        setCountryError(errors);

        if (!role) {
            setRoleError("Please select a trades role");
            isValid = false;
        }
        if (!re.test(email)) {
            setEmailError("Please Enter a valid email");
            isValid = false;
        }
        if (!name.length) {
            setNameError("Name is required");
            isValid = false;
        } else if (name.length < 3) {
            setNameError("Must be at least 3 characters long");
            isValid = false;
        }
        if (!companyName.length) {
            setCompanyNameError("Company name is required");
            isValid = false;
        }
        if (!phoneNo.length) {
            setPhoneError("Phone number is required");
            isValid = false;
        }
        if (!password.length) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Must be at least 6 characters long and have at least one letter, digit, uppercase, lowercase and symbol");
            isValid = false;
        }

        return isValid;
    };

    const renderPasswordPolicyErrors = () => {
        const { passwordPolicyErrors } = props;
        if (!(Array.isArray(passwordPolicyErrors) && passwordPolicyErrors.length)) return null;
        return passwordPolicyErrors.map((message, i) => {
            return (
                <p className="m-0" key={"pass-policy-" + i}>
                    <small className="p-error">{message}</small>
                </p>
            );
        });
    };

    return (
        <div className="grid p-fluid flex flex-column align-items-center align-content-center h-screen">
            <div className="col-12 lg:col-5 px-6">
                <div className="card">
                    <div>
                        <p>
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                    <div style={{ height: "20px" }} />
                    <div className="flex flex-column align-items-center">
                        <h4>Sign Up</h4>

                        {/* country field */}
                        <div className="col-12 lg:col-8">
                            <p className="m-0">Country</p>
                            <div className="flex justify-content-center">
                                <Dropdown
                                    value={selectedCountry}
                                    onChange={(e) => {
                                        setSelectedCountry(e.value);
                                    }}
                                    options={countries}
                                    optionLabel="name"
                                    placeholder="Select a Country"
                                    filter
                                    valueTemplate={selectedCountryTemplate}
                                    itemTemplate={countryOptionTemplate}
                                    className="w-full md:w-full"
                                />
                            </div>
                            <small className="p-error">{countryError.country}</small>
                        </div>

                        {/* radio button */}
                        <div className="col-12 lg:col-8 mt-3">
                            <p className="m-0">Please select trades role:</p>
                            <div className="flex mt-3 mb-3">
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex align-items-center">
                                        <RadioButton
                                            inputId="role1"
                                            name="buyer"
                                            value="Buyer"
                                            onChange={(e) => {
                                                setRole(e.value);
                                                console.log(e.value);
                                                setRoleError(null);
                                            }}
                                            checked={role === "Buyer"}
                                        />

                                        <label htmlFor="role1" className="ml-2">
                                            Buyer
                                        </label>
                                    </div>

                                    <div className="flex align-items-center ml-5">
                                        <RadioButton
                                            inputId="role2"
                                            name="supplier"
                                            value="Supplier"
                                            onChange={(e) => {
                                                console.log(e.value);
                                                setRole(e.value);
                                                setRoleError(null);
                                            }}
                                            checked={role === "Supplier"}
                                        />
                                        <label htmlFor="role2" className="ml-2">
                                            Supplier
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <small className="p-error">{roleError}</small>
                        </div>

                        {/* name field */}
                        <div className="col-12 lg:col-8">
                            <p className="m-0">Name</p>
                            <InputText
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError(null);
                                }}
                                className={nameError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{nameError}</small>
                        </div>
                        <div className="col-12 lg:col-8">
                            <p className="m-0">Email</p>
                            <InputText
                                type="text"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError(null);
                                }}
                                className={emailError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{emailError}</small>
                        </div>

                        {/* Company name */}
                        <div className="col-12 lg:col-8">
                            <p className="m-0">Company Name</p>
                            <InputText
                                type="text"
                                placeholder="Enter company name"
                                value={companyName}
                                onChange={(e) => {
                                    setCompanyName(e.target.value);
                                    setCompanyNameError(null);
                                }}
                                className={companyNameError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{companyNameError}</small>
                        </div>

                        {/* Phone Number */}
                        <div className="col-12 lg:col-8">
                            <p className="m-0">Phone Number</p>
                            <InputText
                                type="text"
                                placeholder="Enter phone number"
                                value={phoneNo}
                                onChange={(e) => {
                                    setPhoneNo(e.target.value);
                                    setPhoneError(null);
                                }}
                                className={nameError ? "p-invalid" : ""}
                                onKeyDown={onEnter}
                            ></InputText>
                            <small className="p-error">{phoneError}</small>
                        </div>

                        <div className="col-12 lg:col-8">
                            <p className="m-0">Password</p>
                            <span className="p-input-icon-right">
                                <i className={`pi ${maskPassword ? "pi-eye" : "pi-eye-slash"} cursor-pointer`} onClick={() => setMaskPassword(!maskPassword)} title={`${maskPassword ? "Show" : "Hide"} password`} />
                                <InputText
                                    type={maskPassword ? "password" : "text"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError(null);
                                    }}
                                    className={passwordError ? "p-invalid" : ""}
                                    onKeyDown={onEnter}
                                ></InputText>
                            </span>
                            <small className="p-error">{passwordError}</small>
                            {renderPasswordPolicyErrors()}
                        </div>

                        {/* confirm password */}
                        <div className="col-12 lg:col-8">
                            <p className="m-0">Confirm Password</p>
                            <span className="p-input-icon-right">
                                <i className={`pi ${maskConfirmPassword ? "pi-eye" : "pi-eye-slash"} cursor-pointer`} onClick={() => setMaskConfirmPassword(!maskConfirmPassword)} title={`${maskConfirmPassword ? "Show" : "Hide"} password`} />
                                <InputText
                                    type={maskConfirmPassword ? "password" : "text"}
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        setConfirmPasswordError(null);
                                    }}
                                    className={confirmPasswordError ? "p-invalid" : ""}
                                    onKeyDown={onEnter}
                                ></InputText>
                            </span>
                            <small className="p-error">{confirmPasswordError}</small>
                        </div>
                    </div>
                    <div className="flex justify-content-center mt-3">
                        <div className="col-6 lg:col-6">
                            <Button label="Sign Up" className="p-button-raised" onClick={signup}></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "100px" }} />
        </div>
    );
};

const mapState = (state) => {
    const { isLoggedIn, passwordPolicyErrors } = state.auth;
    return { isLoggedIn, passwordPolicyErrors };
};
const mapDispatch = (dispatch) => ({
    createUser: (data) => dispatch.auth.createUser(data),
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SignUpPage);
