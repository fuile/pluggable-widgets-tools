export default function widget(widgetId, widgetName, pluginWidget) {
    const _declareImport = `import _WidgetBase from "mxui/widget/_WidgetBase";\nimport _declare from "dojo/_base/declare";\nimport _React from "react";\nimport _ReactDOM from "react-dom";\n`
    const _declareCode = `\nexport default _declare("${widgetId}", [_WidgetBase], {_root: null, _context: null, postCreate() { this._root = _ReactDOM.createRoot(this.domNode); }, uninitialize() { this.unsubscribeAll(); this._root.unmount(); }, update(context, callback) { this._context = context; this._root.render(_React.createElement(${widgetName}, {...this})); if (callback && typeof callback === "function") { callback(); } } });`
    return {
        name: "widget",
        transform(code, id) {
            const pattern = new RegExp(`[/\\\\]src[/\\\\]${escape(widgetName)}\\.[jt]sx?$`, "i");
            if (!pattern.test(id)) return;
            if (pluginWidget !== false) return;
            return { code: `${_declareImport}${code}${_declareCode}`, map: null }
        }
    }
}

function escape(str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
