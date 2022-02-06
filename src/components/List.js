import React, { useState } from "react";

const List = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const addItem = (e) => {
    let founded = list.find((el) => el === name);
    if (founded) {
      alert(`${founded} already exists`);
    } else {
      setList([...list, name]);
    }
    setName("");
  };
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <button onClick={addItem}>Add Guess</button>
      {list.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};

export default List;
