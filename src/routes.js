
import Communidad from "./containers/Communidad";
import Contraverse from "./containers/Contraverse";
import HomePage from "./containers/Homepage";
import Lens from "./containers/Lens";
import Odyssey from "./containers/Odyssey";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/odyssey",
        element: <Odyssey />,
    },
    {
        path: "/contraverse",
        element: <Contraverse />,
    },
    {
        path: "/communidad",
        element: <Communidad />,
    },
    {
        path: "/lens",
        element: <Lens />,
    },
]
export default routes;