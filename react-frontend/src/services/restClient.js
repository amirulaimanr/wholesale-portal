// sets up a client-side FeathersJS application that communicates with a server using REST APIs, and configures it to use the authentication client and the Axios HTTP client library for network requests

import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";

import auth from "@feathersjs/authentication-client";
import axios from "axios";

if (!process.env.REACT_APP_SERVER_URL) throw `Environmental variable 'REACT_APP_SERVER_URL' is required. Add it to '.env' file. Example: 'REACT_APP_SERVER_URL=http://localhost:3030'.`;
const app = feathers();
const restClient = rest(process.env.REACT_APP_SERVER_URL);

// Setup the transport (Rest, Socket, etc.) here
app.configure(restClient.axios(axios));

// Available options are listed in the "Options" section
app.configure(
    auth({
        storage: window.localStorage,
    })
);

console.log("Rest client configured");
export default app;
