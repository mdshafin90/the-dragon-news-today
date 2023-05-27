import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "terms",
                element: <Terms />
            }
        ]
    },
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Category />
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({ params }) => fetch(`https://dragon-news-server-mdshafin90.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout />,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-mdshafin90.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router