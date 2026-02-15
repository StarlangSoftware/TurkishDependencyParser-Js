"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalDependencyTreeBankCorpus = void 0;
const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
const fs = __importStar(require("fs"));
const UniversalDependencyTreeBankSentence_1 = require("./UniversalDependencyTreeBankSentence");
const ParserEvaluationScore_1 = require("../ParserEvaluationScore");
class UniversalDependencyTreeBankCorpus extends Corpus_1.Corpus {
    language;
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
                if (line.length == 0 && sentence.length != 0) {
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
//# sourceMappingURL=UniversalDependencyTreeBankCorpus.js.map