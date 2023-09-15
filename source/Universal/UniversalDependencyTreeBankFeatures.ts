import {UniversalDependencyPosType} from "./UniversalDependencyPosType";
import {UniversalDependencyRelation} from "./UniversalDependencyRelation";

export class UniversalDependencyTreeBankFeatures {

    private featureList: Map<string, string> = new Map<string, string>()

    public static universalFeatureTypes = ["PronType", "NumType", "Poss", "Reflex", "Foreign",
        "Abbr", "Typo", "Gender", "Animacy", "NounClass",
        "Number", "Case", "Definite", "Degree", "VerbForm",
        "Mood", "Tense", "Aspect", "Voice", "Evident",
        "Polarity", "Person", "Polite", "Clusivity", "NumForm"]

    private static universalFeatureValues = [["Art", "Dem", "Emp", "Exc", "Ind", "Int", "Neg", "Prs", "Rcp", "Rel", "Tot"],
        ["Card", "Dist", "Frac", "Mult", "Ord", "Range", "Sets"],
        ["Yes"],
        ["Yes"],
        ["Yes"],

        ["Yes"],
        ["Yes"],
        ["Com", "Fem", "Masc", "Neut"],
        ["Anim", "Hum", "Inan", "Nhum"],
        ["Bantu1", "Bantu2", "Bantu3", "Bantu4", "Bantu5", "Bantu6", "Bantu7", "Bantu8", "Bantu9", "Bantu10", "Bantu11", "Bantu12", "Bantu13", "Bantu14", "Bantu15", "Bantu16", "Bantu17", "Bantu18", "Bantu19", "Bantu20", "Bantu21", "Bantu22", "Bantu23", "Wol1", "Wol2", "Wol3", "Wol4", "Wol5", "Wol6", "Wol7", "Wol8", "Wol9", "Wol10", "Wol11", "Wol12"],

        ["Coll", "Count", "Dual", "Grpa", "Grpl", "Inv", "Pauc", "Plur", "Ptan", "Sing", "Tri"],
        ["Abs", "Acc", "Erg", "Nom", "Abe", "Ben", "Cau", "Cmp", "Cns", "Com", "Dat", "Dis", "Equ", "Gen", "Ins", "Par", "Tem", "Tra", "Voc", "Abl", "Add", "Ade", "All", "Del", "Ela", "Ess", "Ill", "Ine", "Lat", "Loc", "Per", "Sbe", "Sbl", "Spl", "Sub", "Sup", "Ter"],
        ["Com", "Cons", "Def", "Ind", "Spec"],
        ["Abs", "Aug", "Cmp", "Dim", "Equ", "Pos", "Sup"],
        ["Conv", "Fin", "Gdv", "Ger", "Inf", "Part", "Sup", "Vnoun"],

        ["Adm", "Cnd", "Des", "Imp", "Ind", "Int", "Irr", "Jus", "Nec", "Opt", "Pot", "Prp", "Qot", "Sub"],
        ["Fut", "Imp", "Past", "Pqp", "Pres"],
        ["Hab", "Imp", "Iter", "Perf", "Prog", "Prosp"],
        ["Act", "Antip", "Bfoc", "Cau", "Dir", "Inv", "Lfoc", "Mid", "Pass", "Rcp"],
        ["Fh", "Nfh"],

        ["Neg", "Pos"],
        ["0", "1", "2", "3", "4"],
        ["Elev", "Form", "Humb", "Infm"],
        ["Ex", "In"],
        ["Word", "Digit", "Roman"]]

    private static turkishFeatureValues = [["Art", "Dem", "Ind", "Int", "Neg", "Prs", "Rcp", "Rel", "Tot"],
        ["Card", "Dist", "Ord"],
        [],
        ["Yes"],
        [],

        ["Yes"],
        [],
        [],
        [],
        [],

        ["Plur", "Sing"],
        ["Acc", "Nom", "Dat", "Equ", "Gen", "Ins", "Abl", "Loc"],
        ["Def", "Ind"],
        ["Cmp", "Sup"],
        ["Conv", "Fin", "Part", "Vnoun"],

        ["Cnd", "Des", "Gen", "Imp", "Ind", "Nec", "Opt", "Pot", "DesPot", "CndPot", "CndGen", "CndGenPot", "GenPot", "PotPot", "GenNecPot", "GenNec", "NecPot", "GenPotPot", "ImpPot"],
        ["Fut", "Past", "Pqp", "Pres", "Aor"],
        ["Imp", "Perf", "Prog", "Prosp", "Hab", "Rapid"],
        ["Cau", "Pass", "Rcp", "Rfl", "CauCau", "CauCauPass", "CauPass", "CauPassRcp", "CauRcp", "PassPass", "PassRfl", "PassRcp"],
        ["Fh", "Nfh"],

        ["Neg", "Pos"],
        ["1", "2", "3"],
        [],
        [],
        []]

