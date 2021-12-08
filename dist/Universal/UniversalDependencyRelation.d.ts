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
    static getDependencyPosType(tag: string): UniversalDependencyPosType;
    compareRelations(relation: UniversalDependencyRelation): ParserEvaluationScore;
    toString(): string;
    clone(): UniversalDependencyRelation;
}
