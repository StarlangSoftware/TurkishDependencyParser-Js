import { DependencyRelation } from "../DependencyRelation";
import { UniversalDependencyType } from "./UniversalDependencyType";
import { UniversalDependencyPosType } from "./UniversalDependencyPosType";
import { ParserEvaluationScore } from "../ParserEvaluationScore";
export declare class UniversalDependencyRelation extends DependencyRelation {
    private universalDependencyType;
    static universalDependencyTypes: string[];
    static universalDependencyTags: UniversalDependencyType[];
    static universalDependencyPosTypes: string[];
    static universalDependencyPosTags: UniversalDependencyPosType[];
    /**
     * Constructor for UniversalDependencyRelation. Gets input toWord and dependencyType as arguments and
     * calls the super class's constructor and sets the dependency type.
     * @param toWord Index of the word in the sentence that dependency relation is related
     * @param dependencyType Type of the dependency relation in string form
     */
    constructor(toWord: number, dependencyType?: string);
    /**
     * The getDependencyTag method takes an dependency tag as string and returns the {@link UniversalDependencyType}
     * form of it.
     *
     * @param tag  Type of the dependency tag in string form
     * @return Type of the dependency in {@link UniversalDependencyType} form
     */
    static getDependencyTag(tag: string): UniversalDependencyType;
    /**
     * The getDependencyPosType method takes a dependency pos type as string and returns the {@link UniversalDependencyPosType}
     * form of it.
     * @param tag Dependency pos type in string form
     * @return Dependency pos type for a given dependency pos string
     */
    static getDependencyPosType(tag: string): UniversalDependencyPosType;
    /**
     * Compares the relation with the given universal dependency relation and returns a parser evaluation score for this
     * comparison. If toWord fields are equal for both relation UAS is 1, otherwise it is 0. If both toWord and
     * dependency types are the same, LAS is 1, otherwise it is 0. If only dependency types of both relations are
     * the same, LS is 1, otherwise it is 0.
     * @param relation Universal dependency relation to be compared.
     * @return A parser evaluation score object with (i) LAS = 1, if to and dependency types are same; LAS = 0,
     * otherwise, (ii) UAS = 1, if to is the same; UAS = 0, otherwise, (iii) LS = 1, if dependency types are the same;
     * LS = 0, otherwise.
     */
    compareRelations(relation: UniversalDependencyRelation): ParserEvaluationScore;
    toString(): string;
    clone(): UniversalDependencyRelation;
}
