import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
