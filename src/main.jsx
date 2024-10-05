import { createRoot } from "react-dom/client";
import App from "./App";

import "../index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
