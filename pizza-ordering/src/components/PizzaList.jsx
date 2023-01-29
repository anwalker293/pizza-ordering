import styles from "../styles/PizzaList.module.css";
import PizzaCard from "../components/PizzaCard.jsx";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>The Best Pizza in PizzaTown</div>
      <p className={styles.desc}>
        Lorem ipsum is so ubiquitous because it is so versatile. Select how many
        paragraphs you want, copy, paste, and break the lines wherever it is
        convenient
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
