import React from "react";

const EditonlyContact = ({
  handleEditForm,
  editFormData,
  handleEditFormSubmit,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          placeholder="Enter a name..."
          onChange={handleEditForm}
          value={editFormData.fullName}
          required
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          placeholder="Enter an address..."
          onChange={handleEditForm}
          value={editFormData.address}
          required
        />
      </td>
      <td>
        <input
          name="phoneNumber"
          placeholder="Enter a phnumber"
          onChange={handleEditForm}
          value={editFormData.phoneNumber}
          required
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          placeholder="Enter an email..."
          onChange={handleEditForm}
          value={editFormData.email}
          required
        />
      </td>
      <td>
        <button onClick={handleEditFormSubmit}>save</button>
        <button onClick={handleCancelClick}>cancel</button>
      </td>
    </tr>
  );
};


export default EditonlyContact;
