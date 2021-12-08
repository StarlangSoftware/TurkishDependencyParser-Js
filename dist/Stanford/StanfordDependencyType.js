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
    exports.StanfordDependencyType = void 0;
    /**
     * Enumerator class for Stanford Dependency tags
     */
    var StanfordDependencyType;
    (function (StanfordDependencyType) {
        StanfordDependencyType[StanfordDependencyType["ACOMP"] = 0] = "ACOMP";
        StanfordDependencyType[StanfordDependencyType["ADVCL"] = 1] = "ADVCL";
        StanfordDependencyType[StanfordDependencyType["ADVMOD"] = 2] = "ADVMOD";
        StanfordDependencyType[StanfordDependencyType["AGENT"] = 3] = "AGENT";
        StanfordDependencyType[StanfordDependencyType["AMOD"] = 4] = "AMOD";
        StanfordDependencyType[StanfordDependencyType["APPOS"] = 5] = "APPOS";
        StanfordDependencyType[StanfordDependencyType["AUX"] = 6] = "AUX";
        StanfordDependencyType[StanfordDependencyType["AUXPASS"] = 7] = "AUXPASS";
        StanfordDependencyType[StanfordDependencyType["CC"] = 8] = "CC";
        StanfordDependencyType[StanfordDependencyType["CCOMP"] = 9] = "CCOMP";
        StanfordDependencyType[StanfordDependencyType["CONJ"] = 10] = "CONJ";
        StanfordDependencyType[StanfordDependencyType["COP"] = 11] = "COP";
        StanfordDependencyType[StanfordDependencyType["CSUBJ"] = 12] = "CSUBJ";
        StanfordDependencyType[StanfordDependencyType["CSUBJPASS"] = 13] = "CSUBJPASS";
        StanfordDependencyType[StanfordDependencyType["DEP"] = 14] = "DEP";
        StanfordDependencyType[StanfordDependencyType["DET"] = 15] = "DET";
        StanfordDependencyType[StanfordDependencyType["DISCOURSE"] = 16] = "DISCOURSE";
        StanfordDependencyType[StanfordDependencyType["DOBJ"] = 17] = "DOBJ";
        StanfordDependencyType[StanfordDependencyType["EXPL"] = 18] = "EXPL";
        StanfordDependencyType[StanfordDependencyType["GOESWITH"] = 19] = "GOESWITH";
        StanfordDependencyType[StanfordDependencyType["IOBJ"] = 20] = "IOBJ";
        StanfordDependencyType[StanfordDependencyType["MARK"] = 21] = "MARK";
        StanfordDependencyType[StanfordDependencyType["MWE"] = 22] = "MWE";
        StanfordDependencyType[StanfordDependencyType["NEG"] = 23] = "NEG";
        StanfordDependencyType[StanfordDependencyType["NN"] = 24] = "NN";
        StanfordDependencyType[StanfordDependencyType["NPADVMOD"] = 25] = "NPADVMOD";
        StanfordDependencyType[StanfordDependencyType["NSUBJ"] = 26] = "NSUBJ";
        StanfordDependencyType[StanfordDependencyType["NSUBJPASS"] = 27] = "NSUBJPASS";
        StanfordDependencyType[StanfordDependencyType["NUM"] = 28] = "NUM";
        StanfordDependencyType[StanfordDependencyType["NUMBER"] = 29] = "NUMBER";
        StanfordDependencyType[StanfordDependencyType["PARATAXIS"] = 30] = "PARATAXIS";
        StanfordDependencyType[StanfordDependencyType["PCOMP"] = 31] = "PCOMP";
        StanfordDependencyType[StanfordDependencyType["POBJ"] = 32] = "POBJ";
        StanfordDependencyType[StanfordDependencyType["POSS"] = 33] = "POSS";
        StanfordDependencyType[StanfordDependencyType["POSSESSIVE"] = 34] = "POSSESSIVE";
        StanfordDependencyType[StanfordDependencyType["PRECONJ"] = 35] = "PRECONJ";
        StanfordDependencyType[StanfordDependencyType["PREDET"] = 36] = "PREDET";
        StanfordDependencyType[StanfordDependencyType["PREP"] = 37] = "PREP";
        StanfordDependencyType[StanfordDependencyType["PREPC"] = 38] = "PREPC";
        StanfordDependencyType[StanfordDependencyType["PRT"] = 39] = "PRT";
        StanfordDependencyType[StanfordDependencyType["PUNCT"] = 40] = "PUNCT";
        StanfordDependencyType[StanfordDependencyType["QUANTMOD"] = 41] = "QUANTMOD";
        StanfordDependencyType[StanfordDependencyType["RCMOD"] = 42] = "RCMOD";
        StanfordDependencyType[StanfordDependencyType["REF"] = 43] = "REF";
        StanfordDependencyType[StanfordDependencyType["ROOT"] = 44] = "ROOT";
        StanfordDependencyType[StanfordDependencyType["TMOD"] = 45] = "TMOD";
        StanfordDependencyType[StanfordDependencyType["VMOD"] = 46] = "VMOD";
        StanfordDependencyType[StanfordDependencyType["XCOMP"] = 47] = "XCOMP";
        StanfordDependencyType[StanfordDependencyType["XSUBJ"] = 48] = "XSUBJ";
    })(StanfordDependencyType = exports.StanfordDependencyType || (exports.StanfordDependencyType = {}));
});
//# sourceMappingURL=StanfordDependencyType.js.map