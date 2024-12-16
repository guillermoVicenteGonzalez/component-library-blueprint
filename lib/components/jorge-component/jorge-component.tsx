import React ,{ PropsWithChildren }  from "react";
import styles from "./jorge-component.module.css";

const Variants = {
	default: styles["default"],
};

export interface JorgeComponentProps extends PropsWithChildren{
	variant?: keyof typeof Variants;
	className?: string | undefined | CSSModuleClasses;
    bgColor?:string;

}

export const JorgeComponent: React.FC<JorgeComponentProps> = ({
	variant = "default",
	className = "",
	bgColor,
	children
}) => {
	const colorVariables = {
		"--jorgeComponent-bg-color": bgColor,
	} as React.CSSProperties;

	return (
		<div
			style={ colorVariables }
			data-testid='jorge-component'
			className={`${styles["jorgeComponent"]} ${className} ${ Variants[variant]} `}
		>{children}
		</div>
	);
};
