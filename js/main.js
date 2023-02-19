import { Header } from "../components/header/header.js";
import { Course } from "../components/course/course.js";
import { Fotter } from "../components/fotter/fotter.js";
import { Button } from "../components/button/button.js";

window.customElements.define("site-header", Header);
window.customElements.define("site-course", Course);
window.customElements.define("site-fotter", Fotter);
window.customElements.define("site-button", Button);