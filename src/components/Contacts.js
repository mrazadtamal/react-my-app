import react from "react";
import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "kamal",
        gmail: "kamal@gmail.com",
        phone: "344-554-4543",
      },
      {
        id: 2,
        name: "tamal",
        gmail: "tamal@gmail.com",
        phone: "344-554-4543",
      },
      {
        id: 3,
        name: "anha",
        gmail: "anha@gmail.com",
        phone: "344-554-4543",
      },
      {
        id: 4,
        name: "lima",
        gmail: "lima@gmail.com",
        phone: "344-554-4543",
      },
    ],
  };
  deleteContact = () => {
    console.log(123);
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
