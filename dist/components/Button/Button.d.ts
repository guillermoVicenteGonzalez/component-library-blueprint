import React, { PropsWithChildren } from "react";
declare const buttonVariants: {
    default: string | undefined;
    outlined: string | undefined;
};
export interface ButtonProps extends PropsWithChildren {
    variant?: keyof typeof buttonVariants;
    className?: string | undefined | CSSModuleClasses;
    textColor?: string;
    bgColor?: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
