import { deleteDoc, doc } from "firebase/firestore";
import { HiUser } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import useDisclouse from "../useDisclouse";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { onClose, onOpen, isOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-slate-50 p-2"
      >
        <div className="flex gap-2 items-center">
          <HiUser className="text-4xl" />
          <div>
            <h2 className="font-medium">{contact.Name}</h2>
            <p className="text-sm">{contact.Email}</p>
          </div>
        </div>
        <div className="flex text-3xl items-center gap-2">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
