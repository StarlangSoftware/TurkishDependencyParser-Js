(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Dictionary/Word"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankWord = void 0;
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    class UniversalDependencyTreeBankWord extends Word_1.Word {
        constructor(id, name, lemma, upos, xpos, features, relation, deps, misc) {
            super(name);
            this.id = id;
            this.lemma = lemma;
            this.upos = upos;
            this.xpos = xpos;
            this.deps = deps;
            this.features = features;
            this.relation = relation;
            this.misc = misc;
        }
        getId() {
            return this.id;
        }
        getLemma() {
            return this.lemma;
        }
        getUpos() {
            return this.upos;
        }
        getXpos() {
            return this.xpos;
        }
        getFeatures() {
            return this.features;
        }
        getFeatureValue(featureName) {
            return this.features.getFeatureValue(featureName);
        }
        featureExists(featureName) {
            return this.features.featureExists(featureName);
        }
        getRelation() {
            return this.relation;
        }
        setRelation(relation) {
            this.relation = relation;
        }
        getDeps() {
            return this.deps;
        }
        getMisc() {
            return this.misc;
        }
        toString() {
            return this.id + "\t" + this.name + "\t" + this.lemma + "\t" + this.upos + "\t" +
                this.xpos + "\t" + this.features.toString() + "\t" + this.relation.to() + "\t" +
                this.relation.toString().toLowerCase() + "\t" + this.deps + "\t" + this.misc;
        }
    }
    exports.UniversalDependencyTreeBankWord = UniversalDependencyTreeBankWord;
});
//# sourceMappingURL=UniversalDependencyTreeBankWord.js.map