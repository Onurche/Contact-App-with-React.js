import { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    setForm({ fullname: "", phone_number: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={form.fullname}
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          value={form.phone_number}
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
