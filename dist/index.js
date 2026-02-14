var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./DependencyRelation", "./ParserEvaluationScore", "./Stanford/StanfordDependencyRelation", "./Stanford/StanfordDependencyType", "./Turkish/TurkishDependencyRelation", "./Turkish/TurkishDependencyTreeBankCorpus", "./Turkish/TurkishDependencyTreeBankSentence", "./Turkish/TurkishDependencyTreeBankWord", "./Turkish/TurkishDependencyType", "./Universal/UniversalDependencyPosType", "./Universal/UniversalDependencyRelation", "./Universal/UniversalDependencyTreeBankCorpus", "./Universal/UniversalDependencyTreeBankFeatures", "./Universal/UniversalDependencyTreeBankSentence", "./Universal/UniversalDependencyTreeBankWord", "./Universal/UniversalDependencyType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./DependencyRelation"), exports);
    __exportStar(require("./ParserEvaluationScore"), exports);
    __exportStar(require("./Stanford/StanfordDependencyRelation"), exports);
    __exportStar(require("./Stanford/StanfordDependencyType"), exports);
    __exportStar(require("./Turkish/TurkishDependencyRelation"), exports);
    __exportStar(require("./Turkish/TurkishDependencyTreeBankCorpus"), exports);
    __exportStar(require("./Turkish/TurkishDependencyTreeBankSentence"), exports);
    __exportStar(require("./Turkish/TurkishDependencyTreeBankWord"), exports);
    __exportStar(require("./Turkish/TurkishDependencyType"), exports);
    __exportStar(require("./Universal/UniversalDependencyPosType"), exports);
    __exportStar(require("./Universal/UniversalDependencyRelation"), exports);
    __exportStar(require("./Universal/UniversalDependencyTreeBankCorpus"), exports);
    __exportStar(require("./Universal/UniversalDependencyTreeBankFeatures"), exports);
    __exportStar(require("./Universal/UniversalDependencyTreeBankSentence"), exports);
    __exportStar(require("./Universal/UniversalDependencyTreeBankWord"), exports);
    __exportStar(require("./Universal/UniversalDependencyType"), exports);
});
//# sourceMappingURL=index.js.map