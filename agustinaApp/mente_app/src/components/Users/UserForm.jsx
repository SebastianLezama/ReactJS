import React, { useState } from "react";
import { signInWithEmail, supabase } from "../SupabaseClient";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    habitos_aumentar_1: "",
    habitos_aumentar_2: "",
    habitos_aumentar_3: "",
    habitos_disminuir_1: "",
    habitos_disminuir_2: "",
    habitos_disminuir_3: "",
  });

  const insertNewUser = async ({
    name,
    email,
    habitos_aumentar_1,
    habitos_aumentar_2,
    habitos_aumentar_3,
    habitos_disminuir_1,
    habitos_disminuir_2,
    habitos_disminuir_3,
  }) => {
    try {
      const { error } = await supabase.from("Users").insert({
        name: name,
        email: email,
        habitos_aumentar_1: habitos_aumentar_1,
        habitos_aumentar_2: habitos_aumentar_2,
        habitos_aumentar_3: habitos_aumentar_3,
        habitos_disminuir_1: habitos_disminuir_1,
        habitos_disminuir_2: habitos_disminuir_2,
        habitos_disminuir_3: habitos_disminuir_3,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if ((formData.name != null) & (formData.email != null)) {
      await insertNewUser(formData);
      await signInWithEmail(formData.email);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showForm = () => {};

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
          </li>
          <li>
            <input
              type="email"
              name="email"
              placeholder="e-mail"
              onChange={handleChange}
              value={formData.email}
            />
          </li>
          <li>
            <input
              type="text"
              name="habitos_aumentar_1"
              placeholder="Habito a aumentar 1"
              onChange={handleChange}
              value={formData.habitos_aumentar_1}
            />
          </li>
          <li>
            <input
              type="text"
              name="habitos_aumentar_2"
              placeholder="Habito a aumentar 2"
              onChange={handleChange}
              value={formData.habitos_aumentar_2}
            />
          </li>
          <li>
            <input
              type="text"
              name="habitos_aumentar_3"
              placeholder="Habito a aumentar 3"
              onChange={handleChange}
              value={formData.habitos_aumentar_3}
            />
          </li>
          <li>
            <input
              type="text"
              name="habitos_disminuir_1"
              placeholder="Habito a disminuir 1"
              onChange={handleChange}
              value={formData.habitos_disminuir_1}
            />
          </li>
          <li>
            <input
              type="text"
              name="habitos_disminuir_2"
              placeholder="Habito a disminuir 2"
              onChange={handleChange}
              value={formData.habitos_disminuir_2}
            />
          </li>
          <li>
            <input
              type="text"
              name="habitos_disminuir_3"
              placeholder="Habito a disminuir 3"
              onChange={handleChange}
              value={formData.habitos_disminuir_3}
            />
          </li>
          <input type="submit" className="flat-button" value="INVITE" />
        </ul>
      </form>
    </div>
  );
};

export default UserForm;