    private static englishFeatureValues = [["Art", "Dem", "Emp", "Ind", "Int", "Neg", "Prs", "Rcp", "Rel", "Tot"],
        ["Card", "Frac", "Mult", "Ord"],
        ["Yes"],
        ["Yes"],
        ["Yes"],

        ["Yes"],
        ["Yes"],
        ["Fem", "Masc", "Neut"],
        [],
        [],

        ["Plur", "Sing"],
        ["Acc", "Nom", "Gen"],
        ["Def", "Ind"],
        ["Cmp", "Pos", "Sup"],
        ["Fin", "Ger", "Inf", "Part"],

        ["Imp", "Ind", "Sub"],
        ["Past", "Pres"],
        [],
        ["Pass"],
        [],

        ["Neg"],
        ["1", "2", "3"],
        [],
        [],
        ["Word", "Digit", "Roman"]]

    constructor(language: string, features: string) {
        if (features != "_") {
            let list = features.split("|");
            for (let feature of list) {
                if (feature.includes("=")) {
                    let featureName = feature.substring(0, feature.indexOf("=")).trim();
                    let featureValue = feature.substring(feature.indexOf("=") + 1).trim();
                    if (UniversalDependencyTreeBankFeatures.featureValueIndex(language, featureName, featureValue) != -1){
                        this.featureList.set(featureName, featureValue);
                    } else {
                        console.log("Either the feature " + featureName + " or the value " + featureValue + " is wrong");
                    }
                } else {
                    console.log("Feature does not contain = ->" + features);
                }
            }
        }
    }

    private static featureIndex(featureName: string): number{
        if (featureName.includes("[")){
            featureName = featureName.substring(0, featureName.indexOf('['));
        }
        for (let i = 0; i < UniversalDependencyTreeBankFeatures.universalFeatureTypes.length; i++){
            if (UniversalDependencyTreeBankFeatures.universalFeatureTypes[i] == featureName){
                return i;
            }
        }
        return -1;
    }

    public static posIndex(uPos: string): number{
        let index = 0;
        for (let universalDependencyPosType of Object.values(UniversalDependencyPosType)){
            if (universalDependencyPosType.toString() == uPos){
                return index;
            }
            index++;
        }
        return -1;
    }

    public static dependencyIndex(universalDependency: string): number{
        let index = 0;
        for (let dependency of UniversalDependencyRelation.universalDependencyTypes){
            if (dependency == universalDependency){
                return index;
            }
            index++;
        }
        return -1;
    }

    public static numberOfValues(language: string, featureName: string): number{
        let fIndex = UniversalDependencyTreeBankFeatures.featureIndex(featureName);
        if (fIndex != -1) {
            switch (language) {
                case "en":
                    return UniversalDependencyTreeBankFeatures.englishFeatureValues[fIndex].length;
                case "tr":
                    return UniversalDependencyTreeBankFeatures.turkishFeatureValues[fIndex].length;
            }
        }
        return -1;
    }

    public static featureValueIndex(language: string, featureName: string, featureValue: string): number{
        let searchArray;
        let fIndex = UniversalDependencyTreeBankFeatures.featureIndex(featureName);
        if (fIndex != -1){
            switch (language){
                case "en":
                    searchArray = UniversalDependencyTreeBankFeatures.englishFeatureValues;
                    break;
                case "tr":
                    searchArray = UniversalDependencyTreeBankFeatures.turkishFeatureValues;
                    break;
                case "u":
                default:
                    searchArray = UniversalDependencyTreeBankFeatures.universalFeatureValues;
                    break;
            }
            let featureValueIndex = -1;
            for (let i = 0; i < searchArray[fIndex].length; i++){
                if (searchArray[fIndex][i] == featureValue){
                    featureValueIndex = i;
                }
            }
            return featureValueIndex;
        }
        return -1;
    }

    getFeatureValue(feature: string): string {
        return this.featureList.get(feature);
    }

    featureExists(feature: string): boolean {
        return this.featureList.has(feature);
    }

    toString(): string {
        if (this.featureList.size == 0) {
            return "_";
        }
        let result = "";
        for (let feature of this.featureList.keys()) {
            if (result == "") {
                result = feature + "=" + this.getFeatureValue(feature);
            } else {
                result += "|" + feature + "=" + this.getFeatureValue(feature);
            }
        }
        return result;
    }

    clone(): UniversalDependencyTreeBankFeatures{
        return new UniversalDependencyTreeBankFeatures("u", this.toString())
    }
}