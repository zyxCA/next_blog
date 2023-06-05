import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
export const metadata = {
  title: "Junye Blog Contact Information",
  description: "Junye's Blog Website, Contact page.",
};
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let&apos;s keep in touch.</h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>

        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            name=""
            placeholder="meesage"
            id=""
            cols="30"
            rows="10"></textarea>
          <Button url={"#"} text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
