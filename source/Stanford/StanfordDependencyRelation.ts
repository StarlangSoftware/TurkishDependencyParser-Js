import {DependencyRelation} from "../DependencyRelation";
import {StanfordDependencyType} from "./StanfordDependencyType";

export class StanfordDependencyRelation extends DependencyRelation{

    private stanfordDependencyType: StanfordDependencyType

    static  stanfordDependencyTypes : Array<string> = ["acomp", "advcl", "advmod", "agent", "amod", "appos", "aux",
        "auxpass", "cc", "ccomp", "conj", "cop", "csubj", "csubjpass", "dep", "det", "discourse", "dobj", "expl", "goeswith",
        "iobj", "mark", "mwe", "neg", "nn", "npadvmod", "nsubj", "nsubjpass", "num", "number", "parataxis", "pcomp",
        "pobj", "poss", "possessive", "preconj", "predet", "prep", "prepc", "prt", "punct", "quantmod", "rcmod", "ref",
        "root", "tmod", "vmod", "xcomp", "xsubj"];

    static stanfordDependencyTags : Array<StanfordDependencyType> = [StanfordDependencyType.ACOMP, StanfordDependencyType.ADVCL,
        StanfordDependencyType.ADVMOD, StanfordDependencyType.AGENT, StanfordDependencyType.AMOD, StanfordDependencyType.APPOS, StanfordDependencyType.AUX,
        StanfordDependencyType.AUXPASS, StanfordDependencyType.CC, StanfordDependencyType.CCOMP, StanfordDependencyType.CONJ, StanfordDependencyType.COP,
        StanfordDependencyType.CSUBJ, StanfordDependencyType.CSUBJPASS, StanfordDependencyType.DEP, StanfordDependencyType.DET, StanfordDependencyType.DISCOURSE,
        StanfordDependencyType.DOBJ, StanfordDependencyType.EXPL, StanfordDependencyType.GOESWITH, StanfordDependencyType.IOBJ, StanfordDependencyType.MARK,
        StanfordDependencyType.MWE, StanfordDependencyType.NEG, StanfordDependencyType.NN, StanfordDependencyType.NPADVMOD, StanfordDependencyType.NSUBJ,
        StanfordDependencyType.NSUBJPASS, StanfordDependencyType.NUM, StanfordDependencyType.NUMBER, StanfordDependencyType.PARATAXIS, StanfordDependencyType.PCOMP,
        StanfordDependencyType.POBJ, StanfordDependencyType.POSS, StanfordDependencyType.POSSESSIVE, StanfordDependencyType.PRECONJ, StanfordDependencyType.PREDET,
        StanfordDependencyType.PREP, StanfordDependencyType.PREPC, StanfordDependencyType.PRT, StanfordDependencyType.PUNCT, StanfordDependencyType.QUANTMOD,
        StanfordDependencyType.RCMOD, StanfordDependencyType.REF, StanfordDependencyType.ROOT, StanfordDependencyType.TMOD, StanfordDependencyType.VMOD,
        StanfordDependencyType.XCOMP, StanfordDependencyType.XSUBJ];

    /**
     * The getDependencyTag method takes an dependency tag as string and returns the {@link StanfordDependencyType}
     * form of it.
     *
     * @param tag  Type of the dependency tag in string form
     * @return Type of the dependency in {@link StanfordDependencyType} form
     */
    static getDependencyTag(tag: string): StanfordDependencyType{
        for (let j = 0; j < StanfordDependencyRelation.stanfordDependencyTags.length; j++) {
            if (tag.toLowerCase() == StanfordDependencyRelation.stanfordDependencyTypes[j]) {
                return StanfordDependencyRelation.stanfordDependencyTags[j];
            }
        }
        return undefined;
    }

    /**
     * Another constructor for StanfordDependencyRelation. Gets input toWord and dependencyType as arguments and
     * calls the super class's constructor and sets the dependency type.
     * @param toWord Index of the word in the sentence that dependency relation is related
     * @param dependencyType Type of the dependency relation in string form
     */
    constructor(toWord: number, dependencyType: string) {
        super(toWord);
        this.stanfordDependencyType = StanfordDependencyRelation.getDependencyTag(dependencyType);
        if (this.stanfordDependencyType == undefined){
            console.log("Dependency Tag " + dependencyType + " does not exist\n");
        }
    }

    toString(): string{
        return StanfordDependencyRelation.stanfordDependencyTypes[this.stanfordDependencyType];
    }
}