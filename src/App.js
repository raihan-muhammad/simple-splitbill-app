import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
