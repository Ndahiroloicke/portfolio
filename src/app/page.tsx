import Home from "@/components/home";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
    <head>
      <title>Home </title>
    </head>
      <div className="flex flex-row justify-between pr-4">
        <Navbar/>
        <Home/>
        <div className='flex flex-col items-center gap-4'>
                <i className='bx bxl-github text-3xl border-2 rounded-full py-2 px-2' ></i>
                <i className='bx bxl-upwork text-3xl border-2 rounded-full py-2 px-2'></i>
                <i className='bx bxl-linkedin-square text-3xl border-2 rounded-full py-2 px-2' ></i>
                <div className='bg-[#141313] w-[0.5px] h-36'></div>
                </div>
      </div>
    </>
  );
}
