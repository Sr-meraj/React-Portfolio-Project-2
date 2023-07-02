import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Credentials from "../pages/Credentials/Credentials";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import WorkDetails from "../pages/Works/Work-Details";
import Works from "../pages/Works/Works";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/credentials',
                element: <Credentials />,
            },
            {
                path: '/works',
                element: <Works />,
            },
            {
                path: '/work-details',
                element: <WorkDetails />,
            },
            {
                path: '/service',
                element: <Service />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ]
    },
]);

export default router;