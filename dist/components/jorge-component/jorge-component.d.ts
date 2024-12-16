import React, { PropsWithChildren } from "react";
declare const Variants: {
    default: string | undefined;
};
export interface JorgeComponentProps extends PropsWithChildren {
    variant?: keyof typeof Variants;
    className?: string | undefined | CSSModuleClasses;
    bgColor?: string;
}
export declare const JorgeComponent: React.FC<JorgeComponentProps>;
export {};
