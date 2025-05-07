import { ActionValue } from "mendix";

export declare function parseInlineStyle(style?: string): {
    [key: string]: string;
};
export declare function executeAction(action?: ActionValue, callback?:()=>void): void
