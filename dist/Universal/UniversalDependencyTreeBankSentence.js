(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Sentence", "../ParserEvaluationScore"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankSentence = void 0;
    const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
    const ParserEvaluationScore_1 = require("../ParserEvaluationScore");
    class UniversalDependencyTreeBankSentence extends Sentence_1.Sentence {
        constructor() {
            super();
            this.comments = new Array();
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let result = "";
            for (let comment of this.comments) {
                result += comment + "\n";
            }
            for (let w of this.words) {
                let word = w;
                result += word.toString() + "\n";
            }
            return result;
        }
        compareParses(sentence) {
            let score = new ParserEvaluationScore_1.ParserEvaluationScore();
            for (let i = 0; i < this.words.length; i++) {
                let relation1 = this.words[i].getRelation();
                let relation2 = sentence.getWord(i).getRelation();
                if (relation1 != undefined && relation2 != undefined) {
                    score.add(relation1.compareRelations(relation2));
                }
            }
            return score;
        }
    }
    exports.UniversalDependencyTreeBankSentence = UniversalDependencyTreeBankSentence;
});
//# sourceMappingURL=UniversalDependencyTreeBankSentence.js.map