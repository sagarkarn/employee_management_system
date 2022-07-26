import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import store from "./src/store";
import { Provider } from "react-redux";
import SnackbarProvider from "react-simple-snackbar";

function Index() {
    return (
        <React.StrictMode>
            <SnackbarProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </SnackbarProvider>
        </React.StrictMode>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
