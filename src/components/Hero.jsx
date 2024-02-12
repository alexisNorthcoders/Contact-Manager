import React from "react";
import {
  UserPlusIcon,
  UserCircleIcon,
  ComputerDesktopIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import bgImg from "../assets/background.jpeg"


export default function Hero() {
  return <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex justify-center flex-col md:items-start w-full px-2 py-8">
            <p className="text-2xl">CRUD React App</p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">Contacts Manager</h1>
            <p className="text-2xl">Manage contacts in a secure and fast way</p>
           </div><div><img className="w-full"src={bgImg} alt="background with contact cards" /></div>
        
   
    <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
    
        <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2"><UserPlusIcon  className="h-6 text-indigo-600"/> Add </p>
            <p className="flex px-4 py-2"><UserCircleIcon className="h-6 text-indigo-600"/> View </p>
            <p className="flex px-4 py-2"><ComputerDesktopIcon className="h-6 text-indigo-600"/> Delete </p>
            <p className="flex px-4 py-2"><ServerIcon className="h-6 text-indigo-600"/> Modify </p>
        </div>
    </div>
    </div>
  </div>;
}
