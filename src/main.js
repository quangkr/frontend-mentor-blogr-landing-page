import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "modern-normalize/modern-normalize.css";
import "@fontsource/overpass/300.css";
import "@fontsource/overpass/300-italic.css";
import "@fontsource/overpass/600.css";
import "@fontsource/overpass/600-italic.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/400-italic.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/500-italic.css";
import "@fontsource/ubuntu/700.css";
import "@fontsource/ubuntu/700-italic.css";

createApp(App).use(router).mount("#app");
