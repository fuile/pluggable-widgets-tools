"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileInputNative = exports.fileInput = void 0;
exports.fileInput = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="General">
            <property key="file" type="file">
                <caption>File</caption>
                <description />
            </property>
            <property key="file2" type="file" required="false">
                <caption>File 2</caption>
                <description />
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
        <propertyGroup caption="Other">
            <propertyGroup caption="System Properties">
                <systemProperty key="Label"></systemProperty>
                <systemProperty key="TabIndex"></systemProperty>
            </propertyGroup>
        </propertyGroup>
    </properties>
</widget>`;
exports.fileInputNative = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
         <propertyGroup caption="General">
            <property key="file" type="file">
                <caption>File</caption>
                <description />
            </property>
            <property key="file2" type="file" required="false">
                <caption>File 2</caption>
                <description />
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
        <propertyGroup caption="Other">
            <propertyGroup caption="System Properties">
                <systemProperty key="Label"></systemProperty>
                <systemProperty key="TabIndex"></systemProperty>
            </propertyGroup>
        </propertyGroup>
    </properties>
</widget>`;
