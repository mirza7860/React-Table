import React from "react";

const ReadonlyContact = ({ person, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{person.fullName}</td>
      <td>{person.address}</td>
      <td>{person.phoneNumber}</td>
      <td>{person.email}</td>
      <td>
        <button onClick={(e) => handleEditClick(e, person)}>Edit</button>
        <button onClick={(e) => handleDeleteClick(e, person)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadonlyContact;
