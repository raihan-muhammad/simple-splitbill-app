import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import Button from "./Button";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
    </div>
  );
}
