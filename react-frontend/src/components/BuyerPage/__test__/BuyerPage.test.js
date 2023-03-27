import React from "react";
import { render, screen } from "@testing-library/react";

import BuyerPage from "../BuyerPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders buyer page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BuyerPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("buyer-datatable")).toBeInTheDocument();
    expect(screen.getByRole("buyer-add-button")).toBeInTheDocument();
});
