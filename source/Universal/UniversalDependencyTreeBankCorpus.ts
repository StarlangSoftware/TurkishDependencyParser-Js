import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import * as fs from "fs";
import {UniversalDependencyTreeBankSentence} from "./UniversalDependencyTreeBankSentence";
import {ParserEvaluationScore} from "../ParserEvaluationScore";

export class UniversalDependencyTreeBankCorpus extends Corpus{

    private readonly language: string

    /**
     * Constructs a universal dependency corpus from an input file. Reads the sentences one by one and constructs a
     * universal dependency sentence from each line read.
     * @param fileName Input file name.
     */
    constructor(fileName?: string) {
        super();
        if (fileName != undefined){
            let sentence = ""
            this.language = fileName.substring(0, fileName.indexOf('_'));
            let data = fs.readFileSync(fileName, 'utf8')
            let lines = data.split("\n")
            for (let line of lines){
                if (line.length == 0 && sentence.length != 0){
                    this.addSentence(new UniversalDependencyTreeBankSentence(this.language, sentence));
                    sentence = "";
                } else {
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
    compareParses(corpus: UniversalDependencyTreeBankCorpus): ParserEvaluationScore{
        let score = new ParserEvaluationScore();
        for (let i = 0; i < this.sentences.length; i++){
            score.add((<UniversalDependencyTreeBankSentence> this.sentences[i]).compareParses(<UniversalDependencyTreeBankSentence> corpus.getSentence(i)));
        }
        return score;
    }
}