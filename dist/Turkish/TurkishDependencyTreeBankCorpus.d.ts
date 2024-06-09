import { Corpus } from "nlptoolkit-corpus/dist/Corpus";
export declare class TurkishDependencyTreeBankCorpus extends Corpus {
    /**
     * Another constructor for {@link TurkishDependencyTreeBankCorpus}. The method gets the corpus as a xml file, and
     * reads sentences one by one. For each sentence, the function constructs a TurkishDependencyTreeBankSentence.
     * @param fileName Input file name to read the TurkishDependencyTreeBankCorpus.
     */
    constructor(fileName: string);
}
