import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Total</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Date</th>
                    <th>Status</th>
                    <th scope="col" className="text-end">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b>Women Red Heels Sandal</b>
                    </td>
                    <td>buyer@example.com</td>
                    <td>$45,789</td>
                    <td>
                        <span className="badge rounded-pill alert-success">Paid at Today 23:56 AM</span>
                    </td>
                    <td>Dec 12 2022</td>
                    <td>
                        <span className="badge btn-success">Delivered</span>
                    </td>
                    <td className="d-flex justify-content-end align-item-center">
                        <Link to={`/orders`} className="text-success">
                            <i className="fas fa-eye"></i>
                        </Link>
                    </td>
                </tr>
                {/* Not paid not delivered */}
                <tr>
                    <td>
                        <b>Velcro Sneakers for Boys</b>
                    </td>
                    <td>buyer@example.com</td>
                    <td>$45,789</td>
                    <td>
                        <span className="badge rounded-pill alert-danger">Not paid</span>
                    </td>
                    <td>Dec 12 2022</td>
                    <td>
                        <span className="badge btn-dark">Not Delivered</span>
                    </td>
                    <td className="d-flex justify-content-end align-item-center">
                        <Link to={`/orders`} className="text-success">
                            <i className="fas fa-eye"></i>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Orders;
