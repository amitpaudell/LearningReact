import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleEvent(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <>
      <h3>
        Welcome, {name.firstName} {name.lastName}
      </h3>
      <h1>This is a form</h1>
      <form action="">
        <input onChange={(e) => setName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} placeholder="Enter your first name" />
        <input type="text" onChange={(e) => setName({ ...name, lastName: e.target.value })} placeholder="Enter your last name" value={name.lastName} />
        <button onClick={(e) => handleEvent(e)}>Add me </button>
      </form>
    </>
  );
}
