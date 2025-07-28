import Navbar from "@/components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="font-graphik text-white">
            <Navbar
            />
            <Outlet />
        </div>
    )
}

