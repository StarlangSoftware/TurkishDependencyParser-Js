import { TurkishDependencyType } from "./TurkishDependencyType";
import { DependencyRelation } from "../DependencyRelation";
export declare class TurkishDependencyRelation extends DependencyRelation {
    private _toIG;
    private turkishDependencyType;
    static turkishDependencyTypes: string[];
    static turkishDependencyTags: TurkishDependencyType[];
    /**
     * The getDependencyTag method takes an dependency tag as string and returns the {@link TurkishDependencyType}
     * form of it.
     *
     * @param tag  Type of the dependency tag in string form
     * @return Type of the dependency in {@link TurkishDependencyType} form
     */
    static getDependencyTag(tag: string): TurkishDependencyType;
    /**
     * Another constructor for TurkishDependencyRelation. Gets input toWord, toIG, and dependencyType as arguments and
     * calls the super class's constructor and sets the IG and dependency type.
     * @param toWord Index of the word in the sentence that dependency relation is related
     * @param toIG Index of the inflectional group the dependency relation is related
     * @param dependencyType Type of the dependency relation in string form
     */
    constructor(toWord: number, toIG: number, dependencyType: string);
    /**
     * Accessor for the toIG attribute
     * @return toIG attribute
     */
    toIG(): number;
    /**
     * Accessor for the turkishDependencyType attribute
     * @return turkishDependencyType attribute
     */
    getTurkishDependencyType(): TurkishDependencyType;
    toString(): string;
}
