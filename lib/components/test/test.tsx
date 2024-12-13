import React from "react";
import { Button } from "../button/button";
import styles from "./test.module.css";

export interface TestProps {}

export const Test: React.FC<TestProps> = () => {
	return (
		<div data-testid='test'>
			<Button
				variant='default'
				bgColor='rgb(255,0,0)'
				className={styles.test}
			/>
		</div>
	);
};
