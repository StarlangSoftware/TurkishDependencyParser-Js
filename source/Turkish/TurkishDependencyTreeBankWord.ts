import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word"
import {MorphologicalParse} from "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse";
import {TurkishDependencyRelation} from "./TurkishDependencyRelation";
import {XmlElement} from "nlptoolkit-xmlparser/dist/XmlElement";

export class TurkishDependencyTreeBankWord extends Word{

    private parse: MorphologicalParse
    private originalParses: Array<MorphologicalParse> = new Array<MorphologicalParse>()
    private relation: TurkishDependencyRelation = undefined

    /**
     * Given the parsed xml node which contains information about a word and related attributes including the
     * dependencies, the method constructs a {@link TurkishDependencyTreeBankWord} from it.
     * @param wordNode Xml parsed node containing information about a word.
     */
    constructor(wordNode: XmlElement) {
        super("");
        let toWord = 0, toIG = 0;
        if (wordNode.hasAttributes()) {
            this.name = wordNode.getPcData();
            if (wordNode.getAttributeValue("IG") != "") {
                let IG = wordNode.getAttributeValue("IG");
                this.parse = new MorphologicalParse(this.splitIntoInflectionalGroups(IG));
            }
            if (wordNode.getAttributeValue("REL") != "") {
                let relationName = wordNode.getAttributeValue("REL");
                if (relationName != "[,( )]") {
                    let relationParts = relationName.split(/[,\[\]()]/);
                    let index = 0;
                    for (let i = 0; i < relationParts.length; i++) {
                        if (relationParts[i] != "") {
                            index++;
                            switch (index) {
                                case 1:
                                    toWord = Number.parseInt(relationParts[i]);
                                    break;
                                case 2:
                                    toIG = Number.parseInt(relationParts[i]);
                                    break;
                                case 3:
                                    let dependencyType = relationParts[i];
                                    this.relation = new TurkishDependencyRelation(toWord - 1, toIG - 1, dependencyType);
                                    break;
                            }
                        }
                    }
                }
            }
            for (let i = 1; i <= 9; i++) {
                if (wordNode.getAttributeValue("ORG_IG" + i) != "") {
                    let IG = wordNode.getAttributeValue("ORG_IG" + i);
                    this.originalParses.push(new MorphologicalParse(this.splitIntoInflectionalGroups(IG)));
                }
            }
        }
    }

    /**
     * Given the morphological parse of a word, this method splits it into inflectional groups.
     * @param IG Morphological parse of the word in string form.
     * @return An array of inflectional groups stored as strings.
     */
    private splitIntoInflectionalGroups(IG: string): Array<string>{
        let inflectionalGroups = new Array<string>();
        IG = IG.replace("\\(\\+Punc", "@").replace("\\)\\+Punc", "\\$");
        let iGs = IG.split(/[\[\]()]/);
        for (let i = 0; i < iGs.length; i++){
            iGs[i] = iGs[i].replace("@", "\\(\\+Punc").replace("\\$", "\\)\\+Punc");
            if (iGs[i].length != 0){
                inflectionalGroups.push(iGs[i]);
            }
        }
        return inflectionalGroups;
    }

    /**
     * Accessor for the parse attribute
     * @return Parse attribute
     */
    getParse(): MorphologicalParse{
        return this.parse
    }

    /**
     * Accessor for a specific parse.
     * @param index Index of the word.
     * @return Parse of the index'th word
     */
    getOriginalParse(index: number): MorphologicalParse{
        if (index < this.originalParses.length){
            return this.originalParses[index];
        } else {
            return undefined;
        }
    }

    /**
     * Number of words in this item.
     * @return Number of words in this item.
     */
    size(): number{
        return this.originalParses.length
    }

    /**
     * Accessor for the relation attribute.
     * @return relation attribute.
     */
    getRelation(): TurkishDependencyRelation{
        return this.relation
    }
}