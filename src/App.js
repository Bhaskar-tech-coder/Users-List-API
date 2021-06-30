import React from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const list = await fetch("https://reqres.in/api/users?page=2");
    const json = await list.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  });
  return (
    <div className="App">
      <h1>Users List!</h1>
      <div className="container my-3 flex img-thumbnail">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name} </strong>
                  <strong>{user.last_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
