import Home from "@/components/home";
import LastICon from "@/components/lasticons";
import Navbar from "@/components/navbar";
// this is one of the comments
export default function Page() {
  return (
    <>
    <head>
      <title>Home </title>
    </head>
      <div className="flex flex-row justify-between items-center pr-3">
        <Navbar/>
        <Home/>
        <LastICon/>
      </div>
    </>
  );
}
