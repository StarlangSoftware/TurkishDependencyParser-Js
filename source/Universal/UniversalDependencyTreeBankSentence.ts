import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {UniversalDependencyTreeBankWord} from "./UniversalDependencyTreeBankWord";
import {ParserEvaluationScore} from "../ParserEvaluationScore";
import {UniversalDependencyRelation} from "./UniversalDependencyRelation";
import {UniversalDependencyTreeBankFeatures} from "./UniversalDependencyTreeBankFeatures";

export class UniversalDependencyTreeBankSentence extends Sentence{

    private comments: Array<string> = new Array<string>()
    private splits: Array<string> = new Array<string>();

    /**
     * Constructor for the UniversalDependencyTreeBankSentence.  Get a line as input and splits the line wrt tab
     * character. The number of items should be 10. The items are id, surfaceForm, lemma, upos, xpos, feature list,
     * head word index, dependency type, external dependencies and miscellaneous things for one word.
     * @param language Language name. Currently, 'en' and 'tr' languages are supported.
     * @param sentence Sentence string to be processed.
     */
    constructor(language?: string, sentence?: string) {
        super();
        if (language != undefined){
            let lines = sentence.split("\n")
            for (let line of lines){
                if (line == ""){
                    continue
                }
                if (line.startsWith("#")){
                    this.addComment(line.trim());
                } else {
                    let items = line.split("\t");
                    if (items.length != 10){
                        console.log("Line does not contain 10 items ->" + line);
                    } else {
                        let id = items[0];
                        if (id.match("^\\d+$")){
                            let surfaceForm = items[1];
                            let lemma = items[2];
                            let upos = UniversalDependencyRelation.getDependencyPosType(items[3]);
                            if (upos == undefined){
                                console.log("Line does not contain universal pos ->" + line);
                            }
                            let xpos = items[4];
                            let features = new UniversalDependencyTreeBankFeatures(language, items[5]);
                            let relation
                            if (items[6] != "_"){
                                let to = Number.parseInt(items[6]);
                                let dependencyType = items[7].toUpperCase();
                                relation = new UniversalDependencyRelation(to, dependencyType);
                            } else {
                                relation = undefined;
                            }
                            let deps = items[8];
                            let misc = items[9];
                            let word = new UniversalDependencyTreeBankWord(Number.parseInt(id), surfaceForm,
                                lemma, upos, xpos, features, relation, deps, misc);
                            this.addWord(word);
                        } else {
                            if (id.match("^\\d+-\\d+$")){
                                this.splits.push(id);
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Adds a comment string to comments array list.
     * @param comment Comment to be added.
     */
    addComment(comment: string){
        this.comments.push(comment)
    }

    /**
     * Returns number of splits in the sentence
     * @return Number of splits in the sentence
     */
    splitSize(): number{
        return this.splits.length
    }

    /**
     * Returns the split at position index
     * @param index Position
     * @return The split at position index
     */
    getSplit(index: number): string{
        return this.splits[index];
    }

    /**
     * Overridden toString method. Concatenates the strings of words to get the string of a sentence.
     * @return Concatenation of the strings of thw strings of words.
     */
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

    /**
     * Compares the sentence with the given sentence and returns a parser evaluation score for this comparison. The result
     * is calculated by summing up the parser evaluation scores of word by word dpendency relation comparisons.
     * @param sentence Universal dependency sentence to be compared.
     * @return A parser evaluation score object.
     */
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