import Dashboard from "./containers/Dsahboard";
import HomePage from "./containers/Homepage";

const routes = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/homepage",
        element: <HomePage />,
    },
]
export default routes;