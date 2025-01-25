import React from 'react';
import './contact.css';
import message_icon from '../../assets/message_icon.png';
import email_icon from '../../assets/email_icon.jpg';
import phone_icon from '../../assets/phone_icon.jpg';
import loc_icon from '../../assets/loc_icon.png';
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevents the form from reloading the page

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6075a0e7-3db3-4719-91c2-b731011f175e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((response) => response.json());

    if (response.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
      event.target.reset();
    }
  };

  return (
    <div className='contact'>
      <div className="contact-call">
        <h3>Send us a message <img src={message_icon} alt=""/></h3>
        <p>If you have any questions, feedback, or inquiries, feel free to reach out to us. 
          We are here to assist you and ensure you have the best experience. 
          Simply fill out the form below or contact us directly via email or phone, 
          and we'll get back to you as soon as possible. We look forward to hearing from you!</p>
        <ul>
          <li><img src={email_icon} alt=""/>Contact@Wingman.help</li>
          <li><img src={phone_icon} alt=""/>+91 7977461189</li>
          <li><img src={loc_icon} alt=""/>8th Street New Ascent, Breeze<br/>89092, Mumbai</li>
        </ul>                
      </div>
      <div className="contact-call">
       <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
        <label>Write Your View</label>
        <textarea name='message' rows='6' placeholder='Enter Your View' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt=""/></button>
       </form>
       <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
