import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./Loading";
class App extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      users: [],
      loading: false,
    };
    //menggukan bind
    this.handleSubmit = this.handleSubmit.bind(this); // Bind handleSubmit
  }

  getUser() {
    this.setState({
      loading: true,
    });
    axios("https://randomuser.me/api/")
      .then((response) => {
        this.setState({
          users: [...this.state.users, ...response.data.results],
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  //menggunakan arrow function = cara lebih simple dan efisien
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.getUser();
  //   console.log("more users loaded");
  // };
  handleSubmit(e) {
    e.preventDefault();
    this.getUser();
    console.log("more users loaded");
  }
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="load users" />
        </form>
        {!loading ? (
          users.map((user) => (
            <div style={{ color: "blue" }} key={user.id.value}>
              <h3>{user.name.first}</h3>
              <h3>{user.gender}</h3>
              <p>{user.email}</p>
              <hr />
            </div>
          ))
        ) : (
          <Loading message="Loading..." />
        )}
      </div>
    );
  }
}

export default App;
