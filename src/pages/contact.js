import React from "react"
import styles from "./contact.module.css";
import SvgIconNest from "../components/SvgIconNest";

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.logo}>
        <SvgIconNest />
      </div>
      <div>
        <img src="../src/data/images/email-icon.png" alt="email icon"></img>
        <h1>Get in touch</h1>
        <p>I'm here to answer your questions. Send your message to</p>
        <a href="">vanessa@nestwellbeing.com</a>
      </div>
      <div>
        <img src="/src/data/images/thumb-icon.png" alt="thumbs up icon"></img>
        <h1>Stay updated</h1>
        <p>Follow <a href="https://www.facebook.com/Babybearwood/">Nest Wellbeing</a> on Facebook for news and special offers</p>
      </div>
      <div>
        <img src="../src/data/images/group-icon.png" alt="people icon"></img>
        <h1>Stay connected</h1>
        <p>Join our <a href="https://www.facebook.com/groups/279616736096772/">Baby Massage & Yoga</a> group on Facebook to connect with Mums from your class</p>
      </div>
    </section >
  )
}


export default ContactPage
