import { useState, useContext } from "react";
import { UserContext } from "./UserHandler";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex justify-center flex-col md:items-start w-full px-2 py-8">
          <div className="flex items-center mb-4">
          <img
              className="w-16 h-16 rounded-full object-cover mr-4"
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=Mia`}
              alt="Avatar"
            />
            <div>
              <p className="text-lg font-semibold">{user.username || "Username"}</p>
              <p className="text-gray-500">{user.email || "Email"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
