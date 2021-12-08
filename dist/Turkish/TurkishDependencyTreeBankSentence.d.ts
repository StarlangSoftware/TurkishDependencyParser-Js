import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
import { XmlElement } from "nlptoolkit-xmlparser/dist/XmlElement";
export declare class TurkishDependencyTreeBankSentence extends Sentence {
    /**
     * Given the parsed xml node which contains information about a sentence, the method constructs a
     * {@link TurkishDependencyTreeBankSentence} from it.
     * @param sentenceNode Xml parsed node containing information about a sentence.
     */
    constructor(sentenceNode: XmlElement);
    /**
     * Calculates the maximum of all word to related word distances, where the distances are calculated in terms of
     * index differences.
     * @return Maximum of all word to related word distances.
     */
    maxDependencyLength(): number;
}
