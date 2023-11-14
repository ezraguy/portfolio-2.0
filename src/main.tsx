import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 0,
  duration: 400,
  easing: "ease",
});
window.addEventListener("wheel", () => {
  AOS.refresh();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
