import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import Shop from "../pages/ShopPage";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBookShop from "../pages/SingleBookPage";
import DashBoardPage from "../pages/DashBoardPage";
import Dashboard from "../components/admin/Dashboard";
import UploadBooks from "../components/admin/UploadBooks";
import ManageBook from "../components/admin/ManageBook";
import EditBooks from "../components/admin/EditBooks";

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
    {
        path: "/admin/dashboard",
        element: <DashBoardPage />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBooks />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBook />
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks />,
                loader: ({params}) => fetch(`http://localhost:4000/book/${params.id}`)
            },
        ]
    }
]);

export default router;