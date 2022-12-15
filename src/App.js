import React from "react";
import AddUser from "./components/Users/AddUser";
import DisplayUsers from "./components/UI/DisplayUsers";

function App() {
  const users = [
    { username: "Michaś", age: 21 },
    { username: "Alojz", age: 33 },
  ];
  return (
    <div>
      <h1>hello</h1>
      <AddUser />
      <DisplayUsers username={users[0].username} />
    </div>
  );
}

export default App;
