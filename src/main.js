import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { projectAuth } from "@/firebase/config";
import './registerServiceWorker'

let app;
// We did this so that when a user is logged in and they refresh they won't be redirected
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
