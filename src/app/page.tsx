import Home from "@/components/home";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
    <head>
      <title>Home </title>
    </head>
      <div className="flex flex-row">
        <Navbar/>
        <Home/>
      </div>
    </>
  );
}
