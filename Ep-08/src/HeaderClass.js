import React from "react";
import UserClass from "./UserClass";

class HeaderClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Heder class constructor called");

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentdid mount of header");
  }
  render() {
    console.log("header render");
    const { count } = this.state;
    return (
      <div className="h">
        <h1>Header</h1>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          click
        </button>
        <UserClass name={"manash"} />
        <UserClass name={"minku"} />
      </div>
    );
  }
}

export default HeaderClass;
