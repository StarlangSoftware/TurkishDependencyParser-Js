import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import {XmlDocument} from "nlptoolkit-xmlparser/dist/XmlDocument";
import {TurkishDependencyTreeBankSentence} from "./TurkishDependencyTreeBankSentence";

export class TurkishDependencyTreeBankCorpus extends Corpus{

    /**
     * Another constructor for {@link TurkishDependencyTreeBankCorpus}. The method gets the corpus as a xml file, and
     * reads sentences one by one. For each sentence, the function constructs a TurkishDependencyTreeBankSentence.
     * @param fileName Input file name to read the TurkishDependencyTreeBankCorpus.
     */
    constructor(fileName: string) {
        super();
        let doc = new XmlDocument(fileName);
        doc.parse();
        let rootNode = doc.getFirstChild();
        let sentenceNode = rootNode.getFirstChild();
        while (sentenceNode != undefined){
            let sentence = new TurkishDependencyTreeBankSentence(sentenceNode);
            this.addSentence(sentence);
            sentenceNode = sentenceNode.getNextSibling();
        }
    }
}