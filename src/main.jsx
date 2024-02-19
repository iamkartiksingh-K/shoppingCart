import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "./contexts/ProductInfo.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
