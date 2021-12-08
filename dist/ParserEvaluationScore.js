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
    exports.ParserEvaluationScore = void 0;
    class ParserEvaluationScore {
        constructor(LAS = 0.0, UAS = 0.0, LS = 0.0, wordCount = 0) {
            this.LAS = 0.0;
            this.UAS = 0.0;
            this.LS = 0.0;
            this.wordCount = 0;
            this.LAS = LAS;
            this.UAS = UAS;
            this.LS = LS;
            this.wordCount = wordCount;
        }
        getLS() {
            return this.LS;
        }
        getLAS() {
            return this.LAS;
        }
        getUAS() {
            return this.UAS;
        }
        getWordCount() {
            return this.wordCount;
        }
        add(parserEvaluationScore) {
            this.LAS = (this.LAS * this.wordCount + parserEvaluationScore.LAS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
            this.UAS = (this.UAS * this.wordCount + parserEvaluationScore.UAS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
            this.LS = (this.LS * this.wordCount + parserEvaluationScore.LS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
            this.wordCount += parserEvaluationScore.wordCount;
        }
    }
    exports.ParserEvaluationScore = ParserEvaluationScore;
});
//# sourceMappingURL=ParserEvaluationScore.js.map