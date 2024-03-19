
import Communidad from "./containers/Communidad";
import Contraverse from "./containers/Contraverse";
import HomePage from "./containers/Homepage";
import Lens from "./containers/Lens";
import Odyssey from "./containers/Odyssey";
import LongPost from "./containers/Odyssey/post";
import Profile from "./containers/Profile";
import Events from "./containers/Communidad/Events";
import Feed from "./containers/Communidad/Feed";
import Communities from "./containers/Communidad/Communities";

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
        path: "/odyssey/:id",
        element: <LongPost />,
    },
    {
        path: "/contraverse",
        element: <Contraverse />,
    },
    // {
    //     path: "/communidad/",
    //     element:<Communidad/>,
    //     children: [
    //         { index: true, },
    //         { path: "/feed", element: <Feed /> },
    //         { path: "/event", element: <Events /> },
    //         { path: "/communities", element: <Communities /> }
    //     ]
    //     // element: <Communidad />,
    // },
    {
        path: "/communidad/",
        element: <Communidad />,
    },
    {
        path: "/communidad/:category",
        element: <Communidad />,
    },
    {
        path: "/events",
        element: <Events/>,
    },
    {
        path: "/feed",
        element: <Feed/>,
    },
    {
        path: "/community",
        element: <Communities/>,
    },
    {
        path: "/lens",
        element: <Lens />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]
export default routes;