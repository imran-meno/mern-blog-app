import axios from "axios";
import { useState } from "react";
function Contact() {
  const[name,Setname]=useState('')
  const[email,Setemail]=useState('')
  const[feedback,Setfeedback]=useState('')
  const[message,Setmessage]=useState('')

  const HandleSumbit=async(e)=>{

    e.preventDefault()
   let response= await axios
   await axios
  .post('http://localhost:3000/contact', { name })
  .then((result) => {
    console.log(result);
    Setfeedback(`${name}, thanks for your feedback!`);
    Setname('');
    Setemail('');
    Setmessage('');
  })
  .catch((err) => {
    console.log(err);
  });

  }

    return(
     <div className="contact_main"> 
  <div className="contact">
    <h3>Contact</h3>
  </div>

  <div className="contact_form">
    <form onSubmit={HandleSumbit}>
      <input type="text"  placeholder ="Enter Your Name" 
      value={name}
      onChange={(e)=>{Setname(e.target.value)}}
      />
      <input type="email" value ={email}
      onChange={(e)=>{Setemail(e.target.value)}}
      placeholder="Enter Your Email" />
      <textarea placeholder="Message" rows="8" cols="40" 
      value={message}
      onChange={(e)=>Setmessage(e.target.value)}
      ></textarea>
      <button type="submit">SUBMIT</button>
    </form>
    {feedback && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{feedback}</p>}
     
  </div>
</div>

    )
}
export default Contact;