export class ParserEvaluationScore {

    private LAS : number = 0.0
    private UAS : number = 0.0
    private LS : number = 0.0
    private wordCount : number = 0

    constructor(LAS: number = 0.0, UAS: number = 0.0, LS: number = 0.0, wordCount: number = 0) {
        this.LAS = LAS
        this.UAS = UAS
        this.LS = LS
        this.wordCount = wordCount
    }

    getLS(): number{
        return this.LS
    }

    getLAS(): number{
        return this.LAS
    }

    getUAS(): number{
        return this.UAS
    }

    getWordCount(): number{
        return this.wordCount
    }

    add(parserEvaluationScore: ParserEvaluationScore){
        this.LAS = (this.LAS * this.wordCount + parserEvaluationScore.LAS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
        this.UAS = (this.UAS * this.wordCount + parserEvaluationScore.UAS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
        this.LS = (this.LS * this.wordCount + parserEvaluationScore.LS * parserEvaluationScore.wordCount) / (this.wordCount + parserEvaluationScore.wordCount);
        this.wordCount += parserEvaluationScore.wordCount;
    }
}