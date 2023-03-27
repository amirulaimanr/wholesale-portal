import React from "react";
import { render, screen } from "@testing-library/react";

import SupplierPage from "../SupplierPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders supplier page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SupplierPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("supplier-datatable")).toBeInTheDocument();
    expect(screen.getByRole("supplier-add-button")).toBeInTheDocument();
});
