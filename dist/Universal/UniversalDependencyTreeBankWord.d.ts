import { Word } from "nlptoolkit-dictionary/dist/Dictionary/Word";
import { UniversalDependencyPosType } from "./UniversalDependencyPosType";
import { UniversalDependencyTreeBankFeatures } from "./UniversalDependencyTreeBankFeatures";
import { UniversalDependencyRelation } from "./UniversalDependencyRelation";
export declare class UniversalDependencyTreeBankWord extends Word {
    private id;
    private lemma;
    private upos;
    private xpos;
    private features;
    private relation;
    private deps;
    private misc;
    /**
     * Default constructor for the universal dependency word. Sets the attributes to default values.
     */
    constructor1(): void;
    /**
     * Constructor of the universal dependency word. Sets the attributes.
     * @param id Id of the word
     * @param lemma Lemma of the word
     * @param upos Universal part of speech tag.
     * @param xpos Extra part of speech tag
     * @param features Feature list of the word
     * @param relation Universal dependency relation of the word
     * @param deps External dependencies for the word
     * @param misc Miscellaneous information for the word.
     */
    constructor2(id: number, lemma: string, upos: UniversalDependencyPosType, xpos: string, features: UniversalDependencyTreeBankFeatures, relation: UniversalDependencyRelation, deps: string, misc: string): void;
    constructor(id?: number, name?: string, lemma?: string, upos?: UniversalDependencyPosType, xpos?: string, features?: UniversalDependencyTreeBankFeatures, relation?: UniversalDependencyRelation, deps?: string, misc?: string);
    clone(): UniversalDependencyTreeBankWord;
    /**
     * Accessor for the id attribute.
     * @return Id attribute
     */
    getId(): number;
    /**
     * Accessor for the lemma attribute
     * @return Lemma attribute
     */
    getLemma(): string;
    /**
     * Accessor for the upos attribute
     * @return Upos attribute
     */
    getUpos(): UniversalDependencyPosType;
    /**
     * Accessor for the xpos attribute
     * @return Xpos attribute
     */
    getXpos(): string;
    /**
     * Accessor for the features attribute
     * @return Features attribute
     */
    getFeatures(): UniversalDependencyTreeBankFeatures;
    /**
     * Gets the value of a given feature.
     * @param featureName Name of the feature
     * @return Value of the feature
     */
    getFeatureValue(featureName: string): string;
    /**
     * Checks if the given feature exists.
     * @param featureName Name of the feature
     * @return True if the given feature exists, false otherwise.
     */
    featureExists(featureName: string): boolean;
    /**
     * Accessor for the relation attribute.
     * @return Relation attribute
     */
    getRelation(): UniversalDependencyRelation;
    /**
     * Mutator for the relation attribute
     * @param relation New relation attribute
     */
    setRelation(relation: UniversalDependencyRelation): void;
    /**
     * Accessor for the deps attribute
     * @return Xpos attribute
     */
    getDeps(): string;
    /**
     * Accessor for the misc attribute
     * @return Misc attribute
     */
    getMisc(): string;
    toString(): string;
}
