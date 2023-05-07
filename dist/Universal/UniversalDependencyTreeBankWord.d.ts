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
    constructor1(): void;
    constructor2(id: number, lemma: string, upos: UniversalDependencyPosType, xpos: string, features: UniversalDependencyTreeBankFeatures, relation: UniversalDependencyRelation, deps: string, misc: string): void;
    constructor(id?: number, name?: string, lemma?: string, upos?: UniversalDependencyPosType, xpos?: string, features?: UniversalDependencyTreeBankFeatures, relation?: UniversalDependencyRelation, deps?: string, misc?: string);
    getId(): number;
    getLemma(): string;
    getUpos(): UniversalDependencyPosType;
    getXpos(): string;
    getFeatures(): UniversalDependencyTreeBankFeatures;
    getFeatureValue(featureName: string): string;
    featureExists(featureName: string): boolean;
    getRelation(): UniversalDependencyRelation;
    setRelation(relation: UniversalDependencyRelation): void;
    getDeps(): string;
    getMisc(): string;
    toString(): string;
}
