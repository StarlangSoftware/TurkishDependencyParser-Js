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
        /**
         * Default constructor for the universal dependency word. Sets the attributes to default values.
         */
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
        /**
         * Constructor of the universal dependency word. Sets the attributes.
         * @param id Id of the word
         * @param lemma Lemma of the word
         * @param upos Universal part of speech tag.
         * @param xpos Extra part of speech tag
         * @param features Feature list of the word
         * @param relation Universal dependency relation of the word
         * @param deps External dependencies for the word
         * @param misc Miscellaneous information for the word.
         */
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
        /**
         * Accessor for the id attribute.
         * @return Id attribute
         */
        getId() {
            return this.id;
        }
        /**
         * Accessor for the lemma attribute
         * @return Lemma attribute
         */
        getLemma() {
            return this.lemma;
        }
        /**
         * Accessor for the upos attribute
         * @return Upos attribute
         */
        getUpos() {
            return this.upos;
        }
        /**
         * Accessor for the xpos attribute
         * @return Xpos attribute
         */
        getXpos() {
            return this.xpos;
        }
        /**
         * Accessor for the features attribute
         * @return Features attribute
         */
        getFeatures() {
            return this.features;
        }
        /**
         * Gets the value of a given feature.
         * @param featureName Name of the feature
         * @return Value of the feature
         */
        getFeatureValue(featureName) {
            return this.features.getFeatureValue(featureName);
        }
        /**
         * Checks if the given feature exists.
         * @param featureName Name of the feature
         * @return True if the given feature exists, false otherwise.
         */
        featureExists(featureName) {
            return this.features.featureExists(featureName);
        }
        /**
         * Accessor for the relation attribute.
         * @return Relation attribute
         */
        getRelation() {
            return this.relation;
        }
        /**
         * Mutator for the relation attribute
         * @param relation New relation attribute
         */
        setRelation(relation) {
            this.relation = relation;
        }
        /**
         * Accessor for the deps attribute
         * @return Xpos attribute
         */
        getDeps() {
            return this.deps;
        }
        /**
         * Accessor for the misc attribute
         * @return Misc attribute
         */
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