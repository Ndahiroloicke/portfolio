import Navbar from "@/components/navbar";
import Recent from "./recentproject";

export default function Page() {
    return(
        <>
        <div className="flex flex-row gap-x-16">
            <Navbar/>
            <Recent/>
        </div>
        </>
    )
}