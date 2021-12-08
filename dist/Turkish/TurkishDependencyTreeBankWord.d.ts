import { Word } from "nlptoolkit-dictionary/dist/Dictionary/Word";
import { MorphologicalParse } from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
import { TurkishDependencyRelation } from "./TurkishDependencyRelation";
import { XmlElement } from "nlptoolkit-xmlparser/dist/XmlElement";
export declare class TurkishDependencyTreeBankWord extends Word {
    private parse;
    private originalParses;
    private relation;
    /**
     * Given the parsed xml node which contains information about a word and related attributes including the
     * dependencies, the method constructs a {@link TurkishDependencyTreeBankWord} from it.
     * @param wordNode Xml parsed node containing information about a word.
     */
    constructor(wordNode: XmlElement);
    /**
     * Given the morphological parse of a word, this method splits it into inflectional groups.
     * @param IG Morphological parse of the word in string form.
     * @return An array of inflectional groups stored as strings.
     */
    private splitIntoInflectionalGroups;
    /**
     * Accessor for the parse attribute
     * @return Parse attribute
     */
    getParse(): MorphologicalParse;
    /**
     * Accessor for a specific parse.
     * @param index Index of the word.
     * @return Parse of the index'th word
     */
    getOriginalParse(index: number): MorphologicalParse;
    /**
     * Number of words in this item.
     * @return Number of words in this item.
     */
    size(): number;
    /**
     * Accessor for the relation attribute.
     * @return relation attribute.
     */
    getRelation(): TurkishDependencyRelation;
}
