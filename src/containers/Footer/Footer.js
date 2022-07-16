import React, { useState} from 'react'
// scss
import './Footer.scss';
// constants
import { images } from '../../constants';
// HOC
import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  let { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // { [key] : "value" } // dynamic key in JS object
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {

  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg")