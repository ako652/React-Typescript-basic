import React from "react";
import { Userlist } from "../Types/Types";
import UserInformation from "./UserInformation";

type Prop = {
  userList: Userlist[];
};

export default function UserList({ userList }: Prop) {
  return (
    <div>
      <h1>UserList</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {userList.map((userItem) => (
          <UserInformation userItem={userItem} />
        ))}
      </div>
    </div>
  );
}
