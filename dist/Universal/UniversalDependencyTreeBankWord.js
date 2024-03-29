(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Dictionary/Word", "./UniversalDependencyRelation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankWord = void 0;
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    const UniversalDependencyRelation_1 = require("./UniversalDependencyRelation");
    class UniversalDependencyTreeBankWord extends Word_1.Word {
        constructor(id, name, lemma, upos, xpos, features, relation, deps, misc) {
            if (id == undefined) {
                super("root");
                this.constructor1();
            }
            else {
                super(name);
                this.constructor2(id, lemma, upos, xpos, features, relation, deps, misc);
            }
        }
        constructor1() {
            this.id = 0;
            this.lemma = "";
            this.upos = null;
            this.xpos = "";
            this.features = null;
            this.deps = "";
            this.misc = "";
            this.relation = new UniversalDependencyRelation_1.UniversalDependencyRelation(-1, "DEP");
        }
        constructor2(id, lemma, upos, xpos, features, relation, deps, misc) {
            this.id = id;
            this.lemma = lemma;
            this.upos = upos;
            this.xpos = xpos;
            this.deps = deps;
            this.features = features;
            this.relation = relation;
            this.misc = misc;
        }
        clone() {
            let word = new UniversalDependencyTreeBankWord(this.id, this.name, this.lemma, this.upos, this.xpos, null, null, this.deps, this.misc);
            word.features = this.features.clone();
            if (this.relation != null) {
                word.relation = this.relation.clone();
            }
            else {
                this.relation = null;
            }
            return word;
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