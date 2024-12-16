import React, { PropsWithChildren } from "react";
declare const Variants: {
    default: string | undefined;
};
export interface ComplexProps extends PropsWithChildren {
    variant?: keyof typeof Variants;
    className?: string | undefined | CSSModuleClasses;
    bgColor?: string;
}
export declare const Complex: React.FC<ComplexProps>;
export {};
