import {DependencyRelation} from "../DependencyRelation";
import {UniversalDependencyType} from "./UniversalDependencyType";
import {UniversalDependencyPosType} from "./UniversalDependencyPosType";
import {ParserEvaluationScore} from "../ParserEvaluationScore";

export class UniversalDependencyRelation extends DependencyRelation{

    private universalDependencyType: UniversalDependencyType

    static universalDependencyTypes = ["ACL", "ADVCL",
        "ADVMOD", "AMOD", "APPOS", "AUX", "CASE",
        "CC", "CCOMP", "CLF", "COMPOUND", "CONJ",
        "COP", "CSUBJ", "DEP", "DET", "DISCOURSE",
        "DISLOCATED", "EXPL", "FIXED", "FLAT",
        "GOESWITH", "IOBJ", "LIST", "MARK", "NMOD",
        "NSUBJ", "NUMMOD", "OBJ", "OBL", "ORPHAN",
        "PARATAXIS", "PUNCT", "REPARANDUM", "ROOT",
        "VOCATIVE", "XCOMP", "ACL:RELCL", "AUX:PASS",
        "CC:PRECONJ", "COMPOUND:PRT", "DET:PREDET", "FLAT:FOREIGN",
        "NSUBJ:PASS", "CSUBJ:PASS", "NMOD:NPMOD", "NMOD:POSS",
        "NMOD:TMOD", "ADVMOD:EMPH", "AUX:Q", "COMPOUND:LVC",
        "COMPOUND:REDUP", "CSUBJ:COP", "NMOD:COMP", "NMOD:PART",
        "NSUBJ:COP", "OBL:AGENT", "OBL:TMOD", "OBL:NPMOD"];

    static universalDependencyTags = [UniversalDependencyType.ACL, UniversalDependencyType.ADVCL,
        UniversalDependencyType.ADVMOD, UniversalDependencyType.AMOD, UniversalDependencyType.APPOS, UniversalDependencyType.AUX, UniversalDependencyType.CASE,
        UniversalDependencyType.CC, UniversalDependencyType.CCOMP, UniversalDependencyType.CLF, UniversalDependencyType.COMPOUND, UniversalDependencyType.CONJ,
        UniversalDependencyType.COP, UniversalDependencyType.CSUBJ, UniversalDependencyType.DEP, UniversalDependencyType.DET, UniversalDependencyType.DISCOURSE,
        UniversalDependencyType.DISLOCATED, UniversalDependencyType.EXPL, UniversalDependencyType.FIXED, UniversalDependencyType.FLAT,
        UniversalDependencyType.GOESWITH, UniversalDependencyType.IOBJ, UniversalDependencyType.LIST, UniversalDependencyType.MARK, UniversalDependencyType.NMOD,
        UniversalDependencyType.NSUBJ, UniversalDependencyType.NUMMOD, UniversalDependencyType.OBJ, UniversalDependencyType.OBL, UniversalDependencyType.ORPHAN,
        UniversalDependencyType.PARATAXIS, UniversalDependencyType.PUNCT, UniversalDependencyType.REPARANDUM, UniversalDependencyType.ROOT,
        UniversalDependencyType.VOCATIVE, UniversalDependencyType.XCOMP, UniversalDependencyType.ACL_RELCL, UniversalDependencyType.AUX_PASS,
        UniversalDependencyType.CC_PRECONJ, UniversalDependencyType.COMPOUND_PRT, UniversalDependencyType.DET_PREDET, UniversalDependencyType.FLAT_FOREIGN,
        UniversalDependencyType.NSUBJ_PASS, UniversalDependencyType.CSUBJ_PASS, UniversalDependencyType.NMOD_NPMOD, UniversalDependencyType.NMOD_POSS,
        UniversalDependencyType.NMOD_TMOD, UniversalDependencyType.ADVMOD_EMPH, UniversalDependencyType.AUX_Q, UniversalDependencyType.COMPOUND_LVC,
        UniversalDependencyType.COMPOUND_REDUP, UniversalDependencyType.CSUBJ_COP, UniversalDependencyType.NMOD_COMP, UniversalDependencyType.NMOD_PART,
        UniversalDependencyType.NSUBJ_COP, UniversalDependencyType.OBL_AGENT, UniversalDependencyType.OBL_TMOD, UniversalDependencyType.OBL_NPMOD];

    static universalDependencyPosTypes = ["ADJ", "ADV", "INTJ", "NOUN", "PROPN", "VERB", "ADP", "AUX", "CCONJ",
        "DET", "NUM", "PART", "PRON", "SCONJ", "PUNCT", "SYM", "X"];

    static universalDependencyPosTags = [UniversalDependencyPosType.ADJ, UniversalDependencyPosType.ADV, UniversalDependencyPosType.INTJ, UniversalDependencyPosType.NOUN, UniversalDependencyPosType.PROPN,
        UniversalDependencyPosType.VERB, UniversalDependencyPosType.ADP, UniversalDependencyPosType.AUX, UniversalDependencyPosType.CCONJ, UniversalDependencyPosType.DET, UniversalDependencyPosType.NUM, UniversalDependencyPosType.PART,
        UniversalDependencyPosType.PRON, UniversalDependencyPosType.SCONJ, UniversalDependencyPosType.PUNCT, UniversalDependencyPosType.SYM, UniversalDependencyPosType.X];

    /**
     * Constructor for UniversalDependencyRelation. Gets input toWord and dependencyType as arguments and
     * calls the super class's constructor and sets the dependency type.
     * @param toWord Index of the word in the sentence that dependency relation is related
     * @param dependencyType Type of the dependency relation in string form
     */
    constructor(toWord: number, dependencyType?: string) {
        super(toWord);
        if (dependencyType != undefined){
            this.universalDependencyType = UniversalDependencyRelation.getDependencyTag(dependencyType);
            if (this.universalDependencyType == undefined){
                console.log("Dependency Tag " + dependencyType + " does not exist\n");
            }
        }
    }

    /**
     * The getDependencyTag method takes an dependency tag as string and returns the {@link UniversalDependencyType}
     * form of it.
     *
     * @param tag  Type of the dependency tag in string form
     * @return Type of the dependency in {@link UniversalDependencyType} form
     */
    static getDependencyTag(tag: string): UniversalDependencyType{
        for (let j = 0; j < UniversalDependencyRelation.universalDependencyTags.length; j++) {
            if (tag.toUpperCase() == UniversalDependencyRelation.universalDependencyTypes[j]) {
                return UniversalDependencyRelation.universalDependencyTags[j];
            }
        }
        return undefined;
    }

    static getDependencyPosType(tag: string): UniversalDependencyPosType{
        for (let i = 0; i < UniversalDependencyRelation.universalDependencyPosTypes.length; i++) {
            if (tag.toUpperCase() == UniversalDependencyRelation.universalDependencyPosTypes[i]) {
                return UniversalDependencyRelation.universalDependencyPosTags[i];
            }
        }
        return undefined;
    }

    compareRelations(relation: UniversalDependencyRelation): ParserEvaluationScore{
        let LS = 0.0, LAS = 0.0, UAS = 0.0;
        if (toString() == relation.toString()){
            LS = 1.0;
            if (this.toWord == relation.to()){
                LAS = 1.0;
            }
        }
        if (this.toWord == relation.to()){
            UAS = 1.0;
        }
        return new ParserEvaluationScore(LAS, UAS, LS, 1);
    }

    toString(): string{
        return UniversalDependencyRelation.universalDependencyTypes[this.universalDependencyType];
    }

    clone(): UniversalDependencyRelation{
        return new UniversalDependencyRelation(this.toWord, this.toString());
    }
}