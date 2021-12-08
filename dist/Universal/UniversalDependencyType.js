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
    exports.UniversalDependencyType = void 0;
    /**
     * Enumerator class for Universal Dependency tags
     */
    var UniversalDependencyType;
    (function (UniversalDependencyType) {
        UniversalDependencyType[UniversalDependencyType["ACL"] = 0] = "ACL";
        UniversalDependencyType[UniversalDependencyType["ADVCL"] = 1] = "ADVCL";
        UniversalDependencyType[UniversalDependencyType["ADVMOD"] = 2] = "ADVMOD";
        UniversalDependencyType[UniversalDependencyType["AMOD"] = 3] = "AMOD";
        UniversalDependencyType[UniversalDependencyType["APPOS"] = 4] = "APPOS";
        UniversalDependencyType[UniversalDependencyType["AUX"] = 5] = "AUX";
        UniversalDependencyType[UniversalDependencyType["CASE"] = 6] = "CASE";
        UniversalDependencyType[UniversalDependencyType["CC"] = 7] = "CC";
        UniversalDependencyType[UniversalDependencyType["CCOMP"] = 8] = "CCOMP";
        UniversalDependencyType[UniversalDependencyType["CLF"] = 9] = "CLF";
        UniversalDependencyType[UniversalDependencyType["COMPOUND"] = 10] = "COMPOUND";
        UniversalDependencyType[UniversalDependencyType["CONJ"] = 11] = "CONJ";
        UniversalDependencyType[UniversalDependencyType["COP"] = 12] = "COP";
        UniversalDependencyType[UniversalDependencyType["CSUBJ"] = 13] = "CSUBJ";
        UniversalDependencyType[UniversalDependencyType["DEP"] = 14] = "DEP";
        UniversalDependencyType[UniversalDependencyType["DET"] = 15] = "DET";
        UniversalDependencyType[UniversalDependencyType["DISCOURSE"] = 16] = "DISCOURSE";
        UniversalDependencyType[UniversalDependencyType["DISLOCATED"] = 17] = "DISLOCATED";
        UniversalDependencyType[UniversalDependencyType["EXPL"] = 18] = "EXPL";
        UniversalDependencyType[UniversalDependencyType["FIXED"] = 19] = "FIXED";
        UniversalDependencyType[UniversalDependencyType["FLAT"] = 20] = "FLAT";
        UniversalDependencyType[UniversalDependencyType["GOESWITH"] = 21] = "GOESWITH";
        UniversalDependencyType[UniversalDependencyType["IOBJ"] = 22] = "IOBJ";
        UniversalDependencyType[UniversalDependencyType["LIST"] = 23] = "LIST";
        UniversalDependencyType[UniversalDependencyType["MARK"] = 24] = "MARK";
        UniversalDependencyType[UniversalDependencyType["NMOD"] = 25] = "NMOD";
        UniversalDependencyType[UniversalDependencyType["NSUBJ"] = 26] = "NSUBJ";
        UniversalDependencyType[UniversalDependencyType["NUMMOD"] = 27] = "NUMMOD";
        UniversalDependencyType[UniversalDependencyType["OBJ"] = 28] = "OBJ";
        UniversalDependencyType[UniversalDependencyType["OBL"] = 29] = "OBL";
        UniversalDependencyType[UniversalDependencyType["ORPHAN"] = 30] = "ORPHAN";
        UniversalDependencyType[UniversalDependencyType["PARATAXIS"] = 31] = "PARATAXIS";
        UniversalDependencyType[UniversalDependencyType["PUNCT"] = 32] = "PUNCT";
        UniversalDependencyType[UniversalDependencyType["REPARANDUM"] = 33] = "REPARANDUM";
        UniversalDependencyType[UniversalDependencyType["ROOT"] = 34] = "ROOT";
        UniversalDependencyType[UniversalDependencyType["VOCATIVE"] = 35] = "VOCATIVE";
        UniversalDependencyType[UniversalDependencyType["XCOMP"] = 36] = "XCOMP";
        UniversalDependencyType[UniversalDependencyType["ACL_RELCL"] = 37] = "ACL_RELCL";
        UniversalDependencyType[UniversalDependencyType["AUX_PASS"] = 38] = "AUX_PASS";
        UniversalDependencyType[UniversalDependencyType["CC_PRECONJ"] = 39] = "CC_PRECONJ";
        UniversalDependencyType[UniversalDependencyType["COMPOUND_PRT"] = 40] = "COMPOUND_PRT";
        UniversalDependencyType[UniversalDependencyType["DET_PREDET"] = 41] = "DET_PREDET";
        UniversalDependencyType[UniversalDependencyType["FLAT_FOREIGN"] = 42] = "FLAT_FOREIGN";
        UniversalDependencyType[UniversalDependencyType["NSUBJ_PASS"] = 43] = "NSUBJ_PASS";
        UniversalDependencyType[UniversalDependencyType["CSUBJ_PASS"] = 44] = "CSUBJ_PASS";
        UniversalDependencyType[UniversalDependencyType["NMOD_NPMOD"] = 45] = "NMOD_NPMOD";
        UniversalDependencyType[UniversalDependencyType["NMOD_POSS"] = 46] = "NMOD_POSS";
        UniversalDependencyType[UniversalDependencyType["NMOD_TMOD"] = 47] = "NMOD_TMOD";
        UniversalDependencyType[UniversalDependencyType["ADVMOD_EMPH"] = 48] = "ADVMOD_EMPH";
        UniversalDependencyType[UniversalDependencyType["AUX_Q"] = 49] = "AUX_Q";
        UniversalDependencyType[UniversalDependencyType["COMPOUND_LVC"] = 50] = "COMPOUND_LVC";
        UniversalDependencyType[UniversalDependencyType["COMPOUND_REDUP"] = 51] = "COMPOUND_REDUP";
        UniversalDependencyType[UniversalDependencyType["CSUBJ_COP"] = 52] = "CSUBJ_COP";
        UniversalDependencyType[UniversalDependencyType["NMOD_COMP"] = 53] = "NMOD_COMP";
        UniversalDependencyType[UniversalDependencyType["NMOD_PART"] = 54] = "NMOD_PART";
        UniversalDependencyType[UniversalDependencyType["NSUBJ_COP"] = 55] = "NSUBJ_COP";
        UniversalDependencyType[UniversalDependencyType["OBL_AGENT"] = 56] = "OBL_AGENT";
        UniversalDependencyType[UniversalDependencyType["OBL_TMOD"] = 57] = "OBL_TMOD";
    })(UniversalDependencyType = exports.UniversalDependencyType || (exports.UniversalDependencyType = {}));
});
//# sourceMappingURL=UniversalDependencyType.js.map