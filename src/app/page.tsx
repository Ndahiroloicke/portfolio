import Home from "@/components/home";
import LastICon from "@/components/lasticons";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
    <head>
      <title>Home </title>
    </head>
      <div className="flex flex-row items-center pr-3">
        <Navbar/>
        <Home/>
        <LastICon/>
      </div>
    </>
  );
}