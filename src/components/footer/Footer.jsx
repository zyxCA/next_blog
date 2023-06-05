import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Junye. All reights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image
            src={"/1.png"}
            alt="Junye"
            className={styles.icon}
            height={15}
            width={15}
          />
          <Image
            src={"/2.png"}
            className={styles.icon}
            alt="Junye"
            height={15}
            width={15}
          />
          <Image
            src={"/3.png"}
            className={styles.icon}
            alt="Junye"
            height={15}
            width={15}
          />
          <Image
            src={"/4.png"}
            className={styles.icon}
            alt="Junye"
            height={15}
            width={15}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
