import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Well-baked, slice of heaven.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our Restaurants</h1>
          <p className={styles.text}>
            1654 R. Don Road
            <br /> PizzaTown, 1001
            <br /> 503 123 4567
          </p>
        </div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default Footer;
