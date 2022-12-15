import "./AddUser.css";
import React, { useState } from "react";

const AddUser = (props) => {
  const [username, setUsername] = useState(props.username);
  const [age, setAge] = useState(props.age);
  const changeHandler = (e) => {
    setUsername(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="form">
      <form>
        <div>
          <label>Username</label>
          <input value={username} onChange={changeHandler} type="text"></input>
        </div>
        <div>
          <label>Age (years)</label>
          <input value={age} onChange={changeHandler} type="number"></input>
        </div>
        <button onClick={clickHandler}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
