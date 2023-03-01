import { useState, useEffect } from "react";
import List from "./list";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Onur Çelik",
      phone_number: "0507822238",
    },
    {
      fullname: "Cem Sinanoğlu",
      phone_number: "41515615",
    },
    {
      fullname: "Kantar",
      phone_number: "415165165",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <List contacts={contacts} />

      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
