import Navbar from "@/components/navbar";
import Services from "./services";

export default function Page() {
return(
    <>
    <div className="flex flex-row">
        <Navbar/>
        <Services/>
    </div>
    </>
)
}