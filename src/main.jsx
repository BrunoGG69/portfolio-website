import ReactDOM from "react-dom/client";
import "./index.css"; // This imports Tailwind CSS globally
import App from "./App"; // The main app file
import { BrowserRouter as Router } from "react-router-dom"; // Only wrap the app here

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Router>
    <App />
  </Router>,
);
