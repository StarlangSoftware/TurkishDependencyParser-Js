import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {UniversalDependencyTreeBankWord} from "./UniversalDependencyTreeBankWord";
import {ParserEvaluationScore} from "../ParserEvaluationScore";

export class UniversalDependencyTreeBankSentence extends Sentence{

    private comments: Array<string> = new Array<string>()

    constructor() {
        super();
    }

    addComment(comment: string){
        this.comments.push(comment)
    }

    toString(): string{
        let result = "";
        for (let comment of this.comments){
            result += comment + "\n";
        }
        for (let w of this.words){
            let word = <UniversalDependencyTreeBankWord> w;
            result += word.toString() + "\n";
        }
        return result;
    }

    compareParses(sentence: UniversalDependencyTreeBankSentence): ParserEvaluationScore{
        let score = new ParserEvaluationScore();
        for (let i = 0; i < this.words.length; i++){
            let relation1 = (<UniversalDependencyTreeBankWord> this.words[i]).getRelation();
            let relation2 = (<UniversalDependencyTreeBankWord> sentence.getWord(i)).getRelation();
            if (relation1 != undefined && relation2 != undefined){
                score.add(relation1.compareRelations(relation2));
            }
        }
        return score;
    }
}