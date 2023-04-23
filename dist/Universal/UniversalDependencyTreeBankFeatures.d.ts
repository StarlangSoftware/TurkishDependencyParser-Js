export declare class UniversalDependencyTreeBankFeatures {
    private featureList;
    static universalFeatureTypes: string[];
    private static universalFeatureValues;
    private static turkishFeatureValues;
    private static englishFeatureValues;
    constructor(language: string, features: string);
    private static featureIndex;
    private static posIndex;
    static dependencyIndex(universalDependency: string): number;
    static numberOfValues(language: string, featureName: string): number;
    static featureValueIndex(language: string, featureName: string, featureValue: string): number;
    getFeatureValue(feature: string): string;
    featureExists(feature: string): boolean;
    toString(): string;
}
