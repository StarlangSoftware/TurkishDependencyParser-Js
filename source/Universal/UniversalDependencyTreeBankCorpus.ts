import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import * as fs from "fs";
import {UniversalDependencyTreeBankSentence} from "./UniversalDependencyTreeBankSentence";
import {UniversalDependencyRelation} from "./UniversalDependencyRelation";
import {UniversalDependencyTreeBankFeatures} from "./UniversalDependencyTreeBankFeatures";
import {UniversalDependencyTreeBankWord} from "./UniversalDependencyTreeBankWord";
import {ParserEvaluationScore} from "../ParserEvaluationScore";

export class UniversalDependencyTreeBankCorpus extends Corpus{

    constructor(fileName: string) {
        super();
        let sentence = undefined
        let data = fs.readFileSync(fileName, 'utf8')
        let lines = data.split("\n")
        for (let line of lines){
            if (line.length == 0){
                this.addSentence(sentence);
                sentence = undefined;
            } else {
                if (line.startsWith("#")){
                    if (sentence == null){
                        sentence = new UniversalDependencyTreeBankSentence();
                    }
                    sentence.addComment(line.trim());
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
                            let features = new UniversalDependencyTreeBankFeatures(items[5]);
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
                            sentence.addWord(word);
                        }
                    }
                }
            }
        }
    }

    compareParses(corpus: UniversalDependencyTreeBankCorpus): ParserEvaluationScore{
        let score = new ParserEvaluationScore();
        for (let i = 0; i < this.sentences.length; i++){
            score.add((<UniversalDependencyTreeBankSentence> this.sentences[i]).compareParses(<UniversalDependencyTreeBankSentence> corpus.getSentence(i)));
        }
        return score;
    }
}