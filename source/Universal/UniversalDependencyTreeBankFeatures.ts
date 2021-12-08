export class UniversalDependencyTreeBankFeatures {

    private featureList: Map<string, string> = new Map<string, string>()

    constructor(features: string) {
        if (features != "_"){
            let list = features.split("|");
            for (let feature of list){
                if (feature.includes("=")){
                    let featureName = feature.substring(0, feature.indexOf("=")).trim();
                    let featureValue = feature.substring(feature.indexOf("=") + 1).trim();
                    this.featureList.set(featureName, featureValue);
                } else {
                    console.log("Feature does not contain = ->" + features);
                }
            }
        }
    }

    getFeatureValue(feature: string): string{
        return this.featureList.get(feature);
    }

    featureExists(feature: string): boolean{
        return this.featureList.has(feature);
    }

    toString(): string{
        if (this.featureList.size == 0){
            return "_";
        }
        let result = "";
        for (let feature of this.featureList.keys()){
            if (result == ""){
                result = feature + "=" + this.getFeatureValue(feature);
            } else {
                result += "|" + feature + "=" + this.getFeatureValue(feature);
            }
        }
        return result;
    }
}