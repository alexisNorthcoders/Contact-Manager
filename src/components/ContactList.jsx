import { useContext, useEffect, useState } from "react";
import { deleteContact, getContacts } from "./utils/api";
import { UserContext } from "./UserHandler";
import Contact from "./Contact";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getContacts(user.accessToken).then((res) => setContacts(res));
  }, []);
  function handleRemove(id) {
    deleteContact(user.accessToken, id).then(()=>{
        const updatedContacts = contacts.filter((contact) => contact._id !== id);
        setContacts(updatedContacts);
    })
   
  }

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex justify-center flex-col md:items-start w-full px-2 py-8">
          <h2 className="py-3 text-sm md:text-4xl font-bold">Contacts List</h2>
          {contacts.map((contact, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <p className="text-lg font-semibold">{contact.name}</p>
                <p className="text-gray-500 mb-2">Email: {contact.email}</p>
                <p className="text-gray-500 mb-2">City: {contact.city}</p>
                <p className="text-gray-500 mb-2">Postal Code: {contact.postal}</p>
                <p className="text-gray-500">Phone: {contact.phone}</p>
                <button
                  onClick={() => handleRemove(contact._id)}
                  className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
       
        <Contact setContacts={setContacts} />
      </div>
    </div>
  );
}
