"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInlineStyle = parseInlineStyle;
exports.executeAction = executeAction;
function parseInlineStyle(style = "") {
    try {
        return style.split(";").reduce((styleObject, line) => {
            const pair = line.split(":");
            if (pair.length === 2) {
                const name = pair[0].trim().replace(/(-.)/g, match => match[1].toUpperCase());
                styleObject[name] = pair[1].trim();
            }
            return styleObject;
        }, {});
    }
    catch (_) {
        return {};
    }
}
function executeAction(action, callback) {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
        if (callback && typeof callback === "function") callback();
    }
};