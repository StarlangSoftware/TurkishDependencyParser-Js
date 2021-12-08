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
    exports.DependencyRelation = void 0;
    class DependencyRelation {
        /**
         * Constructor for a {@link DependencyRelation}. Takes toWord as a parameter and sets the corresponding attribute.
         * @param toWord Index of the word in the sentence that dependency relation is related
         */
        constructor(toWord) {
            this.toWord = toWord;
        }
        /**
         * Accessor for toWord attribute
         * @return toWord attribute value
         */
        to() {
            return this.toWord;
        }
    }
    exports.DependencyRelation = DependencyRelation;
});
//# sourceMappingURL=DependencyRelation.js.map