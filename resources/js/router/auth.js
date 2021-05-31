const auth_routes = [
    {
        path: "/login",
        component: () => import("../pages/auth/Login"),
        name: "login"
    },
    {
        path: "/register",
        component: () => import("../pages/auth/Register"),
        name: "register"
    }
];

export default auth_routes;
