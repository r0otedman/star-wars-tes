import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import "./index.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
