"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listImageInputNative = exports.listImageInput = void 0;
exports.listImageInput = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="Events">
            <property key="actions" type="object" isList="true">
                <caption>Actions</caption>
                <description />
                <properties>
                    <propertyGroup caption="Image">
                        <property key="image" type="image">
                            <caption>Image</caption>
                            <description />
                        </property>
                    </propertyGroup>
                 </properties>
            </property>
        </propertyGroup>
        <propertyGroup caption="System Properties">
            <systemProperty key="Label"></systemProperty>
            <systemProperty key="TabIndex"></systemProperty>
        </propertyGroup>
    </properties>
</widget>`;
exports.listImageInputNative = `<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.mywidget.MyWidget" needsEntityContext="true" offlineCapable="true" pluginWidget="true" supportedPlatform="Native"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../xsd/widget.xsd">
    <properties>
        <propertyGroup caption="Events">
            <property key="actions" type="object" isList="true">
                <caption>Actions</caption>
                <description />
                <properties>
                    <propertyGroup caption="Image">
                        <property key="image" type="image">
                            <caption>Image</caption>
                            <description />
                        </property>
                    </propertyGroup>
                 </properties>
            </property>
        </propertyGroup>
        <propertyGroup caption="System Properties">
            <systemProperty key="Label"></systemProperty>
            <systemProperty key="TabIndex"></systemProperty>
        </propertyGroup>
    </properties>
</widget>`;
