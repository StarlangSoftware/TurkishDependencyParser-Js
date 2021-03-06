(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../DependencyRelation", "./UniversalDependencyType", "./UniversalDependencyPosType", "../ParserEvaluationScore"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyRelation = void 0;
    const DependencyRelation_1 = require("../DependencyRelation");
    const UniversalDependencyType_1 = require("./UniversalDependencyType");
    const UniversalDependencyPosType_1 = require("./UniversalDependencyPosType");
    const ParserEvaluationScore_1 = require("../ParserEvaluationScore");
    class UniversalDependencyRelation extends DependencyRelation_1.DependencyRelation {
        /**
         * Constructor for UniversalDependencyRelation. Gets input toWord and dependencyType as arguments and
         * calls the super class's constructor and sets the dependency type.
         * @param toWord Index of the word in the sentence that dependency relation is related
         * @param dependencyType Type of the dependency relation in string form
         */
        constructor(toWord, dependencyType) {
            super(toWord);
            if (dependencyType != undefined) {
                this.universalDependencyType = UniversalDependencyRelation.getDependencyTag(dependencyType);
                if (this.universalDependencyType == undefined) {
                    console.log("Dependency Tag " + dependencyType + " does not exist\n");
                }
            }
        }
        /**
         * The getDependencyTag method takes an dependency tag as string and returns the {@link UniversalDependencyType}
         * form of it.
         *
         * @param tag  Type of the dependency tag in string form
         * @return Type of the dependency in {@link UniversalDependencyType} form
         */
        static getDependencyTag(tag) {
            for (let j = 0; j < UniversalDependencyRelation.universalDependencyTags.length; j++) {
                if (tag.toUpperCase() == UniversalDependencyRelation.universalDependencyTypes[j]) {
                    return UniversalDependencyRelation.universalDependencyTags[j];
                }
            }
            return undefined;
        }
        static getDependencyPosType(tag) {
            for (let i = 0; i < UniversalDependencyRelation.universalDependencyPosTypes.length; i++) {
                if (tag.toUpperCase() == UniversalDependencyRelation.universalDependencyPosTypes[i]) {
                    return UniversalDependencyRelation.universalDependencyPosTags[i];
                }
            }
            return undefined;
        }
        compareRelations(relation) {
            let LS = 0.0, LAS = 0.0, UAS = 0.0;
            if (toString() == relation.toString()) {
                LS = 1.0;
                if (this.toWord == relation.to()) {
                    LAS = 1.0;
                }
            }
            if (this.toWord == relation.to()) {
                UAS = 1.0;
            }
            return new ParserEvaluationScore_1.ParserEvaluationScore(LAS, UAS, LS, 1);
        }
        toString() {
            return UniversalDependencyRelation.universalDependencyTypes[this.universalDependencyType];
        }
        clone() {
            return new UniversalDependencyRelation(this.toWord, this.toString());
        }
    }
    exports.UniversalDependencyRelation = UniversalDependencyRelation;
    UniversalDependencyRelation.universalDependencyTypes = ["ACL", "ADVCL",
        "ADVMOD", "AMOD", "APPOS", "AUX", "CASE",
        "CC", "CCOMP", "CLF", "COMPOUND", "CONJ",
        "COP", "CSUBJ", "DEP", "DET", "DISCOURSE",
        "DISLOCATED", "EXPL", "FIXED", "FLAT",
        "GOESWITH", "IOBJ", "LIST", "MARK", "NMOD",
        "NSUBJ", "NUMMOD", "OBJ", "OBL", "ORPHAN",
        "PARATAXIS", "PUNCT", "REPARANDUM", "ROOT",
        "VOCATIVE", "XCOMP", "ACL:RELCL", "AUX:PASS",
        "CC:PRECONJ", "COMPOUND:PRT", "DET:PREDET", "FLAT:FOREIGN",
        "NSUBJ:PASS", "CSUBJ:PASS", "NMOD:NPMOD", "NMOD:POSS",
        "NMOD:TMOD", "ADVMOD:EMPH", "AUX:Q", "COMPOUND:LVC",
        "COMPOUND:REDUP", "CSUBJ:COP", "NMOD:COMP", "NMOD:PART",
        "NSUBJ:COP", "OBL:AGENT", "OBL:TMOD", "OBL:NPMOD"];
    UniversalDependencyRelation.universalDependencyTags = [UniversalDependencyType_1.UniversalDependencyType.ACL, UniversalDependencyType_1.UniversalDependencyType.ADVCL,
        UniversalDependencyType_1.UniversalDependencyType.ADVMOD, UniversalDependencyType_1.UniversalDependencyType.AMOD, UniversalDependencyType_1.UniversalDependencyType.APPOS, UniversalDependencyType_1.UniversalDependencyType.AUX, UniversalDependencyType_1.UniversalDependencyType.CASE,
        UniversalDependencyType_1.UniversalDependencyType.CC, UniversalDependencyType_1.UniversalDependencyType.CCOMP, UniversalDependencyType_1.UniversalDependencyType.CLF, UniversalDependencyType_1.UniversalDependencyType.COMPOUND, UniversalDependencyType_1.UniversalDependencyType.CONJ,
        UniversalDependencyType_1.UniversalDependencyType.COP, UniversalDependencyType_1.UniversalDependencyType.CSUBJ, UniversalDependencyType_1.UniversalDependencyType.DEP, UniversalDependencyType_1.UniversalDependencyType.DET, UniversalDependencyType_1.UniversalDependencyType.DISCOURSE,
        UniversalDependencyType_1.UniversalDependencyType.DISLOCATED, UniversalDependencyType_1.UniversalDependencyType.EXPL, UniversalDependencyType_1.UniversalDependencyType.FIXED, UniversalDependencyType_1.UniversalDependencyType.FLAT,
        UniversalDependencyType_1.UniversalDependencyType.GOESWITH, UniversalDependencyType_1.UniversalDependencyType.IOBJ, UniversalDependencyType_1.UniversalDependencyType.LIST, UniversalDependencyType_1.UniversalDependencyType.MARK, UniversalDependencyType_1.UniversalDependencyType.NMOD,
        UniversalDependencyType_1.UniversalDependencyType.NSUBJ, UniversalDependencyType_1.UniversalDependencyType.NUMMOD, UniversalDependencyType_1.UniversalDependencyType.OBJ, UniversalDependencyType_1.UniversalDependencyType.OBL, UniversalDependencyType_1.UniversalDependencyType.ORPHAN,
        UniversalDependencyType_1.UniversalDependencyType.PARATAXIS, UniversalDependencyType_1.UniversalDependencyType.PUNCT, UniversalDependencyType_1.UniversalDependencyType.REPARANDUM, UniversalDependencyType_1.UniversalDependencyType.ROOT,
        UniversalDependencyType_1.UniversalDependencyType.VOCATIVE, UniversalDependencyType_1.UniversalDependencyType.XCOMP, UniversalDependencyType_1.UniversalDependencyType.ACL_RELCL, UniversalDependencyType_1.UniversalDependencyType.AUX_PASS,
        UniversalDependencyType_1.UniversalDependencyType.CC_PRECONJ, UniversalDependencyType_1.UniversalDependencyType.COMPOUND_PRT, UniversalDependencyType_1.UniversalDependencyType.DET_PREDET, UniversalDependencyType_1.UniversalDependencyType.FLAT_FOREIGN,
        UniversalDependencyType_1.UniversalDependencyType.NSUBJ_PASS, UniversalDependencyType_1.UniversalDependencyType.CSUBJ_PASS, UniversalDependencyType_1.UniversalDependencyType.NMOD_NPMOD, UniversalDependencyType_1.UniversalDependencyType.NMOD_POSS,
        UniversalDependencyType_1.UniversalDependencyType.NMOD_TMOD, UniversalDependencyType_1.UniversalDependencyType.ADVMOD_EMPH, UniversalDependencyType_1.UniversalDependencyType.AUX_Q, UniversalDependencyType_1.UniversalDependencyType.COMPOUND_LVC,
        UniversalDependencyType_1.UniversalDependencyType.COMPOUND_REDUP, UniversalDependencyType_1.UniversalDependencyType.CSUBJ_COP, UniversalDependencyType_1.UniversalDependencyType.NMOD_COMP, UniversalDependencyType_1.UniversalDependencyType.NMOD_PART,
        UniversalDependencyType_1.UniversalDependencyType.NSUBJ_COP, UniversalDependencyType_1.UniversalDependencyType.OBL_AGENT, UniversalDependencyType_1.UniversalDependencyType.OBL_TMOD, UniversalDependencyType_1.UniversalDependencyType.OBL_NPMOD];
    UniversalDependencyRelation.universalDependencyPosTypes = ["ADJ", "ADV", "INTJ", "NOUN", "PROPN", "VERB", "ADP", "AUX", "CCONJ",
        "DET", "NUM", "PART", "PRON", "SCONJ", "PUNCT", "SYM", "X"];
    UniversalDependencyRelation.universalDependencyPosTags = [UniversalDependencyPosType_1.UniversalDependencyPosType.ADJ, UniversalDependencyPosType_1.UniversalDependencyPosType.ADV, UniversalDependencyPosType_1.UniversalDependencyPosType.INTJ, UniversalDependencyPosType_1.UniversalDependencyPosType.NOUN, UniversalDependencyPosType_1.UniversalDependencyPosType.PROPN,
        UniversalDependencyPosType_1.UniversalDependencyPosType.VERB, UniversalDependencyPosType_1.UniversalDependencyPosType.ADP, UniversalDependencyPosType_1.UniversalDependencyPosType.AUX, UniversalDependencyPosType_1.UniversalDependencyPosType.CCONJ, UniversalDependencyPosType_1.UniversalDependencyPosType.DET, UniversalDependencyPosType_1.UniversalDependencyPosType.NUM, UniversalDependencyPosType_1.UniversalDependencyPosType.PART,
        UniversalDependencyPosType_1.UniversalDependencyPosType.PRON, UniversalDependencyPosType_1.UniversalDependencyPosType.SCONJ, UniversalDependencyPosType_1.UniversalDependencyPosType.PUNCT, UniversalDependencyPosType_1.UniversalDependencyPosType.SYM, UniversalDependencyPosType_1.UniversalDependencyPosType.X];
});
//# sourceMappingURL=UniversalDependencyRelation.js.map