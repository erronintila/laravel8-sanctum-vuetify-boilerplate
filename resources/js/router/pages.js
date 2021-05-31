const pages_routes = [
    {
        path: "/",
        component: () => import("../pages/Home"),
        name: "home"
    },
    {
        path: "/dashboard",
        component: () => import("../pages/Dashboard"),
        name: "dashboard"
    }
];

export default pages_routes;
