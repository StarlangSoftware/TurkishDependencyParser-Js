import { Corpus } from "nlptoolkit-corpus/dist/Corpus";
import { ParserEvaluationScore } from "../ParserEvaluationScore";
export declare class UniversalDependencyTreeBankCorpus extends Corpus {
    private language;
    constructor(fileName: string);
    compareParses(corpus: UniversalDependencyTreeBankCorpus): ParserEvaluationScore;
}
