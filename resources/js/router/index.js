import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import auth_routes from "./auth";
import pages_routes from "./pages";

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [...auth_routes, ...pages_routes]
});

export default router;

// router.beforeEach((to, from, next) => {
//     if (
//         to.matched.some(record => record.meta.auth) &&
//         !store.getters.authenticated
//     ) {
//         next({ name: "login" });
//     } else if (to.matched.some(record => record.meta.guest)) {
//         next({ name: "home" });
//     } else {
//         next();
//     }
// });

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.auth)) {
//         console.log(store.getters.authenticated);
//         if (!store.getters.authenticated) {
//             next({ name: "login" });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!store.getters.authenticated) {
//             next({ name: "login" });
//         } else {
//             next();
//             // if (to.matched.some(record => record.meta.requiresAdmin)) {
//             //     if (store.getters.admin == 1) {
//             //         next();
//             //     } else {
//             //         next({ name: "home" });
//             //     }
//             // } else {
//             //     next();
//             // }
//         }
//     } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//         if (!store.getters.authenticated) {
//             next();
//         } else {
//             next({ name: "home" });
//             // if (store.getters.admin) {
//             //     next({ name: "dashboard" });
//             // } else {
//             //     next({ name: "home" });
//             // }
//         }
//     } else {
//         next();
//     }
// });
