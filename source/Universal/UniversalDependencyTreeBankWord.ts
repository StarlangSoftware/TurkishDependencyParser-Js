import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";
import {UniversalDependencyPosType} from "./UniversalDependencyPosType";
import {UniversalDependencyTreeBankFeatures} from "./UniversalDependencyTreeBankFeatures";
import {UniversalDependencyRelation} from "./UniversalDependencyRelation";

export class UniversalDependencyTreeBankWord extends Word{

    private id: number
    private lemma: string
    private upos: UniversalDependencyPosType
    private xpos: string
    private features: UniversalDependencyTreeBankFeatures
    private relation: UniversalDependencyRelation
    private deps: string
    private misc: string

    /**
     * Default constructor for the universal dependency word. Sets the attributes to default values.
     */
    constructor1(){
        this.id = 0
        this.lemma = ""
        this.upos = null
        this.xpos = ""
        this.features = null
        this.deps = ""
        this.misc = ""
        this.relation = new UniversalDependencyRelation(-1, "DEP")
    }

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
    constructor2(id: number, lemma: string, upos: UniversalDependencyPosType, xpos: string,
                 features: UniversalDependencyTreeBankFeatures, relation: UniversalDependencyRelation,
                 deps: string, misc: string) {
        this.id = id
        this.lemma = lemma
        this.upos = upos
        this.xpos = xpos
        this.deps = deps
        this.features = features
        this.relation = relation
        this.misc = misc
    }

    constructor(id?: number, name?: string, lemma?: string, upos?: UniversalDependencyPosType, xpos?: string,
                features?: UniversalDependencyTreeBankFeatures, relation?: UniversalDependencyRelation,
                deps?: string, misc?: string) {
        if (id == undefined){
            super("root");
            this.constructor1()
        } else {
            super(name);
            this.constructor2(id, lemma, upos, xpos, features, relation, deps, misc)
        }
    }

    clone(): UniversalDependencyTreeBankWord{
        let word = new UniversalDependencyTreeBankWord(this.id, this.name, this.lemma, this.upos, this.xpos, null, null, this.deps, this.misc)
        word.features = this.features.clone()
        if (this.relation != null) {
            word.relation = this.relation.clone()
        } else {
            this.relation = null
        }
        return word
    }

    /**
     * Accessor for the id attribute.
     * @return Id attribute
     */
    getId(): number{
        return this.id
    }

    /**
     * Accessor for the lemma attribute
     * @return Lemma attribute
     */
    getLemma(): string{
        return this.lemma
    }

    /**
     * Accessor for the upos attribute
     * @return Upos attribute
     */
    getUpos(): UniversalDependencyPosType{
        return this.upos
    }

    /**
     * Accessor for the xpos attribute
     * @return Xpos attribute
     */
    getXpos(): string{
        return this.xpos
    }

    /**
     * Accessor for the features attribute
     * @return Features attribute
     */
    getFeatures(): UniversalDependencyTreeBankFeatures{
        return this.features
    }

    /**
     * Gets the value of a given feature.
     * @param featureName Name of the feature
     * @return Value of the feature
     */
    getFeatureValue(featureName: string): string{
        return this.features.getFeatureValue(featureName)
    }

    /**
     * Checks if the given feature exists.
     * @param featureName Name of the feature
     * @return True if the given feature exists, false otherwise.
     */
    featureExists(featureName: string): boolean{
        return this.features.featureExists(featureName)
    }

    /**
     * Accessor for the relation attribute.
     * @return Relation attribute
     */
    getRelation(): UniversalDependencyRelation{
        return this.relation
    }

    /**
     * Mutator for the relation attribute
     * @param relation New relation attribute
     */
    setRelation(relation: UniversalDependencyRelation){
        this.relation = relation
    }

    /**
     * Accessor for the deps attribute
     * @return Xpos attribute
     */
    getDeps(): string{
        return this.deps
    }

    /**
     * Accessor for the misc attribute
     * @return Misc attribute
     */
    getMisc(): string{
        return this.misc
    }

    toString(): string{
        return this.id + "\t" + this.name + "\t" + this.lemma + "\t" + this.upos + "\t" +
            this.xpos + "\t" + this.features.toString() + "\t" + this.relation.to() + "\t" +
            this.relation.toString().toLowerCase() + "\t" + this.deps + "\t" + this.misc;
    }
}