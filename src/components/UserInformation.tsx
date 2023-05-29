import React from "react";
import { Userlist } from "../Types/Types";
type Prop = {
  userItem: Userlist;
};
export default function UserInformation({ userItem }: Prop) {
  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      <p>
        <span>name: </span> {userItem.name}
      </p>
      <p>
        <span> username: </span>
        {userItem.username}
      </p>

      <p>
        <span> phone :</span> 
        {userItem.phone}
      </p>
      <div>
        {Object.entries(userItem.address).map(([key, value]) => (
          <ul key={key}>
            <li>
              {key}: {value}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
