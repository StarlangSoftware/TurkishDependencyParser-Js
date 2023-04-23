import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {UniversalDependencyTreeBankWord} from "./UniversalDependencyTreeBankWord";
import {ParserEvaluationScore} from "../ParserEvaluationScore";
import {UniversalDependencyRelation} from "./UniversalDependencyRelation";
import {UniversalDependencyTreeBankFeatures} from "./UniversalDependencyTreeBankFeatures";

export class UniversalDependencyTreeBankSentence extends Sentence{

    private comments: Array<string> = new Array<string>()

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
                        }
                    }
                }
            }
        }
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