export declare class ParserEvaluationScore {
    private LAS;
    private UAS;
    private LS;
    private wordCount;
    constructor(LAS?: number, UAS?: number, LS?: number, wordCount?: number);
    getLS(): number;
    getLAS(): number;
    getUAS(): number;
    getWordCount(): number;
    add(parserEvaluationScore: ParserEvaluationScore): void;
}
