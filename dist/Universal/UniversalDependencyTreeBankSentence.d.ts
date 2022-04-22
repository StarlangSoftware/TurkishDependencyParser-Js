import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { ParserEvaluationScore } from "../ParserEvaluationScore";
export declare class UniversalDependencyTreeBankSentence extends Sentence {
    private comments;
    constructor(sentence?: string);
    addComment(comment: string): void;
    toString(): string;
    compareParses(sentence: UniversalDependencyTreeBankSentence): ParserEvaluationScore;
}
