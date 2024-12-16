import React from "react";
import styles from "./simple.module.css";

export interface SimpleProps {}

export const Simple: React.FC<SimpleProps> = () => {
	return <div data-testid='simple' className={styles.container}></div>;
};
