(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Corpus", "fs", "./UniversalDependencyTreeBankSentence", "../ParserEvaluationScore"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankCorpus = void 0;
    const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
    const fs = require("fs");
    const UniversalDependencyTreeBankSentence_1 = require("./UniversalDependencyTreeBankSentence");
    const ParserEvaluationScore_1 = require("../ParserEvaluationScore");
    class UniversalDependencyTreeBankCorpus extends Corpus_1.Corpus {
        /**
         * Constructs a universal dependency corpus from an input file. Reads the sentences one by one and constructs a
         * universal dependency sentence from each line read.
         * @param fileName Input file name.
         */
        constructor(fileName) {
            super();
            if (fileName != undefined) {
                let sentence = "";
                this.language = fileName.substring(0, fileName.indexOf('_'));
                let data = fs.readFileSync(fileName, 'utf8');
                let lines = data.split("\n");
                for (let line of lines) {
                    if (line.length == 0) {
                        this.addSentence(new UniversalDependencyTreeBankSentence_1.UniversalDependencyTreeBankSentence(this.language, sentence));
                        sentence = "";
                    }
                    else {
                        sentence += line + "\n";
                    }
                }
            }
        }
        /**
         * Compares the corpus with the given corpus and returns a parser evaluation score for this comparison. The result
         * is calculated by summing up the parser evaluation scores of sentence by sentence comparisons.
         * @param corpus Universal dependency corpus to be compared.
         * @return A parser evaluation score object.
         */
        compareParses(corpus) {
            let score = new ParserEvaluationScore_1.ParserEvaluationScore();
            for (let i = 0; i < this.sentences.length; i++) {
                score.add(this.sentences[i].compareParses(corpus.getSentence(i)));
            }
            return score;
        }
    }
    exports.UniversalDependencyTreeBankCorpus = UniversalDependencyTreeBankCorpus;
});
//# sourceMappingURL=UniversalDependencyTreeBankCorpus.js.map