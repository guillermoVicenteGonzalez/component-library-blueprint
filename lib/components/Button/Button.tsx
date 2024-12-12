import styles from "./ButtonStyles.module.css";

export const Button: React.FC = () => {
  return <button className={`${styles.container}`}>click me</button>;
};
