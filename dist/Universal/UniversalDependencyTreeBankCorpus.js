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
        constructor(fileName) {
            super();
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