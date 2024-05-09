import { useState } from "react";
import "./App.css";
import Data from "./Data.json";
import ReadonlyContact from "./Components/ReadonlyContact";
import EditonlyContact from "./Components/EditonlyContact";

function App() {
  const [Contacts, setContacts] = useState(Data);
  const [editPersonId, seteditPersonId] = useState(null);
  const [editForm, seteditForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [formData, setformData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const AddContactData = (e) => {
    e.preventDefault();
    const newContact = { ...formData };
    setContacts([...Contacts, newContact]);
  };

  const AddFormData = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const EditFormChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    seteditForm({
      ...editForm,
      [name]: value,
    });
  };

  const handleEditClick = (e, person) => {
    e.preventDefault();
    seteditPersonId(person.id);

    const formValues = {
      fullName: person.fullName,
      address: person.address,
      phoneNumber: person.phoneNumber,
      email: person.email,
    };

    seteditForm(formValues);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedForm = {
      id: editPersonId,
      ...editForm,
    };
    console.log(editedForm);
    const newForms = [...Contacts];

    const index = Contacts.findIndex((person) => person.id === editedForm.id);

    newForms[index] = editedForm;

    setContacts(newForms);
    seteditPersonId(null);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    seteditPersonId(null);
  };

  const handleDeleteClick = (e, person) => {
    e.preventDefault();
    console.log(person.id);
    const newContacts = Contacts.filter((contact) => {
      return person.id !== contact.id;
    });
    setContacts(newContacts);
  };
  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Contacts.map((person) => {
              return (
                <>
                  {editPersonId === person.id ? (
                    <EditonlyContact
                      handleEditForm={EditFormChange}
                      editFormData={editForm}
                      handleEditFormSubmit={handleEditFormSubmit}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadonlyContact
                      person={person}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </form>

      <h2>Add a contact</h2>

      <form onSubmit={AddContactData} className="AddContact">
        <input
          type="text"
          name="fullName"
          placeholder="Enter a name..."
          onChange={AddFormData}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Enter an address..."
          onChange={AddFormData}
          required
        />
        <input
          type="number"
          name="phoneNumber"
          onChange={AddFormData}
          placeholder="Enter a phnumber"
          required
        />
        <input
          type="email"
          name="email"
          onChange={AddFormData}
          placeholder="Enter an email..."
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
