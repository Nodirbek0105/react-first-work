import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Footer from "../components/footer/footer"
import B5 from "../components/b5/b5"
import Tana from "../components/main/tana"

const router = createBrowserRouter([{
    path: "/",
    element: <B5 />,
    children: [{
        index:true,
        path: "/pricing",
        element: <Tana />
    }, {
        path: "/about",
        element: <Footer />
    },]
}])
export default router