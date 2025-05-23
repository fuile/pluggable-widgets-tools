"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasourceInputNative = exports.datasourceInput = void 0;
exports.datasourceInput = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="General">
            <property key="contentSource" type="datasource" isList="true">
                <caption>Content data source</caption>
                <description />
            </property>
            <property key="optionalSource" type="datasource" isList="true" required="false">
                <caption>Optional data source</caption>
                <description />
            </property>
            <property key="linkedSource" type="datasource" isLinked="true">
                <caption>Linked data source</caption>
                <description />
            </property>
            <property key="content" type="widgets" dataSource="contentSource">
                <caption>Content</caption>
                <description />
            </property>
            <property key="markerDataAttribute" type="attribute" dataSource="contentSource">
                <caption>Marker attribute</caption>
                <description />
                <attributeTypes>
                    <attributeType name="String"/>
                    <attributeType name="Boolean"/>
                    <attributeType name="Decimal"/>
                </attributeTypes>
            </property>
            <property key="actionAttribute" type="action" dataSource="contentSource">
                <caption>Action</caption>
                <description />
            </property>
            <property key="textTemplateAttribute" type="textTemplate" dataSource="contentSource">
                <caption>Text Template</caption>
                <description />
            </property>
            <property key="expressionAttribute" type="expression" dataSource="contentSource">
                <caption>Expression</caption>
                <description />
                <returnType type="Decimal"/>
            </property>
            <property key="optionalDSAttribute" type="attribute" dataSource="optionalSource">
                <caption>Marker attribute</caption>
                <description />
                <attributeTypes>
                    <attributeType name="String"/>
                    <attributeType name="Boolean"/>
                    <attributeType name="Decimal"/>
                </attributeTypes>
            </property>
            <property key="optionalDSAction" type="action" dataSource="optionalSource">
                <caption>Action</caption>
                <description />
            </property>
            <property key="optionalDSTextTemplate" type="textTemplate" dataSource="optionalSource">
                <caption>Text Template</caption>
                <description />
            </property>
            <property key="optionalDSExpression" type="expression" dataSource="optionalSource">
                <caption>Expression</caption>
                <description />
                <returnType type="Decimal"/>
            </property>
            <property key="optionalContent" type="widgets" dataSource="optionalSource">
                <caption>Content</caption>
                <description />
            </property>
            <property key="datasourceProperties" type="object" isList="true">
                <caption>Data source properties</caption>
                <description />
                <properties>
                    <propertyGroup caption="Properties">
                        <property key="contentAttribute" type="widgets" dataSource="../contentSource">
                            <caption>Content</caption>
                            <description />
                        </property>
                        <property key="markerAttribute" type="attribute" dataSource="../contentSource">
                            <caption>Marker attribute</caption>
                            <description />
                            <attributeTypes>
                                <attributeType name="String"/>
                                <attributeType name="Boolean"/>
                                <attributeType name="Decimal"/>
                            </attributeTypes>
                        </property>
                        <property key="actionAttribute" type="action" dataSource="../contentSource">
                            <caption>Action</caption>
                            <description />
                        </property>
                        <property key="optionalDSAttribute" type="attribute" dataSource="../optionalSource">
                            <caption>Marker attribute</caption>
                            <description />
                            <attributeTypes>
                                <attributeType name="String"/>
                                <attributeType name="Boolean"/>
                                <attributeType name="Decimal"/>
                            </attributeTypes>
                        </property>
                        <property key="optionalDSAction" type="action" dataSource="../optionalSource">
                            <caption>Action</caption>
                            <description />
                        </property>
                        <property key="optionalDSTextTemplate" type="textTemplate" dataSource="../optionalSource">
                            <caption>Text Template</caption>
                            <description />
                        </property>
                        <property key="optionalDSExpression" type="expression" dataSource="../optionalSource">
                            <caption>Expression</caption>
                            <description />
                            <returnType type="Decimal"/>
                        </property>
                        <property key="optionalContent" type="widgets" dataSource="../optionalSource">
                            <caption>Content</caption>
                            <description />
                        </property>
                    </propertyGroup>
                 </properties>
            </property>
        </propertyGroup>
        <propertyGroup caption="Actions">
            <property key="description" type="attribute">
                <caption>Action</caption>
                <description />
                <attributeTypes>
                    <attributeType name="String"/>
                </attributeTypes>    
            </property>
            <property key="action" type="action">
                <caption>Action</caption>
                <description />
            </property>
        </propertyGroup>
        <propertyGroup caption="System Properties">
            <systemProperty key="Label"></systemProperty>
            <systemProperty key="TabIndex"></systemProperty>
        </propertyGroup>
    </properties>
</widget>`;
exports.datasourceInputNative = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="General">
            <property key="contentSource" type="datasource" isList="true">
                <caption>Content data source</caption>
                <description />
            </property>
            <property key="content" type="widgets" dataSource="contentSource">
                <caption>Content</caption>
                <description />
            </property>
            <property key="markerDataAttribute" type="attribute" dataSource="contentSource">
                <caption>Marker attribute</caption>
                <description />
                <attributeTypes>
                    <attributeType name="String"/>
                    <attributeType name="Boolean"/>
                    <attributeType name="Decimal"/>
                </attributeTypes>
            </property>
            <property key="actionAttribute" type="action" dataSource="contentSource">
                <caption>Action</caption>
                <description />
            </property>
            <property key="textTemplateAttribute" type="textTemplate" dataSource="contentSource">
                <caption>Text Template</caption>
                <description />
            </property>
            <property key="expressionAttribute" type="expression" dataSource="contentSource">
                <caption>Expression</caption>
                <description />
                <returnType type="Decimal"/>
            </property>
            <property key="datasourceProperties" type="object" isList="true">
                <caption>Data source properties</caption>
                <description />
                <properties>
                    <propertyGroup caption="Properties">
                        <property key="contentAttribute" type="widgets" dataSource="../contentSource">
                            <caption>Content</caption>
                            <description />
                        </property>
                        <property key="markerAttribute" type="attribute" dataSource="../contentSource">
                            <caption>Marker attribute</caption>
                            <description />
                            <attributeTypes>
                                <attributeType name="String"/>
                                <attributeType name="Boolean"/>
                                <attributeType name="Decimal"/>
                            </attributeTypes>
                        </property>
                        <property key="actionAttribute" type="action" dataSource="../contentSource">
                            <caption>Action</caption>
                            <description />
                        </property>
                    </propertyGroup>
                 </properties>
            </property>
        </propertyGroup>
        <propertyGroup caption="Actions">
            <property key="description" type="attribute">
                <caption>Action</caption>
                <description />
                <attributeTypes>
                    <attributeType name="String"/>
                </attributeTypes>    
            </property>
            <property key="action" type="action">
                <caption>Action</caption>
                <description />
            </property>
        </propertyGroup>
        <propertyGroup caption="System Properties">
            <systemProperty key="Label"></systemProperty>
            <systemProperty key="TabIndex"></systemProperty>
        </propertyGroup>
    </properties>
</widget>`;
