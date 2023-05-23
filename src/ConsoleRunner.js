!function () { function E(E) { var _ = Array.prototype.slice.call(E), e = [], n = []; for (const E of _) n.push(t(S(E))), e.push(N(E)); return { complexities: e, stringifiedArguments: n } } function _(E) { try { return null === E ? R : void 0 === E ? O : e(E) ? T : Object.prototype.toString.call(E) } catch { return s } } function e(E) { return !!(E && "object" == typeof E && "nodeType" in E && 1 === E.nodeType && E.outerHTML) } function N(E) { switch (_(E)) { case R: case O: case D: case a: case I: case i: return u; case s: case P: case L: case A: return l; case T: return H; case C: case r: case c: for (var e of E) { var N = _(e); if (N === P || N === s || N === r) return l } return u; default: return l } } function t(E) { return E.length > o ? E.slice(0, o) + "\u2026" : E } function n(E) { let _ = typeof E; return "function" === _ || "symbol" === _ ? E.toString() : "bigint" === _ && `${E.toString()}n` } function S(E) { try { var e = _(E), N = {}; switch (e) { case R: return "null"; case O: return "undefined"; case D: return "" + E; case a: return `${E.toString()}n`; case I: return E ? "true" : "false"; case T: return E.outerHTML; case L: case P: return E.toString(); case i: return '"' + E.replace(/"/g, "'") + '"'; case c: return `// ${e} (${(E = Array.prototype.slice.call(E, 0)).length})\n[${E.map((E => E.tagName ? `"<${E.tagName.toLowerCase()}/>"` : `"${E.nodeName.toLowerCase()}"`))}]`; case r: return `// ${e} (${E.length})\n[${E.map(S)}]`; case C: return `// ${e} (${(E = [...E]).length})\n{${E.map(S)}}`; case s: return Object.keys(E).map((_ => { let e; "function" == typeof Object.getOwnPropertyDescriptor(E, _).get ? e = "\u2026" : (e = E[_], n(e) && (e = n(e))), N[_] = e })), `// ${e} \n${JSON.stringify(N, null, 2)}`; default: return n(E) ? n(E) : `// ${e} \n${JSON.stringify(E, null, 2)}` } } catch { return "/* Log Skipped: Sorry, this log cannot be shown. You might need to use the browser console instead. */" } } const o = 2e3, R = "TYPE_NULL", O = "TYPE_UNDEFINED", T = "TYPE_ELEMENT_NODE", r = "[object Array]", c = "[object NodeList]", I = "[object Boolean]", P = "[object Function]", A = "[object global]", D = "[object Number]", a = "[object BigInt]", s = "[object Object]", i = "[object String]", L = "[object Symbol]", C = "[object Set]"; window.__cpConsoleSafeStringify = E; const u = 1, l = 2, H = 3 }(), window.HUB_EVENTS = { ASSET_ADDED: "ASSET_ADDED", ASSET_DELETED: "ASSET_DELETED", ASSET_DESELECTED: "ASSET_DESELECTED", ASSET_SELECTED: "ASSET_SELECTED", ASSET_UPDATED: "ASSET_UPDATED", CONSOLE_CHANGE: "CONSOLE_CHANGE", CONSOLE_CLOSED: "CONSOLE_CLOSED", CONSOLE_EVENT: "CONSOLE_EVENT", CONSOLE_OPENED: "CONSOLE_OPENED", CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND", CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE", EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE", EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE", EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE", EMBED_RESHOWN: "EMBED_RESHOWN", FORMAT_FINISH: "FORMAT_FINISH", FORMAT_ERROR: "FORMAT_ERROR", FORMAT_START: "FORMAT_START", IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS", IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE", KEY_PRESS: "KEY_PRESS", LINTER_FINISH: "LINTER_FINISH", LINTER_START: "LINTER_START", PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER", PEN_CHANGE: "PEN_CHANGE", PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE", PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD", PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS", PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND", PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL", PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED", PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST", PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES", PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE", PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER", PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE", PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE", PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE", PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL", PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP", PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME", PEN_ERRORS: "PEN_ERRORS", PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE", PEN_LOGS: "PEN_LOGS", PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE", PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL", PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH", PEN_PREVIEW_START: "PEN_PREVIEW_START", PEN_SAVED: "PEN_SAVED", POPUP_CLOSE: "POPUP_CLOSE", POPUP_OPEN: "POPUP_OPEN", POST_CHANGE: "POST_CHANGE", POST_SAVED: "POST_SAVED", PROCESSING_FINISH: "PROCESSING_FINISH", PROCESSING_START: "PROCESSED_STARTED" }, function () { function E() { if (window.console) for (const E of N) window.console[E] && (window.console[E] = function () { this.apply(console, arguments), _(E, arguments) }.bind(console[E])) } function _(E, _) { const e = window.__cpConsoleSafeStringify(_), { complexities: N, stringifiedArguments: t } = e, n = { topic: HUB_EVENTS.CONSOLE_EVENT, data: { function: E, arguments: t, complexity: Math.max.apply(null, N) } }; window.parent.postMessage(n, "*") } function e(E) { const { topic: _, data: e } = "object" == typeof E.data ? E.data : {}; if (_ === HUB_EVENTS.CONSOLE_RUN_COMMAND) try { const E = window.eval(e.command); console.log(E) } catch (E) { return void console.error(E.message) } } const N = ["clear", "count", "debug", "error", "info", "log", "table", "time", "timeEnd", "warn"]; E(), window.addEventListener("message", e, !1) }();