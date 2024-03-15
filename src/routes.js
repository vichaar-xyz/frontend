
import Communidad from "./containers/Communidad";
import Contraverse from "./containers/Contraverse";
import HomePage from "./containers/Homepage";
import Lens from "./containers/Lens";
import Odyssey from "./containers/Odyssey";
import data from "./assets/Data.json"

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
        element: <Lens props={data}/>,
    },
]
export default routes;