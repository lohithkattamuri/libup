// ContactOptions.js
import React from 'react';
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import "./img2.css";

const ContactForms = () => {
  
  return (
   
   
    <div className=' py-5'>
       
    <div className="container mt-5  ">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns, feel free to reach out to us through the following methods:
      </p>
      <ul className="list-unstyled">
        <li>
          Email: <a  href="https://www.bing.com/ck/a?!&&p=868805b45a35b31dJmltdHM9MTcwMDE3OTIwMCZpZ3VpZD0wZmEwNWYxNy05Y2MxLTZiYTUtMGMzMy00ZWE5OWRhNDZhZmImaW5zaWQ9NTIxOQ&ptn=3&ver=2&hsh=3&fclid=0fa05f17-9cc1-6ba5-0c33-4ea99da46afb&psq=vitap+library+portal&u=a1aHR0cHM6Ly92aXRhcC5hYy5pbi9saWJyYXJ5Lw&ntb=1">vitaplibrary@gmail.com</a>
        </li>
        <li>
          Instagram: <a   href="https://www.instagram.com/your_instagram/">@lohith984</a>
        </li>
        <li> 
            Call : <a   href="#">83412 27516</a> (Available 24/7)
        </li>
      </ul>
    
    
    <button  className='btn btn-info rounded text-dark'> 
    <Link to="/" className='text-decoration-none' ><b>Back To Home </b></Link></button>
    </div>  </div>
);
};

export default ContactForms;
