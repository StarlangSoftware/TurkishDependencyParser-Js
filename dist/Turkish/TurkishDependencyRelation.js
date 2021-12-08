(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TurkishDependencyType", "../DependencyRelation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishDependencyRelation = void 0;
    const TurkishDependencyType_1 = require("./TurkishDependencyType");
    const DependencyRelation_1 = require("../DependencyRelation");
    class TurkishDependencyRelation extends DependencyRelation_1.DependencyRelation {
        /**
         * Another constructor for TurkishDependencyRelation. Gets input toWord, toIG, and dependencyType as arguments and
         * calls the super class's constructor and sets the IG and dependency type.
         * @param toWord Index of the word in the sentence that dependency relation is related
         * @param toIG Index of the inflectional group the dependency relation is related
         * @param dependencyType Type of the dependency relation in string form
         */
        constructor(toWord, toIG, dependencyType) {
            super(toWord);
            this._toIG = toIG;
            this.turkishDependencyType = TurkishDependencyRelation.getDependencyTag(dependencyType);
            if (this.turkishDependencyType == undefined) {
                console.log("Dependency Tag " + dependencyType + " does not exist\n");
            }
        }
        /**
         * The getDependencyTag method takes an dependency tag as string and returns the {@link TurkishDependencyType}
         * form of it.
         *
         * @param tag  Type of the dependency tag in string form
         * @return Type of the dependency in {@link TurkishDependencyType} form
         */
        static getDependencyTag(tag) {
            for (let j = 0; j < TurkishDependencyRelation.turkishDependencyTypes.length; j++) {
                if (tag.toUpperCase() == TurkishDependencyRelation.turkishDependencyTypes[j]) {
                    return TurkishDependencyRelation.turkishDependencyTags[j];
                }
            }
            return undefined;
        }
        /**
         * Accessor for the toIG attribute
         * @return toIG attribute
         */
        toIG() {
            return this._toIG;
        }
        /**
         * Accessor for the turkishDependencyType attribute
         * @return turkishDependencyType attribute
         */
        getTurkishDependencyType() {
            return this.turkishDependencyType;
        }
        toString() {
            return TurkishDependencyRelation.turkishDependencyTypes[this.turkishDependencyType];
        }
    }
    exports.TurkishDependencyRelation = TurkishDependencyRelation;
    TurkishDependencyRelation.turkishDependencyTypes = ["VOCATIVE", "SUBJECT", "DATIVE.ADJUNCT", "OBJECT", "POSSESSOR",
        "MODIFIER", "S.MODIFIER", "ABLATIVE.ADJUNCT", "DETERMINER", "SENTENCE",
        "CLASSIFIER", "LOCATIVE.ADJUNCT", "COORDINATION", "QUESTION.PARTICLE", "INTENSIFIER",
        "INSTRUMENTAL.ADJUNCT", "RELATIVIZER", "NEGATIVE.PARTICLE", "ETOL", "COLLOCATION",
        "FOCUS.PARTICLE", "EQU.ADJUNCT", "APPOSITION"];
    TurkishDependencyRelation.turkishDependencyTags = [TurkishDependencyType_1.TurkishDependencyType.VOCATIVE, TurkishDependencyType_1.TurkishDependencyType.SUBJECT, TurkishDependencyType_1.TurkishDependencyType.DATIVE_ADJUNCT, TurkishDependencyType_1.TurkishDependencyType.OBJECT, TurkishDependencyType_1.TurkishDependencyType.POSSESSOR,
        TurkishDependencyType_1.TurkishDependencyType.MODIFIER, TurkishDependencyType_1.TurkishDependencyType.S_MODIFIER, TurkishDependencyType_1.TurkishDependencyType.ABLATIVE_ADJUNCT, TurkishDependencyType_1.TurkishDependencyType.DETERMINER, TurkishDependencyType_1.TurkishDependencyType.SENTENCE,
        TurkishDependencyType_1.TurkishDependencyType.CLASSIFIER, TurkishDependencyType_1.TurkishDependencyType.LOCATIVE_ADJUNCT, TurkishDependencyType_1.TurkishDependencyType.COORDINATION, TurkishDependencyType_1.TurkishDependencyType.QUESTION_PARTICLE, TurkishDependencyType_1.TurkishDependencyType.INTENSIFIER,
        TurkishDependencyType_1.TurkishDependencyType.INSTRUMENTAL_ADJUNCT, TurkishDependencyType_1.TurkishDependencyType.RELATIVIZER, TurkishDependencyType_1.TurkishDependencyType.NEGATIVE_PARTICLE, TurkishDependencyType_1.TurkishDependencyType.ETOL, TurkishDependencyType_1.TurkishDependencyType.COLLOCATION,
        TurkishDependencyType_1.TurkishDependencyType.FOCUS_PARTICLE, TurkishDependencyType_1.TurkishDependencyType.EQU_ADJUNCT, TurkishDependencyType_1.TurkishDependencyType.APPOSITION];
});
//# sourceMappingURL=TurkishDependencyRelation.js.map