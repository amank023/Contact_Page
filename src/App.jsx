import Navbar from "./Components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./Components/ContactCard";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";
import useDisclouse from "./useDisclouse";
import NotFoundContact from "./Components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { onClose, onOpen, isOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.Name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[37opx] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="ml-1 text-white text-3xl absolute" />
            <input
              onChange={filterContacts}
              type="text"
              className="flex-grow border border-white bg-transparent rounded-md h-10 text-white pl-9"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white"
          />
        </div>
        <div className="mt-4 flex gap-2 flex-col">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};
export default App;
