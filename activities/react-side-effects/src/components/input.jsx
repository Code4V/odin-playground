import React, { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");

  const [firstName, setFirstName] = useState('asd');
  const [lastName, setLastName] = useState('ad');

  const fullName = firstName + '  ' + lastName;

  const ChangeName = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get('fName'))

    setFirstName(formData.get('fName'));
    setLastName(formData.get('lName'));
  }

  return (
    <>
      <form onSubmit={ChangeName}>
        <input name="fName"/>
        <input name="lName"/>
        <button type="submit"></button>
      </form>
      <p>{ fullName }</p>
    </>
  );
}
