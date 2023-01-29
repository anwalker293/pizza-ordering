import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.text}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>503 123 4567</div>
        </div>
      </div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Navbar;
