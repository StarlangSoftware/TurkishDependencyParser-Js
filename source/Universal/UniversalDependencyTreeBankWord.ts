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

    getId(): number{
        return this.id
    }

    getLemma(): string{
        return this.lemma
    }

    getUpos(): UniversalDependencyPosType{
        return this.upos
    }

    getXpos(): string{
        return this.xpos
    }

    getFeatures(): UniversalDependencyTreeBankFeatures{
        return this.features
    }

    getFeatureValue(featureName: string): string{
        return this.features.getFeatureValue(featureName)
    }

    featureExists(featureName: string): boolean{
        return this.features.featureExists(featureName)
    }

    getRelation(): UniversalDependencyRelation{
        return this.relation
    }

    setRelation(relation: UniversalDependencyRelation){
        this.relation = relation
    }

    getDeps(): string{
        return this.deps
    }

    getMisc(): string{
        return this.misc
    }

    toString(): string{
        return this.id + "\t" + this.name + "\t" + this.lemma + "\t" + this.upos + "\t" +
            this.xpos + "\t" + this.features.toString() + "\t" + this.relation.to() + "\t" +
            this.relation.toString().toLowerCase() + "\t" + this.deps + "\t" + this.misc;
    }
}