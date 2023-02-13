import { useState, useEffect } from "react";
import "./pages_css/Contact.css";

function Contact(props) {
  // create state to hold about data
  const [contact, setContact] = useState(null);

  // create function to make api call
  const getContactData = async () => {
    
		// make api call and get response
    const response = await fetch("./contact.json");
    
		// turn response into javascript object
    const data = await response.json();
    
		// set the contact state to the data
    setContact(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getContactData()
  },[]);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="contactContainer">
      <h2 className="contactInfo">{contact.name}</h2>
      <h2 className="contactInfo">{contact.email}</h2>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return contact ? loaded() : <h1>Loading...</h1>;
}

export default Contact;