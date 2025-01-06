import Navbar from "@/components/navbar";
import Contacts from "./contacts";

export default function Page(){
    return(
        <div className="flex flex-row">
            <Navbar/>
            <Contacts/>
        </div>
    )
}