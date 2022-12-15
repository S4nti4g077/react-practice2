import "./DisplayUsers.css";

const DisplayUsers = (props) => {
  const username = props.username;
  return (
    <div className="form">
      <h1>{username}</h1>
    </div>
  );
};

export default DisplayUsers;
