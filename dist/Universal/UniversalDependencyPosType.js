(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyPosType = void 0;
    /**
     * Enumerator class for Universal Dependency Pos tags
     */
    var UniversalDependencyPosType;
    (function (UniversalDependencyPosType) {
        UniversalDependencyPosType[UniversalDependencyPosType["ADJ"] = 0] = "ADJ";
        UniversalDependencyPosType[UniversalDependencyPosType["ADV"] = 1] = "ADV";
        UniversalDependencyPosType[UniversalDependencyPosType["INTJ"] = 2] = "INTJ";
        UniversalDependencyPosType[UniversalDependencyPosType["NOUN"] = 3] = "NOUN";
        UniversalDependencyPosType[UniversalDependencyPosType["PROPN"] = 4] = "PROPN";
        UniversalDependencyPosType[UniversalDependencyPosType["VERB"] = 5] = "VERB";
        UniversalDependencyPosType[UniversalDependencyPosType["ADP"] = 6] = "ADP";
        UniversalDependencyPosType[UniversalDependencyPosType["AUX"] = 7] = "AUX";
        UniversalDependencyPosType[UniversalDependencyPosType["CCONJ"] = 8] = "CCONJ";
        UniversalDependencyPosType[UniversalDependencyPosType["DET"] = 9] = "DET";
        UniversalDependencyPosType[UniversalDependencyPosType["NUM"] = 10] = "NUM";
        UniversalDependencyPosType[UniversalDependencyPosType["PART"] = 11] = "PART";
        UniversalDependencyPosType[UniversalDependencyPosType["PRON"] = 12] = "PRON";
        UniversalDependencyPosType[UniversalDependencyPosType["SCONJ"] = 13] = "SCONJ";
        UniversalDependencyPosType[UniversalDependencyPosType["PUNCT"] = 14] = "PUNCT";
        UniversalDependencyPosType[UniversalDependencyPosType["SYM"] = 15] = "SYM";
        UniversalDependencyPosType[UniversalDependencyPosType["X"] = 16] = "X";
    })(UniversalDependencyPosType = exports.UniversalDependencyPosType || (exports.UniversalDependencyPosType = {}));
});
//# sourceMappingURL=UniversalDependencyPosType.js.map