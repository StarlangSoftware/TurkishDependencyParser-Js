import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import * as fs from "fs";
import {UniversalDependencyTreeBankSentence} from "./UniversalDependencyTreeBankSentence";
import {ParserEvaluationScore} from "../ParserEvaluationScore";

export class UniversalDependencyTreeBankCorpus extends Corpus{

    constructor(fileName: string) {
        super();
        let sentence = ""
        let data = fs.readFileSync(fileName, 'utf8')
        let lines = data.split("\n")
        for (let line of lines){
            if (line.length == 0){
                this.addSentence(new UniversalDependencyTreeBankSentence(sentence));
                sentence = "";
            } else {
                sentence += line + "\n";
            }
        }
    }

    compareParses(corpus: UniversalDependencyTreeBankCorpus): ParserEvaluationScore{
        let score = new ParserEvaluationScore();
        for (let i = 0; i < this.sentences.length; i++){
            score.add((<UniversalDependencyTreeBankSentence> this.sentences[i]).compareParses(<UniversalDependencyTreeBankSentence> corpus.getSentence(i)));
        }
        return score;
    }
}