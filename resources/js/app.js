require("./bootstrap");

window.Vue = require("vue").default;

import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router/index";
import store from "./store/index";
import vuetify from './vuetify';
import App from "./components/layouts/App";

Vue.use(VueRouter);

store.dispatch("auth/AUTH_USER").then(() => {
    new Vue({
        el: "#app",
        router,
        store,
        vuetify,
        components: { App }
    });
});