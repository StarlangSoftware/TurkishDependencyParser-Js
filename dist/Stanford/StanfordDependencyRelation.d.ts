import { DependencyRelation } from "../DependencyRelation";
import { StanfordDependencyType } from "./StanfordDependencyType";
export declare class StanfordDependencyRelation extends DependencyRelation {
    private stanfordDependencyType;
    static stanfordDependencyTypes: Array<string>;
    static stanfordDependencyTags: Array<StanfordDependencyType>;
    /**
     * The getDependencyTag method takes an dependency tag as string and returns the {@link StanfordDependencyType}
     * form of it.
     *
     * @param tag  Type of the dependency tag in string form
     * @return Type of the dependency in {@link StanfordDependencyType} form
     */
    static getDependencyTag(tag: string): StanfordDependencyType;
    /**
     * Another constructor for StanfordDependencyRelation. Gets input toWord and dependencyType as arguments and
     * calls the super class's constructor and sets the dependency type.
     * @param toWord Index of the word in the sentence that dependency relation is related
     * @param dependencyType Type of the dependency relation in string form
     */
    constructor(toWord: number, dependencyType: string);
    toString(): string;
}
