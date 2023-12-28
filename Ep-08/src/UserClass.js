import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "User class constructor called");
  }
  componentDidMount() {
    console.log(this.props.name + "componentdid mount of user");
  }
  render() {
    console.log("user render");
    return (
      <div className="send">
        <h1>User</h1>
      </div>
    );
  }
}

export default UserClass;
