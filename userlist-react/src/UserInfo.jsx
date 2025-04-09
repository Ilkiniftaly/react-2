import React, { useEffect, useState } from "react";
import "./UserInfo.css";

function UserInfo() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function userUrl() {
      try {
        const response = await fetch(
          "http://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        alert("fetch is executed");
      }
    }
    userUrl();
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  if (!error && !loading)
    return (
      <div>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              <p className="name-userlist">Name: {user.name}</p>
              <p className="email-userlist">Email address: {user.email}</p>
              <p className="phone-userlist">Phone number: {user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default UserInfo;
