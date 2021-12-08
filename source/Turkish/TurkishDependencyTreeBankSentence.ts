import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {XmlElement} from "nlptoolkit-xmlparser/dist/XmlElement";
import {TurkishDependencyTreeBankWord} from "./TurkishDependencyTreeBankWord";

export class TurkishDependencyTreeBankSentence extends Sentence{

    /**
     * Given the parsed xml node which contains information about a sentence, the method constructs a
     * {@link TurkishDependencyTreeBankSentence} from it.
     * @param sentenceNode Xml parsed node containing information about a sentence.
     */
    constructor(sentenceNode: XmlElement) {
        super();
        let wordNode = sentenceNode.getFirstChild();
        while (wordNode != null){
            let word = new TurkishDependencyTreeBankWord(wordNode);
            this.words.push(word);
            wordNode = wordNode.getNextSibling();
        }
    }

    /**
     * Calculates the maximum of all word to related word distances, where the distances are calculated in terms of
     * index differences.
     * @return Maximum of all word to related word distances.
     */
    maxDependencyLength(): number{
        let max = 0;
        for (let i = 0; i < this.words.length; i++){
            let word = <TurkishDependencyTreeBankWord> this.words[i];
            if (word.getRelation() != null && word.getRelation().to() - i > max){
                max = word.getRelation().to() - i;
            }
        }
        return max;
    }
}