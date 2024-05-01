import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'




const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", 
    "f492db53-1013-4e90-a065-b31de3cddf51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((response) => response.json());

    if (response.success) {
        console.log("Success",response);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
};




  return (
    <div className='contact'>
        <div className="contact-col  col1 ">
            <h3>Send Us a Message <img src={msg_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus obcaecati similique nulla quo <br /> ad perferendis odit voluptas nihil vero, atque aliquam! Quod, veritatis. Nam provident ipsa ratione itaque culpa.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> contact@edupro.com</li>
                <li> <img src={phone_icon} alt="" /> +91 1122334455</li>
                <li> <img src={location_icon} alt="" /> Coimbatore</li>
            </ul>
            </div>      
            
        <div className="contact-col  col2 ">

        <form onSubmit={onSubmit} >
            <label>Your Name:</label>
            <input type="text" name={name} placeholder='Enter Your Name'  required />
            <label>Phone Number:</label>
            <input type="tel" name='phone' placeholder='Enter Phone Number' required />
            <label>Email Address:</label>
            <input type="email" name='email' placeholder='Enter Email'  required />
            <label > Write Your Message Here</label>
            <textarea name="message"  rows="6" placeholder='Enter Your Message Here' required ></textarea>
            <button type='submmit' className='btn dark-btn'>Submit</button>
        </form>
        <span>{result}</span>

        </div>      

    </div>
  )

}

export default Contact
