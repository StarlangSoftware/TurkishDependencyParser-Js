export declare class UniversalDependencyTreeBankFeatures {
    private featureList;
    static universalFeatureTypes: string[];
    private static universalFeatureValues;
    private static turkishFeatureValues;
    private static englishFeatureValues;
    /**
     * Constructor of a UniversalDependencyTreeBankFeatures object. Given the language of the word and features of the
     * word as a string, the method splits the features with respect to pipe character. Then for each feature type and
     * value pair, their values and types are inserted into the featureList hash map. The method also check for validity
     * of the feature values for that feature type.
     * @param language Language name. Currently, 'en' and 'tr' languages are supported.
     * @param features Feature string.
     */
    constructor(language: string, features: string);
    /**
     * Returns the index of the universal feature type in the universalFeatureTypes array, given the name of the feature
     * type.
     * @param featureName Name of the feature type
     * @return Index of the universal feature type in the universalFeatureTypes array. If the name does not exist, the
     * function returns -1.
     */
    private static featureIndex;
    /**
     * Returns the index of the given universal dependency pos.
     * @param uPos Given universal dependency part of speech tag.
     * @return The index of the universal dependency pos.
     */
    static posIndex(uPos: string): number;
    /**
     * Returns the index of the universal dependency type in the universalDependencyTypes array, given the name of the
     * universal dependency type.
     * @param universalDependency Universal dependency type
     * @return Index of the universal dependency type in the universalDependencyTypes array. If the name does not exist,
     * the function returns -1.
     */
    static dependencyIndex(universalDependency: string): number;
    /**
     * Returns the number of distinct values for a feature in a given language
     * @param language Language name. Currently, 'en' and 'tr' languages are supported.
     * @param featureName Name of the feature type.
     * @return The number of distinct values for a feature in a given language
     */
    static numberOfValues(language: string, featureName: string): number;
    /**
     * Returns the index of the given value in the feature value array for the given feature in the given
     * language.
     * @param language Language name. Currently, 'en' and 'tr' languages are supported.
     * @param featureName Name of the feature.
     * @param featureValue Value of the feature.
     * @return The index of the given feature value in the feature value array for the given feature in the given
     * language.
     */
    static featureValueIndex(language: string, featureName: string, featureValue: string): number;
    /**
     * Gets the value of a given feature.
     * @param feature Name of the feature
     * @return Value of the feature
     */
    getFeatureValue(feature: string): string;
    /**
     * Checks if the given feature exists in the feature list.
     * @param feature Name of the feature
     * @return True, if the feature list contains the feature, false otherwise.
     */
    featureExists(feature: string): boolean;
    /**
     * Overridden toString method. Returns feature with their values separated with pipe characters.
     * @return A string of feature values and their names separated with pipe character.
     */
    toString(): string;
    clone(): UniversalDependencyTreeBankFeatures;
}
