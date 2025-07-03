import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { ParserEvaluationScore } from "../ParserEvaluationScore";
export declare class UniversalDependencyTreeBankSentence extends Sentence {
    private comments;
    private splits;
    /**
     * Constructor for the UniversalDependencyTreeBankSentence.  Get a line as input and splits the line wrt tab
     * character. The number of items should be 10. The items are id, surfaceForm, lemma, upos, xpos, feature list,
     * head word index, dependency type, external dependencies and miscellaneous things for one word.
     * @param language Language name. Currently, 'en' and 'tr' languages are supported.
     * @param sentence Sentence string to be processed.
     */
    constructor(language?: string, sentence?: string);
    /**
     * Adds a comment string to comments array list.
     * @param comment Comment to be added.
     */
    addComment(comment: string): void;
    /**
     * Returns number of splits in the sentence
     * @return Number of splits in the sentence
     */
    splitSize(): number;
    /**
     * Returns the split at position index
     * @param index Position
     * @return The split at position index
     */
    getSplit(index: number): string;
    /**
     * Overridden toString method. Concatenates the strings of words to get the string of a sentence.
     * @return Concatenation of the strings of thw strings of words.
     */
    toString(): string;
    /**
     * Compares the sentence with the given sentence and returns a parser evaluation score for this comparison. The result
     * is calculated by summing up the parser evaluation scores of word by word dpendency relation comparisons.
     * @param sentence Universal dependency sentence to be compared.
     * @return A parser evaluation score object.
     */
    compareParses(sentence: UniversalDependencyTreeBankSentence): ParserEvaluationScore;
}
