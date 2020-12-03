import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const inputvalue = event.target.value;
    // const inputname = event.target.name;
    const { value, name } = event.target;
    //console.log(value, name);
    setName((prevalue) => {
      if (name === "fName") {
        return { fName: value, lName: prevalue.lName };
      } else if (name === "lName") {
        return { lName: value, fName: prevalue.fName };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={name.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
