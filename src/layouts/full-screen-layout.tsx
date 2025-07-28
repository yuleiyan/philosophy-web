import ScrollBarVertical from "@/components/ui/scroll-bar-vertical";
import { Outlet } from "react-router-dom";

// type MainLayoutProps = {
//     children: React.ReactNode;
// };

export default function FullScreenLayout() {
    return (
        <>
            <div className="font-graphik">
                <ScrollBarVertical>
                    <Outlet />
                    {/* {children} */}
                </ScrollBarVertical>
            </div>
        </>
    )
}