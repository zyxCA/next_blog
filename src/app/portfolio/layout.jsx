import React from "react";
import styles from "./page.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works </h1>
      {children}
    </div>
  );
};

export default Layout;
