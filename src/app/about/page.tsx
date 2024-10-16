import About from "@/components/about";
import Navbar from "@/components/navbar";

export default function Page () {
    return(
        <>
            <div className="flex flex-row">
                <Navbar/>
                <About/>
            </div>
        </>
    )
}