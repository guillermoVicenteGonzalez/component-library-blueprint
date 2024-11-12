import styles from "./ButtonStyles.module.css";

export const Button = () => {
	return <button className={`${styles.container}`}>click me</button>;
};

export type Test = {
	name: string;
};
