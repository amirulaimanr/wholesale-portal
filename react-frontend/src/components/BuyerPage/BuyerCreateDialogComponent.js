
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const BuyerCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            buyerId: _entity.buyerId,
            name: _entity.name,
            email: _entity.email,
            phoneNo: _entity.phoneNo,
            address: _entity.address,
            city: _entity.city,
            state: _entity.state,
            postalcode: _entity.postalcode,
            country: _entity.country,
            companyName: _entity.companyName,
            companyType: _entity.companyType,
            username: _entity.username,
            password: _entity.password,
            confirmPassword: _entity.confirmPassword

        };

        setLoading(true);
        try {
            const result = await client.service("buyer").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="buyer-create-dialog-component">
                <div>
                    <p className="m-0" >buyerId:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.buyerId} onChange={(e) => setValByKey("buyerId", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Email:</p>
                    <InputText className="w-full mb-3" value={_entity?.email} onChange={(e) => setValByKey("email", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Phone Number:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.phoneNo} onChange={(e) => setValByKey("phoneNo", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Address:</p>
                    <InputText className="w-full mb-3" value={_entity?.address} onChange={(e) => setValByKey("address", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >City:</p>
                    <InputText className="w-full mb-3" value={_entity?.city} onChange={(e) => setValByKey("city", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >State:</p>
                    <InputText className="w-full mb-3" value={_entity?.state} onChange={(e) => setValByKey("state", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Zip/Postal code:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.postalcode} onChange={(e) => setValByKey("postalcode", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Country:</p>
                    <InputText className="w-full mb-3" value={_entity?.country} onChange={(e) => setValByKey("country", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Company Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.companyName} onChange={(e) => setValByKey("companyName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Company Type:</p>
                    <InputText className="w-full mb-3" value={_entity?.companyType} onChange={(e) => setValByKey("companyType", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Username:</p>
                    <InputText className="w-full mb-3" value={_entity?.username} onChange={(e) => setValByKey("username", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Password:</p>
                    <InputText className="w-full mb-3" value={_entity?.password} onChange={(e) => setValByKey("password", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Confirm Password:</p>
                    <InputText className="w-full mb-3" value={_entity?.confirmPassword} onChange={(e) => setValByKey("confirmPassword", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(BuyerCreateDialogComponent);
// createDialog_code.template
