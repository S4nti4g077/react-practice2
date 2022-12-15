import "./DisplayUsers.css";

const DisplayUsers = (props) => {
  const username = props.username;
  const age = props.age;
  return (
    <div className="form">
      <h1>{username}</h1>
      <h2>{age}</h2>
    </div>
  );
};

export default DisplayUsers;
