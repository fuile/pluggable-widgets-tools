"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideProperties = hideProperties;
exports.hidePropertyIn = hidePropertyIn;
exports.hidePropertiesIn = hidePropertiesIn;
exports.hideNestedPropertiesIn = hideNestedPropertiesIn;
exports.changePropertyIn = changePropertyIn;
exports.transformGroupsIntoTabs = transformGroupsIntoTabs;
exports.moveProperty = moveProperty;
function hideProperties(properties, key, nestedIndex, nestedKey) {
    properties.forEach(prop => {
        if (prop.propertyGroups) {
            hideProperties(prop.propertyGroups, key, nestedIndex, nestedKey);
        }
        (prop.properties || []).forEach((prop, index, array) => {
            if ((Array.isArray(key) ? key : [key]).includes(prop.key)) {
                if (nestedIndex === undefined || nestedKey === undefined) {
                    array.splice(index, 1);
                } else if (prop.objects) {
                    hideProperties(prop.objects[nestedIndex].properties, nestedKey);
                } else if (prop.properties) {
                    hideProperties(prop.properties[nestedIndex], nestedKey);
                }
            }
        });
    });
}
function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
    modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, nestedPropIndex, nestedPropKey);
}
function hidePropertiesIn(propertyGroups, _value, keys) {
    keys.forEach(key => modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, undefined, undefined));
}
function hideNestedPropertiesIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKeys) {
    nestedPropKeys.forEach(nestedKey => hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedKey));
}
function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
    modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
function transformGroupsIntoTabs(properties) {
    const groups = [];
    properties.forEach(property => {
        if (property.propertyGroups) {
            groups.push(...property.propertyGroups);
            property.propertyGroups = [];
        }
    });
    properties.push(...groups);
}
function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
    propertyGroups.forEach(propGroup => {
        var _a;
        if (propGroup.propertyGroups) {
            modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
        }
        (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach((prop, index, array) => {
            if (prop.key === key) {
                if (nestedPropIndex === undefined || nestedPropKey === undefined) {
                    modify(prop, index, array);
                }
                else if (prop.objects) {
                    modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
                }
                else if (prop.properties) {
                    modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
                }
            }
        });
    });
}
function moveProperty(fromIndex, toIndex, properties) {
    if (fromIndex >= 0 &&
        toIndex >= 0 &&
        fromIndex < properties.length &&
        toIndex < properties.length &&
        fromIndex !== toIndex) {
        properties.splice(toIndex, 0, ...properties.splice(fromIndex, 1));
    }
}
