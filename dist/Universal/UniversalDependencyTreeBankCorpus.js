(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Corpus", "fs", "./UniversalDependencyTreeBankSentence", "./UniversalDependencyRelation", "./UniversalDependencyTreeBankFeatures", "./UniversalDependencyTreeBankWord", "../ParserEvaluationScore"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankCorpus = void 0;
    const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
    const fs = require("fs");
    const UniversalDependencyTreeBankSentence_1 = require("./UniversalDependencyTreeBankSentence");
    const UniversalDependencyRelation_1 = require("./UniversalDependencyRelation");
    const UniversalDependencyTreeBankFeatures_1 = require("./UniversalDependencyTreeBankFeatures");
    const UniversalDependencyTreeBankWord_1 = require("./UniversalDependencyTreeBankWord");
    const ParserEvaluationScore_1 = require("../ParserEvaluationScore");
    class UniversalDependencyTreeBankCorpus extends Corpus_1.Corpus {
        constructor(fileName) {
            super();
            let sentence = undefined;
            let data = fs.readFileSync(fileName, 'utf8');
            let lines = data.split("\n");
            for (let line of lines) {
                if (line.length == 0) {
                    this.addSentence(sentence);
                    sentence = undefined;
                }
                else {
                    if (line.startsWith("#")) {
                        if (sentence == null) {
                            sentence = new UniversalDependencyTreeBankSentence_1.UniversalDependencyTreeBankSentence();
                        }
                        sentence.addComment(line.trim());
                    }
                    else {
                        let items = line.split("\t");
                        if (items.length != 10) {
                            console.log("Line does not contain 10 items ->" + line);
                        }
                        else {
                            let id = items[0];
                            if (id.match("^\\d+$")) {
                                let surfaceForm = items[1];
                                let lemma = items[2];
                                let upos = UniversalDependencyRelation_1.UniversalDependencyRelation.getDependencyPosType(items[3]);
                                if (upos == undefined) {
                                    console.log("Line does not contain universal pos ->" + line);
                                }
                                let xpos = items[4];
                                let features = new UniversalDependencyTreeBankFeatures_1.UniversalDependencyTreeBankFeatures(items[5]);
                                let relation;
                                if (items[6] != "_") {
                                    let to = Number.parseInt(items[6]);
                                    let dependencyType = items[7].toUpperCase();
                                    relation = new UniversalDependencyRelation_1.UniversalDependencyRelation(to, dependencyType);
                                }
                                else {
                                    relation = undefined;
                                }
                                let deps = items[8];
                                let misc = items[9];
                                let word = new UniversalDependencyTreeBankWord_1.UniversalDependencyTreeBankWord(Number.parseInt(id), surfaceForm, lemma, upos, xpos, features, relation, deps, misc);
                                sentence.addWord(word);
                            }
                        }
                    }
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