"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PageEditorUtils_1 = require("../PageEditorUtils");
describe("The PageEditorUtils", () => {
    describe("moveProperty", () => {
        let properties;
        const originalProperties = [
            { caption: "General" },
            { caption: "Data source" },
            { caption: "Events" },
            { caption: "Accessibility" },
            { caption: "Common" },
            { caption: "Dimensions" }
        ];
        beforeEach(() => {
            properties = [...originalProperties];
        });
        it("moves a property forward in the array", () => {
            (0, PageEditorUtils_1.moveProperty)(1, 5, properties);
            expect(properties).toEqual([
                { caption: "General" },
                { caption: "Events" },
                { caption: "Accessibility" },
                { caption: "Common" },
                { caption: "Dimensions" },
                { caption: "Data source" }
            ]);
        });
        it("moves a property backward in the array", () => {
            (0, PageEditorUtils_1.moveProperty)(5, 2, properties);
            expect(properties).toEqual([
                { caption: "General" },
                { caption: "Data source" },
                { caption: "Dimensions" },
                { caption: "Events" },
                { caption: "Accessibility" },
                { caption: "Common" }
            ]);
        });
        it("does nothing if both indices are the same", () => {
            (0, PageEditorUtils_1.moveProperty)(3, 3, properties);
            expect(properties).toEqual(originalProperties);
        });
        it("does nothing if either index is out of bounds", () => {
            const lowerOutOfBoundIndex = -3;
            const upperOutOfBoundIndex = originalProperties.length + 30;
            (0, PageEditorUtils_1.moveProperty)(lowerOutOfBoundIndex, 3, properties);
            expect(properties).toEqual(originalProperties);
            (0, PageEditorUtils_1.moveProperty)(upperOutOfBoundIndex, 3, properties);
            expect(properties).toEqual(originalProperties);
            (0, PageEditorUtils_1.moveProperty)(2, lowerOutOfBoundIndex, properties);
            expect(properties).toEqual(originalProperties);
            (0, PageEditorUtils_1.moveProperty)(2, upperOutOfBoundIndex, properties);
            expect(properties).toEqual(originalProperties);
        });
    });
    describe("hiding properties", () => {
        let values;
        let properties;
        beforeEach(() => {
            values = {
                title: "Hi there",
                readOnly: false,
                collapsible: true,
                icon: "right",
                list: []
            };
            properties = [
                {
                    caption: "General",
                    properties: [
                        { key: "title", caption: "Title" },
                        { key: "readOnly", caption: "Readonly" },
                        {
                            key: "list",
                            caption: "List",
                            objects: [
                                {
                                    properties: [
                                        {
                                            caption: "name",
                                            properties: [
                                                { key: "name", caption: "Name" },
                                                { key: "isOpen", caption: "Is Open" }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            objectHeaders: ["one"]
                        }
                    ]
                },
                {
                    caption: "Design",
                    properties: [
                        { key: "collapsible", caption: "Collapsible" },
                        { key: "icon", caption: "Icon style" }
                    ]
                }
            ];
        });
        describe("hidePropertyIn", () => {
            it("hides a property correctly", () => {
                (0, PageEditorUtils_1.hidePropertyIn)(properties, values, "icon");
                // check properties
                expect(properties).toEqual([
                    {
                        caption: "General",
                        properties: [
                            { key: "title", caption: "Title" },
                            { key: "readOnly", caption: "Readonly" },
                            {
                                key: "list",
                                caption: "List",
                                objects: [
                                    {
                                        properties: [
                                            {
                                                caption: "name",
                                                properties: [
                                                    { key: "name", caption: "Name" },
                                                    { key: "isOpen", caption: "Is Open" }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                objectHeaders: ["one"]
                            }
                        ]
                    },
                    {
                        caption: "Design",
                        properties: [
                            { key: "collapsible", caption: "Collapsible" }
                            // here was a prop with key "icon", but it is hidden
                        ]
                    }
                ]);
            });
            it("hides a nested property correctly", () => {
                (0, PageEditorUtils_1.hidePropertyIn)(properties, values, "list", 0, "name");
                // check properties
                expect(properties).toEqual([
                    {
                        caption: "General",
                        properties: [
                            { key: "title", caption: "Title" },
                            { key: "readOnly", caption: "Readonly" },
                            {
                                key: "list",
                                caption: "List",
                                objects: [
                                    {
                                        properties: [
                                            {
                                                caption: "name",
                                                properties: [
                                                    // here was a nested prop with key "name", but it is hidden
                                                    { key: "isOpen", caption: "Is Open" }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                objectHeaders: ["one"]
                            }
                        ]
                    },
                    {
                        caption: "Design",
                        properties: [
                            { key: "collapsible", caption: "Collapsible" },
                            { key: "icon", caption: "Icon style" }
                        ]
                    }
                ]);
            });
        });
        describe("hidePropertiesIn", () => {
            it("hides multiple properties", () => {
                (0, PageEditorUtils_1.hidePropertiesIn)(properties, values, ["title", "collapsible"]);
                expect(properties).toEqual([
                    {
                        caption: "General",
                        properties: [
                            // here was a prop with key "title", but it is hidden
                            { key: "readOnly", caption: "Readonly" },
                            {
                                key: "list",
                                caption: "List",
                                objects: [
                                    {
                                        properties: [
                                            {
                                                caption: "name",
                                                properties: [
                                                    { key: "name", caption: "Name" },
                                                    { key: "isOpen", caption: "Is Open" }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                objectHeaders: ["one"]
                            }
                        ]
                    },
                    {
                        caption: "Design",
                        properties: [
                            // here was a prop with key "collapsed", but it is hidden
                            { key: "icon", caption: "Icon style" }
                        ]
                    }
                ]);
            });
        });
        describe("hideNestedPropertiesIn", () => {
            it("hides multiple properties", () => {
                (0, PageEditorUtils_1.hideNestedPropertiesIn)(properties, values, "list", 0, ["name", "isOpen"]);
                expect(properties).toEqual([
                    {
                        caption: "General",
                        properties: [
                            { key: "title", caption: "Title" },
                            { key: "readOnly", caption: "Readonly" },
                            {
                                key: "list",
                                caption: "List",
                                objects: [
                                    {
                                        properties: [
                                            {
                                                caption: "name",
                                                properties: [
                                                // here were a props with keys "name" and isOpen, but they were hidden
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                objectHeaders: ["one"]
                            }
                        ]
                    },
                    {
                        caption: "Design",
                        properties: [
                            { key: "collapsible", caption: "Collapsible" },
                            { key: "icon", caption: "Icon style" }
                        ]
                    }
                ]);
            });
        });
    });
});
