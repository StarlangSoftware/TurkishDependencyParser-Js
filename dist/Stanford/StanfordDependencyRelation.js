(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../DependencyRelation", "./StanfordDependencyType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StanfordDependencyRelation = void 0;
    const DependencyRelation_1 = require("../DependencyRelation");
    const StanfordDependencyType_1 = require("./StanfordDependencyType");
    class StanfordDependencyRelation extends DependencyRelation_1.DependencyRelation {
        /**
         * Another constructor for StanfordDependencyRelation. Gets input toWord and dependencyType as arguments and
         * calls the super class's constructor and sets the dependency type.
         * @param toWord Index of the word in the sentence that dependency relation is related
         * @param dependencyType Type of the dependency relation in string form
         */
        constructor(toWord, dependencyType) {
            super(toWord);
            this.stanfordDependencyType = StanfordDependencyRelation.getDependencyTag(dependencyType);
            if (this.stanfordDependencyType == undefined) {
                console.log("Dependency Tag " + dependencyType + " does not exist\n");
            }
        }
        /**
         * The getDependencyTag method takes an dependency tag as string and returns the {@link StanfordDependencyType}
         * form of it.
         *
         * @param tag  Type of the dependency tag in string form
         * @return Type of the dependency in {@link StanfordDependencyType} form
         */
        static getDependencyTag(tag) {
            for (let j = 0; j < StanfordDependencyRelation.stanfordDependencyTags.length; j++) {
                if (tag.toLowerCase() == StanfordDependencyRelation.stanfordDependencyTypes[j]) {
                    return StanfordDependencyRelation.stanfordDependencyTags[j];
                }
            }
            return undefined;
        }
        toString() {
            return StanfordDependencyRelation.stanfordDependencyTypes[this.stanfordDependencyType];
        }
    }
    exports.StanfordDependencyRelation = StanfordDependencyRelation;
    StanfordDependencyRelation.stanfordDependencyTypes = ["acomp", "advcl", "advmod", "agent", "amod", "appos", "aux",
        "auxpass", "cc", "ccomp", "conj", "cop", "csubj", "csubjpass", "dep", "det", "discourse", "dobj", "expl", "goeswith",
        "iobj", "mark", "mwe", "neg", "nn", "npadvmod", "nsubj", "nsubjpass", "num", "number", "parataxis", "pcomp",
        "pobj", "poss", "possessive", "preconj", "predet", "prep", "prepc", "prt", "punct", "quantmod", "rcmod", "ref",
        "root", "tmod", "vmod", "xcomp", "xsubj"];
    StanfordDependencyRelation.stanfordDependencyTags = [StanfordDependencyType_1.StanfordDependencyType.ACOMP, StanfordDependencyType_1.StanfordDependencyType.ADVCL,
        StanfordDependencyType_1.StanfordDependencyType.ADVMOD, StanfordDependencyType_1.StanfordDependencyType.AGENT, StanfordDependencyType_1.StanfordDependencyType.AMOD, StanfordDependencyType_1.StanfordDependencyType.APPOS, StanfordDependencyType_1.StanfordDependencyType.AUX,
        StanfordDependencyType_1.StanfordDependencyType.AUXPASS, StanfordDependencyType_1.StanfordDependencyType.CC, StanfordDependencyType_1.StanfordDependencyType.CCOMP, StanfordDependencyType_1.StanfordDependencyType.CONJ, StanfordDependencyType_1.StanfordDependencyType.COP,
        StanfordDependencyType_1.StanfordDependencyType.CSUBJ, StanfordDependencyType_1.StanfordDependencyType.CSUBJPASS, StanfordDependencyType_1.StanfordDependencyType.DEP, StanfordDependencyType_1.StanfordDependencyType.DET, StanfordDependencyType_1.StanfordDependencyType.DISCOURSE,
        StanfordDependencyType_1.StanfordDependencyType.DOBJ, StanfordDependencyType_1.StanfordDependencyType.EXPL, StanfordDependencyType_1.StanfordDependencyType.GOESWITH, StanfordDependencyType_1.StanfordDependencyType.IOBJ, StanfordDependencyType_1.StanfordDependencyType.MARK,
        StanfordDependencyType_1.StanfordDependencyType.MWE, StanfordDependencyType_1.StanfordDependencyType.NEG, StanfordDependencyType_1.StanfordDependencyType.NN, StanfordDependencyType_1.StanfordDependencyType.NPADVMOD, StanfordDependencyType_1.StanfordDependencyType.NSUBJ,
        StanfordDependencyType_1.StanfordDependencyType.NSUBJPASS, StanfordDependencyType_1.StanfordDependencyType.NUM, StanfordDependencyType_1.StanfordDependencyType.NUMBER, StanfordDependencyType_1.StanfordDependencyType.PARATAXIS, StanfordDependencyType_1.StanfordDependencyType.PCOMP,
        StanfordDependencyType_1.StanfordDependencyType.POBJ, StanfordDependencyType_1.StanfordDependencyType.POSS, StanfordDependencyType_1.StanfordDependencyType.POSSESSIVE, StanfordDependencyType_1.StanfordDependencyType.PRECONJ, StanfordDependencyType_1.StanfordDependencyType.PREDET,
        StanfordDependencyType_1.StanfordDependencyType.PREP, StanfordDependencyType_1.StanfordDependencyType.PREPC, StanfordDependencyType_1.StanfordDependencyType.PRT, StanfordDependencyType_1.StanfordDependencyType.PUNCT, StanfordDependencyType_1.StanfordDependencyType.QUANTMOD,
        StanfordDependencyType_1.StanfordDependencyType.RCMOD, StanfordDependencyType_1.StanfordDependencyType.REF, StanfordDependencyType_1.StanfordDependencyType.ROOT, StanfordDependencyType_1.StanfordDependencyType.TMOD, StanfordDependencyType_1.StanfordDependencyType.VMOD,
        StanfordDependencyType_1.StanfordDependencyType.XCOMP, StanfordDependencyType_1.StanfordDependencyType.XSUBJ];
});
//# sourceMappingURL=StanfordDependencyRelation.js.map