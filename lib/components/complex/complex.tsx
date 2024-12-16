import React, { PropsWithChildren } from "react";
import styles from "./complex.module.css";

const Variants = {
	default: styles["default"],
};

export interface ComplexProps extends PropsWithChildren {
	variant?: keyof typeof Variants;
	className?: string | undefined | CSSModuleClasses;
	bgColor?: string;
}

export const Complex: React.FC<ComplexProps> = ({
	variant = "default",
	className = "",
	bgColor,
	children,
}) => {
	const colorVariables = {
		"--complex-bg-color": bgColor,
	} as React.CSSProperties;

	return (
		<div
			style={colorVariables}
			data-testid='complex'
			className={`${styles["complex"]} ${className} ${Variants[variant]} `}
		>
			{children}
		</div>
	);
};
