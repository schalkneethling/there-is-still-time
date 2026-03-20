import "./style.css";
import "./components/time-dashboard-app.js";
import { registerSW } from "virtual:pwa-register";

const mount = document.querySelector("#app");
if (mount) {
  mount.innerHTML = "<time-dashboard-app></time-dashboard-app>";
}

registerSW({ immediate: true });
