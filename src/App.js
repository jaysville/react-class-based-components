import UserFinder from "./components/UserFinder";
import classes from "./components/UserFinder.module.css";
import UsersContext from "./store/users-context";
function App() {
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <div className={classes.finder}>
        <UserFinder />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
