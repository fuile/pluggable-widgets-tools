"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associationInputNative = exports.associationInput = void 0;
exports.associationInput = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="General">
            <property key="reference" type="association" selectableObjects="optionsSource" onChange="referenceOnChange">
                <caption>Reference</caption>
                <description/>
                <associationTypes>
                    <associationType name="Reference"/>
                </associationTypes>
            </property>
            <property key="referenceSet" type="association" selectableObjects="optionsSource">
                <caption>Reference Set</caption>
                <description/>
                <associationTypes>
                    <associationType name="ReferenceSet"/>
                </associationTypes>
            </property>
            <property key="referenceOrSet" type="association" selectableObjects="optionsSource">
                <caption>Reference or Set</caption>
                <description/>
                <associationTypes>
                    <associationType name="Reference"/>
                    <associationType name="ReferenceSet"/>
                </associationTypes>
            </property>
             <property key="optionsSource" type="datasource" isList="true" required="false">
                <caption>Universe Data source</caption>
                <description />
            </property>
            <property key="displayValue" dataSource="optionsSource" type="attribute">
                <caption>Display value</caption>
                <description>Display value</description>
                <attributeTypes>
                    <attributeType name="String"/>
                </attributeTypes>
            </property>
            <property key="referenceOnChange" type="action">
                <caption>Reference On Change</caption>
                <description/>
            </property>
        </propertyGroup>
    </properties>
</widget>`;
exports.associationInputNative = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="General">
            <property key="reference" type="association" selectableObjects="optionsSource" onChange="referenceOnChange">
                <caption>Reference</caption>
                <description/>
                <associationTypes>
                    <associationType name="Reference"/>
                </associationTypes>
            </property>
            <property key="referenceSet" type="association" selectableObjects="optionsSource">
                <caption>Reference Set</caption>
                <description/>
                <associationTypes>
                    <associationType name="ReferenceSet"/>
                </associationTypes>
            </property>
            <property key="referenceOrSet" type="association" selectableObjects="optionsSource">
                <caption>Reference or Set</caption>
                <description/>
                <associationTypes>
                    <associationType name="Reference"/>
                    <associationType name="ReferenceSet"/>
                </associationTypes>
            </property>
             <property key="optionsSource" type="datasource" isList="true" required="false">
                <caption>Universe Data source</caption>
                <description />
            </property>
            <property key="displayValue" dataSource="optionsSource" type="attribute">
                <caption>Display value</caption>
                <description>Display value</description>
                <attributeTypes>
                    <attributeType name="String"/>
                </attributeTypes>
            </property>
            <property key="referenceOnChange" type="action">
                <caption>Reference On Change</caption>
                <description/>
            </property>
        </propertyGroup>
    </properties>
</widget>`;
