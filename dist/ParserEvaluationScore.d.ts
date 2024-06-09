export declare class ParserEvaluationScore {
    private LAS;
    private UAS;
    private LS;
    private wordCount;
    /**
     * Another constructor of the parser evaluation score object.
     * @param LAS Label attachment score
     * @param UAS Unlabelled attachment score
     * @param LS Label score
     * @param wordCount Number of words evaluated
     */
    constructor(LAS?: number, UAS?: number, LS?: number, wordCount?: number);
    /**
     * Accessor for the LS field
     * @return Label score
     */
    getLS(): number;
    /**
     * Accessor for the LAS field
     * @return Label attachment score
     */
    getLAS(): number;
    /**
     * Accessor for the UAS field
     * @return Unlabelled attachment score
     */
    getUAS(): number;
    /**
     * Accessor for the word count field
     * @return Number of words evaluated
     */
    getWordCount(): number;
    /**
     * Adds a parser evaluation score to the current evaluation score.
     * @param parserEvaluationScore Parser evaluation score to be added.
     */
    add(parserEvaluationScore: ParserEvaluationScore): void;
}
