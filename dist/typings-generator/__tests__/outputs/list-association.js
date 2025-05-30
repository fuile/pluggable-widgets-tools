"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAssociationNativeOutput = exports.listAssociationWebOutput = void 0;
exports.listAssociationWebOutput = `/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue, ListReferenceValue, ListReferenceSetValue } from "mendix";

export interface MyWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource?: ListValue;
    reference?: ListReferenceValue;
    referenceSet?: ListReferenceSetValue;
    referenceOrSet?: ListReferenceValue | ListReferenceSetValue;
    optionsSource?: ListValue;
    displayValue?: ListAttributeValue<string>;
}

export interface MyWidgetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    dataSource: {} | { caption: string } | { type: string } | null;
    reference: string;
    referenceSet: string;
    referenceOrSet: string;
    optionsSource: {} | { caption: string } | { type: string } | null;
    displayValue: string;
}
`;
exports.listAssociationNativeOutput = `export interface MyWidgetProps<Style> {
    name: string;
    style: Style[];
    dataSource?: ListValue;
    reference?: ListReferenceValue;
    referenceSet?: ListReferenceSetValue;
    referenceOrSet?: ListReferenceValue | ListReferenceSetValue;
    optionsSource?: ListValue;
    displayValue?: ListAttributeValue<string>;
}`;
