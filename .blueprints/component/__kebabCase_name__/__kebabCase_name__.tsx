import React ,{ PropsWithChildren }  from "react";
import styles from "./{{ kebabCase name }}.module.css";

const Variants = {
	default: styles["default"],
};

export interface {{pascalCase name}}Props extends PropsWithChildren{
	variant?: keyof typeof Variants;
	className?: string | undefined | CSSModuleClasses;
    bgColor?:string;

}

export const {{pascalCase name}}: React.FC<{{pascalCase name}}Props> = ({
	variant = "default",
	className = "",
	bgColor,
	children
}) => {
	const colorVariables = {
		"--{{camelCase name}}-bg-color": bgColor,
	} as React.CSSProperties;

	return (
		<div
			style={ colorVariables }
			data-testid='{{ kebabCase name }}'
			className={`${styles["{{camelCase name}}"]} ${className} ${ Variants[variant]} `}
		>{children}
		</div>
	);
};
