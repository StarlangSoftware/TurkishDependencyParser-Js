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
    exports.TurkishDependencyType = void 0;
    /**
     * Enumerator class for Turkish Dependency tags
     */
    var TurkishDependencyType;
    (function (TurkishDependencyType) {
        TurkishDependencyType[TurkishDependencyType["VOCATIVE"] = 0] = "VOCATIVE";
        TurkishDependencyType[TurkishDependencyType["SUBJECT"] = 1] = "SUBJECT";
        TurkishDependencyType[TurkishDependencyType["DATIVE_ADJUNCT"] = 2] = "DATIVE_ADJUNCT";
        TurkishDependencyType[TurkishDependencyType["OBJECT"] = 3] = "OBJECT";
        TurkishDependencyType[TurkishDependencyType["POSSESSOR"] = 4] = "POSSESSOR";
        TurkishDependencyType[TurkishDependencyType["MODIFIER"] = 5] = "MODIFIER";
        TurkishDependencyType[TurkishDependencyType["S_MODIFIER"] = 6] = "S_MODIFIER";
        TurkishDependencyType[TurkishDependencyType["ABLATIVE_ADJUNCT"] = 7] = "ABLATIVE_ADJUNCT";
        TurkishDependencyType[TurkishDependencyType["DETERMINER"] = 8] = "DETERMINER";
        TurkishDependencyType[TurkishDependencyType["SENTENCE"] = 9] = "SENTENCE";
        TurkishDependencyType[TurkishDependencyType["CLASSIFIER"] = 10] = "CLASSIFIER";
        TurkishDependencyType[TurkishDependencyType["LOCATIVE_ADJUNCT"] = 11] = "LOCATIVE_ADJUNCT";
        TurkishDependencyType[TurkishDependencyType["COORDINATION"] = 12] = "COORDINATION";
        TurkishDependencyType[TurkishDependencyType["QUESTION_PARTICLE"] = 13] = "QUESTION_PARTICLE";
        TurkishDependencyType[TurkishDependencyType["INTENSIFIER"] = 14] = "INTENSIFIER";
        TurkishDependencyType[TurkishDependencyType["INSTRUMENTAL_ADJUNCT"] = 15] = "INSTRUMENTAL_ADJUNCT";
        TurkishDependencyType[TurkishDependencyType["RELATIVIZER"] = 16] = "RELATIVIZER";
        TurkishDependencyType[TurkishDependencyType["NEGATIVE_PARTICLE"] = 17] = "NEGATIVE_PARTICLE";
        TurkishDependencyType[TurkishDependencyType["ETOL"] = 18] = "ETOL";
        TurkishDependencyType[TurkishDependencyType["COLLOCATION"] = 19] = "COLLOCATION";
        TurkishDependencyType[TurkishDependencyType["FOCUS_PARTICLE"] = 20] = "FOCUS_PARTICLE";
        TurkishDependencyType[TurkishDependencyType["EQU_ADJUNCT"] = 21] = "EQU_ADJUNCT";
        TurkishDependencyType[TurkishDependencyType["APPOSITION"] = 22] = "APPOSITION";
    })(TurkishDependencyType = exports.TurkishDependencyType || (exports.TurkishDependencyType = {}));
});
//# sourceMappingURL=TurkishDependencyType.js.map