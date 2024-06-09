export class ParserEvaluationScore {

    private LAS : number = 0.0
    private UAS : number = 0.0
    private LS : number = 0.0
    private wordCount : number = 0

    /**
     * Another constructor of the parser evaluation score object.
     * @param LAS Label attachment score
     * @param UAS Unlabelled attachment score
     * @param LS Label score
     * @param wordCount Number of words evaluated
     */
    constructor(LAS: number = 0.0, UAS: number = 0.0, LS: number = 0.0, wordCount: number = 0) {
        this.LAS = LAS
        this.UAS = UAS
        this.LS = LS
        this.wordCount = wordCount
    }

    /**
     * Accessor for the LS field
     * @return Label score
     */
    getLS(): number{
        return this.LS
    }

    /**
     * Accessor for the LAS field
     * @return Label attachment score
     */
    getLAS(): number{
        return this.LAS
    }

    /**
     * Accessor for the UAS field
     * @return Unlabelled attachment score
     */
    getUAS(): number{
        return this.UAS
    }

    /**
     * Accessor for the word count field
     * @return Number of words evaluated
     */
    getWordCount(): number{
        return this.wordCount
    }

    /**
     * Adds a parser evaluation score to the current evaluation score.
     * @param parserEvaluationScore Parser evaluation score to be added.
     */
    add(parserEvaluationScore: ParserEvaluationScore){
        this.LAS = (this.LAS * this.wordCount + parserEvaluationScore.LAS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
        this.UAS = (this.UAS * this.wordCount + parserEvaluationScore.UAS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
        this.LS = (this.LS * this.wordCount + parserEvaluationScore.LS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
        this.wordCount += parserEvaluationScore.wordCount;
    }
}