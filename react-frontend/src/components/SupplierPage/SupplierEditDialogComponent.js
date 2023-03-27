
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

const SupplierCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    const onSave = async () => {
        let _data = {
            companyName: _entity.companyName,
            contactName: _entity.contactName,
            email: _entity.email,
            phoneNo: _entity.phoneNo,
            address: _entity.address,
            city: _entity.city,
            state: _entity.state,
            postalcode: _entity.postalcode,
            country: _entity.country,
            minimumOrderQty: _entity.minimumOrderQty,
            username: _entity.username,
            password: _entity.password,
            confirmPassword: _entity.confirmPassword

        };

        setLoading(true);
        try {
            const result = await client.service("supplier").patch(_entity._id, _data);
            props.onHide();
            props.alert({ type: "success", title: "Edit info", message: "Info updated successfully" });
            props.onEditResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
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
        <Dialog header="Edit Info" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="supplier-edit-dialog-component">
                <div>
                    <p className="m-0" >Company Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.companyName} onChange={(e) => setValByKey("companyName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Contact Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.contactName} onChange={(e) => setValByKey("contactName", e.target.value)}  />
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
                    <p className="m-0" >Zip/Postal Code:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.postalcode} onChange={(e) => setValByKey("postalcode", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Country:</p>
                    <InputText className="w-full mb-3" value={_entity?.country} onChange={(e) => setValByKey("country", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Minimum Order Quantity:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.minimumOrderQty} onChange={(e) => setValByKey("minimumOrderQty", e.target.value)}  />
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

export default connect(null, mapDispatch)(SupplierCreateDialogComponent);
// createDialog_code.template
