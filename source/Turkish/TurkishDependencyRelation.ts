import {TurkishDependencyType} from "./TurkishDependencyType";
import {DependencyRelation} from "../DependencyRelation";

export class TurkishDependencyRelation extends DependencyRelation{

    private _toIG: number
    private turkishDependencyType: TurkishDependencyType

    static turkishDependencyTypes = ["VOCATIVE", "SUBJECT", "DATIVE.ADJUNCT", "OBJECT", "POSSESSOR",
        "MODIFIER", "S.MODIFIER", "ABLATIVE.ADJUNCT", "DETERMINER", "SENTENCE",
        "CLASSIFIER", "LOCATIVE.ADJUNCT", "COORDINATION", "QUESTION.PARTICLE", "INTENSIFIER",
        "INSTRUMENTAL.ADJUNCT", "RELATIVIZER", "NEGATIVE.PARTICLE", "ETOL", "COLLOCATION",
        "FOCUS.PARTICLE", "EQU.ADJUNCT", "APPOSITION"];

    static turkishDependencyTags = [TurkishDependencyType.VOCATIVE, TurkishDependencyType.SUBJECT, TurkishDependencyType.DATIVE_ADJUNCT, TurkishDependencyType.OBJECT, TurkishDependencyType.POSSESSOR,
        TurkishDependencyType.MODIFIER, TurkishDependencyType.S_MODIFIER, TurkishDependencyType.ABLATIVE_ADJUNCT, TurkishDependencyType.DETERMINER, TurkishDependencyType.SENTENCE,
        TurkishDependencyType.CLASSIFIER, TurkishDependencyType.LOCATIVE_ADJUNCT, TurkishDependencyType.COORDINATION, TurkishDependencyType.QUESTION_PARTICLE, TurkishDependencyType.INTENSIFIER,
        TurkishDependencyType.INSTRUMENTAL_ADJUNCT, TurkishDependencyType.RELATIVIZER, TurkishDependencyType.NEGATIVE_PARTICLE, TurkishDependencyType.ETOL, TurkishDependencyType.COLLOCATION,
        TurkishDependencyType.FOCUS_PARTICLE, TurkishDependencyType.EQU_ADJUNCT, TurkishDependencyType.APPOSITION];

    /**
     * The getDependencyTag method takes an dependency tag as string and returns the {@link TurkishDependencyType}
     * form of it.
     *
     * @param tag  Type of the dependency tag in string form
     * @return Type of the dependency in {@link TurkishDependencyType} form
     */
    static getDependencyTag(tag: string): TurkishDependencyType{
        for (let j = 0; j < TurkishDependencyRelation.turkishDependencyTypes.length; j++) {
            if (tag.toUpperCase() == TurkishDependencyRelation.turkishDependencyTypes[j]) {
                return TurkishDependencyRelation.turkishDependencyTags[j];
            }
        }
        return undefined;
    }

    /**
     * Another constructor for TurkishDependencyRelation. Gets input toWord, toIG, and dependencyType as arguments and
     * calls the super class's constructor and sets the IG and dependency type.
     * @param toWord Index of the word in the sentence that dependency relation is related
     * @param toIG Index of the inflectional group the dependency relation is related
     * @param dependencyType Type of the dependency relation in string form
     */
    constructor(toWord: number, toIG: number, dependencyType: string) {
        super(toWord);
        this._toIG = toIG;
        this.turkishDependencyType = TurkishDependencyRelation.getDependencyTag(dependencyType);
        if (this.turkishDependencyType == undefined){
            console.log("Dependency Tag " + dependencyType + " does not exist\n");
        }
    }

    /**
     * Accessor for the toIG attribute
     * @return toIG attribute
     */
    toIG(): number{
        return this._toIG
    }

    /**
     * Accessor for the turkishDependencyType attribute
     * @return turkishDependencyType attribute
     */
    getTurkishDependencyType(): TurkishDependencyType{
        return this.turkishDependencyType
    }

    toString(): string{
        return TurkishDependencyRelation.turkishDependencyTypes[this.turkishDependencyType];
    }
}