const ContactUs = (props) => {
  return (
    <div className="contact-container">
      <h1 style={{ color: "red" }}>This is contact page(Functional)</h1>
      <h1>Name : {props.name}</h1>
    </div>
  );
};

export default ContactUs;
