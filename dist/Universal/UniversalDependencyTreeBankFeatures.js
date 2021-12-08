(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UniversalDependencyTreeBankFeatures = void 0;
    class UniversalDependencyTreeBankFeatures {
        constructor(features) {
            this.featureList = new Map();
            if (features != "_") {
                let list = features.split("|");
                for (let feature of list) {
                    if (feature.includes("=")) {
                        let featureName = feature.substring(0, feature.indexOf("=")).trim();
                        let featureValue = feature.substring(feature.indexOf("=") + 1).trim();
                        this.featureList.set(featureName, featureValue);
                    }
                    else {
                        console.log("Feature does not contain = ->" + features);
                    }
                }
            }
        }
        getFeatureValue(feature) {
            return this.featureList.get(feature);
        }
        featureExists(feature) {
            return this.featureList.has(feature);
        }
        toString() {
            if (this.featureList.size == 0) {
                return "_";
            }
            let result = "";
            for (let feature of this.featureList.keys()) {
                if (result == "") {
                    result = feature + "=" + this.getFeatureValue(feature);
                }
                else {
                    result += "|" + feature + "=" + this.getFeatureValue(feature);
                }
            }
            return result;
        }
    }
    exports.UniversalDependencyTreeBankFeatures = UniversalDependencyTreeBankFeatures;
});
//# sourceMappingURL=UniversalDependencyTreeBankFeatures.js.map