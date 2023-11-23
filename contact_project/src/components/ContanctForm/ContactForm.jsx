import styles from './ContanctForm.module.css'
import Button from '../button/button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState("sushant");
  const [email, setEmail] = useState("ksushant0293@gmail.com");
  const [text, setText] = useState("this is my contact web page");

  // let email = "ksushant0293@gmail.com";
  // let text = "this is my contact web page";

  // const onViaCallSubmit = () => {
  //   console.log(" I am calling")
  // };


  const onSubmit = (event) => {
    event.preventDefault();

    // name = event.target[0].value;
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log({
      name, email, text
    });
  
    // console.log("name",event.target[0].value);
    // console.log("email",event.target[1].value);
    // console.log("text",event.target[2].value) ;

  }


  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          < div className={styles.top_btn} >
            <Button text ="VIA SUPPORT CHAT"
            icon = {<MdMessage fontSize="24px" />}
            />
            <Button
              // onClick ={onViaCallSubmit}
            
            text ="VIA CALL"
            icon = {<FaPhoneAlt fontSize="24px" />}
            />
          </div>
          <Button isOutline = {true} text ="VIA EMAIL FORM"
            icon = {<HiOutlineMail fontSize="24px" />}
            />

            <form
            onSubmit = {onSubmit}
            >
              <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' />
              </div>
              <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' />
              </div>
              <div className={styles.form_control}>
              <label htmlFor="text">text</label>
              <textarea name='text' rows= "8"/>
              </div>
              <div style={{display:"flex",
                justifyContent : "end"  
            }}>
              <Button text ="SUBMIT"/>
              </div>
              <div>
                {name + " " + email + " " + text}
              </div>
            </form>
        </div>
        <div className={styles.contactImage}>
            <img src="/images/Service 24_7-pana 1.svg" alt="contact_img"  />
        </div>
    </section>
  )
}

export default ContactForm
