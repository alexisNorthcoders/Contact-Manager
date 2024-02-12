import React, { useState,useContext } from "react";
import { deleteContact, insertContact } from "./utils/api";
import { UserContext } from "./UserHandler";
import { getContacts } from "./utils/api";
export default function Contact({setContacts}) {
  const [contactToAdd, setContactToAdd] = useState({});
  const { user, setUser } = useContext(UserContext);


  function handleSubmit(event) {
    console.log("form submitted");
    event.preventDefault();
    const firstName = event.target.elements["grid-first-name"].value;
    const lastName = event.target.elements["grid-last-name"].value;
    const email = event.target.elements["grid-email"].value;
    const phone = event.target.elements["grid-phone"].value;
    const city = event.target.elements["grid-city"].value;
    const postal = event.target.elements["grid-zip"].value;

    const name = firstName + " " + lastName;

    addContact(user.accessToken, name, email, city,postal,phone);
  }
  function addContact(accessToken, name, email, city,postal,phone) {
    console.log("function called");
    insertContact(accessToken, name, email,city,postal, phone).then((contact) => {
      setContactToAdd({
        _id: contact._id,
        name: contact.name,
        email: contact.email,
        city: contact.city,
        postal: contact.postal,
        phone: contact.phone,
      })
      getContacts(user.accessToken).then((res) => setContacts(res));
    });
  }

return (<div>
   <h2 className="py-3 text-sm md:text-4xl font-bold">
          Add a New Contact
        </h2>
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="example@email.com"
          />

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-phone"
          >
            Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-phone"
            type="phone"
            placeholder="77..."
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Manchester"
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Postal Code
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="M1"
          />
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        </div>
      </div>
         
    </form>
   </div>
  
  );
}
