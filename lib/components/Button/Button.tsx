import React, { PropsWithChildren } from "react";
import styles from "./button.module.scss";

const buttonVariants = {
	default: styles["default"],
	outlined: styles["outlined"],
};

export interface ButtonProps extends PropsWithChildren {
	variant?: keyof typeof buttonVariants;
	className?: string | undefined | CSSModuleClasses;
	textColor?: string;
	bgColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "outlined",
	className = "",
	bgColor,
	textColor,
	children,
}) => {
	const colorVariables = {
		"--button-bg-color": bgColor,
		"--button-text-color": textColor,
	} as React.CSSProperties;

	return (
		<button
			style={{ ...colorVariables }}
			data-testid='button'
			className={`${styles.button} ${buttonVariants[variant]} ${className}`}
		>
			{children}
		</button>
	);
};
