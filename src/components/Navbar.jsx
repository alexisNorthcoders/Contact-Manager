import React, { useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserHandler";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    setNav(!nav);
  }

  function handleNavLink(route) {
    setNav(false)
    navigate(route)
  }

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            Handy Contacts
          </h1>
          <ul className="hidden md:flex">
            <li onClick={() => handleNavLink("/home")} className="cursor-pointer">Home</li>
            <li onClick={() => handleNavLink("/contacts")} className="cursor-pointer">Contacts</li>
            <li onClick={() => handleNavLink("/profile")} className="cursor-pointer">Profile</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button onClick={() => handleNavLink("/login")} className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button onClick={() => handleNavLink("/signup")} className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <XMarkIcon className="w-5" /> : <Bars3Icon className="w-5" />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li onClick={() => handleNavLink("/home")} className="border-b-2 border-zinc-300 w-full cursor-pointer">Home</li>
        <li onClick={() => handleNavLink("/contacts")} className="border-b-2 border-zinc-300 w-full cursor-pointer">Contacts</li>
        <li onClick={() => handleNavLink("/profile")} className="border-b-2 border-zinc-300 w-full cursor-pointer">Profile</li>
        <div className="flex flex-col my-4">
          <button onClick={() => handleNavLink("/login")} className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button onClick={() => handleNavLink("/signup")} className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}