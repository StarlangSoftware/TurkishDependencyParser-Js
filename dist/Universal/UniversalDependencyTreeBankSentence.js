(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Sentence", "./UniversalDependencyTreeBankWord", "../ParserEvaluationScore", "./UniversalDependencyRelation", "./UniversalDependencyTreeBankFeatures"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankSentence = void 0;
    const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
    const UniversalDependencyTreeBankWord_1 = require("./UniversalDependencyTreeBankWord");
    const ParserEvaluationScore_1 = require("../ParserEvaluationScore");
    const UniversalDependencyRelation_1 = require("./UniversalDependencyRelation");
    const UniversalDependencyTreeBankFeatures_1 = require("./UniversalDependencyTreeBankFeatures");
    class UniversalDependencyTreeBankSentence extends Sentence_1.Sentence {
        /**
         * Constructor for the UniversalDependencyTreeBankSentence.  Get a line as input and splits the line wrt tab
         * character. The number of items should be 10. The items are id, surfaceForm, lemma, upos, xpos, feature list,
         * head word index, dependency type, external dependencies and miscellaneous things for one word.
         * @param language Language name. Currently, 'en' and 'tr' languages are supported.
         * @param sentence Sentence string to be processed.
         */
        constructor(language, sentence) {
            super();
            this.comments = new Array();
            if (language != undefined) {
                let lines = sentence.split("\n");
                for (let line of lines) {
                    if (line == "") {
                        continue;
                    }
                    if (line.startsWith("#")) {
                        this.addComment(line.trim());
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
                                let features = new UniversalDependencyTreeBankFeatures_1.UniversalDependencyTreeBankFeatures(language, items[5]);
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
                                this.addWord(word);
                            }
                        }
                    }
                }
            }
        }
        /**
         * Adds a comment string to comments array list.
         * @param comment Comment to be added.
         */
        addComment(comment) {
            this.comments.push(comment);
        }
        /**
         * Overridden toString method. Concatenates the strings of words to get the string of a sentence.
         * @return Concatenation of the strings of thw strings of words.
         */
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
        /**
         * Compares the sentence with the given sentence and returns a parser evaluation score for this comparison. The result
         * is calculated by summing up the parser evaluation scores of word by word dpendency relation comparisons.
         * @param sentence Universal dependency sentence to be compared.
         * @return A parser evaluation score object.
         */
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