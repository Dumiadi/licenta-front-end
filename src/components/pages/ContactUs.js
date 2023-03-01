// import React from 'react';
// import '../../App.css';

// export default function ContactUs() {
//   return <h1 className='contact-us'>CONTACT</h1>;
// }
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>
            <span className="icon">
              <FaMapMarkerAlt />
            </span>
            11 Traian, Bucharest, Romania
          </li>
          <li>
            <span className="icon">
              <FaPhone />
            </span>
            +40712347634
          </li>
          <li>
            <span className="icon">
              <FaEnvelope />
            </span>
            info@mybarbershop.com
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
