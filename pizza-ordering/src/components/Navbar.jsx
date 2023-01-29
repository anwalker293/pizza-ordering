import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            className={styles.telephone}
            src="/img/telephone.png"
            alt=""
            width="32"
            height="32"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>503 123 4567</div>
        </div>
      </div>
      <center>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <Image src="/img/logo.png" alt="" width="160" height="69" />
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
      </center>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
