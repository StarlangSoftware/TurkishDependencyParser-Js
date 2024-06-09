import { Corpus } from "nlptoolkit-corpus/dist/Corpus";
import { ParserEvaluationScore } from "../ParserEvaluationScore";
export declare class UniversalDependencyTreeBankCorpus extends Corpus {
    private readonly language;
    /**
     * Constructs a universal dependency corpus from an input file. Reads the sentences one by one and constructs a
     * universal dependency sentence from each line read.
     * @param fileName Input file name.
     */
    constructor(fileName?: string);
    /**
     * Compares the corpus with the given corpus and returns a parser evaluation score for this comparison. The result
     * is calculated by summing up the parser evaluation scores of sentence by sentence comparisons.
     * @param corpus Universal dependency corpus to be compared.
     * @return A parser evaluation score object.
     */
    compareParses(corpus: UniversalDependencyTreeBankCorpus): ParserEvaluationScore;
}
