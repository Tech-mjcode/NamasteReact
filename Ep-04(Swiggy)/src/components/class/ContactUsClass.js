import React from "react";
class ContactUsClass extends React.Component {
  constructor(props) {
    super(props);
    /**
      super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).
     */
  }
  render() {
    const { name } = this.props;
    return (
      <div className="contact-container">
        <h1 style={{ color: "red" }}>This is contact page (Class Component)</h1>
        <h2>Name : {name}</h2>
      </div>
    );
  }
}

export default ContactUsClass;
