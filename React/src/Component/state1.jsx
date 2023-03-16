import { Component } from "react";
import "./style.css";
class Form extends Component {
  state = {
    name: "",
    password: "",
    description: "",
    date: "",
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  render() {
    const { name, password, description, date } = this.state;
    return (
      <>
        <form>
          <div class="input">
            <label class="label">Username</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
            ></input>
          </div>

          <div class="input">
            <label class="label">Password</label>

            <input
              type="Password"
              value={this.state.password}
              onChange={this.handlePassword}
            ></input>
          </div>

          <div class="input">
            <label class="label">Description</label>

            <textarea
              value={this.state.description}
              onChange={this.handleDescription}
            ></textarea>
          </div>

          <div class="input">
            <label class="label">Date</label>

            <input
              type="date"
              value={this.state.date}
              onChange={this.handleDate}
            ></input>
          </div>
        </form>

        <div class="output">
          <p class="element">Username: {name}</p>
          <p class="element">Password:{password}</p>
          <p class="element">Description:{description}</p>
          <p class="element">Date:{date}</p>
        </div>
      </>
    );
  }
}
export default Form;
