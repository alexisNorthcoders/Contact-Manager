import React, { useState ,useContext} from "react";
import { loginUser, registerUser } from "./utils/api";
import { UserContext } from "./UserHandler";

export default function Signup() {
const { user, setUser } = useContext(UserContext);
const [successMessage,setSuccessMessage] = useState("")

  function handleSignup(event) {
    event.preventDefault()
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    registerUser(username, email, password).then(() => {

        loginUser(email,password).then((acessToken)=>{
            setUser((current) => ({ ...current, accessToken: acessToken, username: username }))
            setSuccessMessage(`Welcome ${username}! Thank you for signing up. You can start creating contacts now!`)

        })
  })}

 return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
       
          <div className="w-full max-w-xs">
            {successMessage ? <h2>{successMessage}</h2> : <form onSubmit={handleSignup} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
             </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
                
              </div>
            </form>}
            
          </div>
        </div>
    </div>
  );
}
