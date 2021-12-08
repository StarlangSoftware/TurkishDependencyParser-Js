export declare class UniversalDependencyTreeBankFeatures {
    private featureList;
    constructor(features: string);
    getFeatureValue(feature: string): string;
    featureExists(feature: string): boolean;
    toString(): string;
}
