import "../scss/main.scss";
import "animate.css";
import AOS from "aos"; // You can also use <link> for styles
// ..
import("./components/hero")
  .then(import("./components/main-sec2"))
  .then(import("./components/footer"))
  .then(import("aos/dist/aos.css"));

AOS.init();
