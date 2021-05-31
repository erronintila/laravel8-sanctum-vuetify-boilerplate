import Vue from "vue";
import VueRouter from "vue-router";
import auth_routes from "./auth";
import pages_routes from "./pages";

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [...auth_routes, ...pages_routes]
});

export default router;