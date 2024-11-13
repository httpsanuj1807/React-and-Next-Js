import { Outlet } from "react-router-dom";
import Navbar from "../components/MainNavigation";

export default function Layout(){

    return(
        <>
            <Navbar />
            <main>
            <Outlet />
            </main>
        </>
    )

}