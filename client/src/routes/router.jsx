import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBookShop from "../pages/SingleBookShop";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/book/:id',
                element: <SingleBookShop />,
                loader: ({params}) => fetch(`http://localhost:4000/book/${params.id}`)
            },
        ]
    },
]);

export default router;