(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Sentence", "./TurkishDependencyTreeBankWord"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishDependencyTreeBankSentence = void 0;
    const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
    const TurkishDependencyTreeBankWord_1 = require("./TurkishDependencyTreeBankWord");
    class TurkishDependencyTreeBankSentence extends Sentence_1.Sentence {
        /**
         * Given the parsed xml node which contains information about a sentence, the method constructs a
         * {@link TurkishDependencyTreeBankSentence} from it.
         * @param sentenceNode Xml parsed node containing information about a sentence.
         */
        constructor(sentenceNode) {
            super();
            let wordNode = sentenceNode.getFirstChild();
            while (wordNode != null) {
                let word = new TurkishDependencyTreeBankWord_1.TurkishDependencyTreeBankWord(wordNode);
                this.words.push(word);
                wordNode = wordNode.getNextSibling();
            }
        }
        /**
         * Calculates the maximum of all word to related word distances, where the distances are calculated in terms of
         * index differences.
         * @return Maximum of all word to related word distances.
         */
        maxDependencyLength() {
            let max = 0;
            for (let i = 0; i < this.words.length; i++) {
                let word = this.words[i];
                if (word.getRelation() != null && word.getRelation().to() - i > max) {
                    max = word.getRelation().to() - i;
                }
            }
            return max;
        }
    }
    exports.TurkishDependencyTreeBankSentence = TurkishDependencyTreeBankSentence;
});
//# sourceMappingURL=TurkishDependencyTreeBankSentence.js.map