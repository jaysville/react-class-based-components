import { Component } from "react";

import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundry from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </>
    );
  }
}

export default UserFinder;
