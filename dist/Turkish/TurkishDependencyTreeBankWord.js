(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Dictionary/Word", "nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse", "./TurkishDependencyRelation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishDependencyTreeBankWord = void 0;
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    const MorphologicalParse_1 = require("nlptoolkit-morphologicalanalysis/dist/MorphologicalAnalysis/MorphologicalParse");
    const TurkishDependencyRelation_1 = require("./TurkishDependencyRelation");
    class TurkishDependencyTreeBankWord extends Word_1.Word {
        /**
         * Given the parsed xml node which contains information about a word and related attributes including the
         * dependencies, the method constructs a {@link TurkishDependencyTreeBankWord} from it.
         * @param wordNode Xml parsed node containing information about a word.
         */
        constructor(wordNode) {
            super("");
            this.originalParses = new Array();
            this.relation = undefined;
            let toWord = 0, toIG = 0;
            if (wordNode.hasAttributes()) {
                this.name = wordNode.getPcData();
                if (wordNode.getAttributeValue("IG") != "") {
                    let IG = wordNode.getAttributeValue("IG");
                    this.parse = new MorphologicalParse_1.MorphologicalParse(this.splitIntoInflectionalGroups(IG));
                }
                if (wordNode.getAttributeValue("REL") != "") {
                    let relationName = wordNode.getAttributeValue("REL");
                    if (relationName != "[,( )]") {
                        let relationParts = relationName.split(/[,\[\]()]/);
                        let index = 0;
                        for (let i = 0; i < relationParts.length; i++) {
                            if (relationParts[i] != "") {
                                index++;
                                switch (index) {
                                    case 1:
                                        toWord = Number.parseInt(relationParts[i]);
                                        break;
                                    case 2:
                                        toIG = Number.parseInt(relationParts[i]);
                                        break;
                                    case 3:
                                        let dependencyType = relationParts[i];
                                        this.relation = new TurkishDependencyRelation_1.TurkishDependencyRelation(toWord - 1, toIG - 1, dependencyType);
                                        break;
                                }
                            }
                        }
                    }
                }
                for (let i = 1; i <= 9; i++) {
                    if (wordNode.getAttributeValue("ORG_IG" + i) != "") {
                        let IG = wordNode.getAttributeValue("ORG_IG" + i);
                        this.originalParses.push(new MorphologicalParse_1.MorphologicalParse(this.splitIntoInflectionalGroups(IG)));
                    }
                }
            }
        }
        /**
         * Given the morphological parse of a word, this method splits it into inflectional groups.
         * @param IG Morphological parse of the word in string form.
         * @return An array of inflectional groups stored as strings.
         */
        splitIntoInflectionalGroups(IG) {
            let inflectionalGroups = new Array();
            IG = IG.replace("\\(\\+Punc", "@").replace("\\)\\+Punc", "\\$");
            let iGs = IG.split(/[\[\]()]/);
            for (let i = 0; i < iGs.length; i++) {
                iGs[i] = iGs[i].replace("@", "\\(\\+Punc").replace("\\$", "\\)\\+Punc");
                if (iGs[i].length != 0) {
                    inflectionalGroups.push(iGs[i]);
                }
            }
            return inflectionalGroups;
        }
        /**
         * Accessor for the parse attribute
         * @return Parse attribute
         */
        getParse() {
            return this.parse;
        }
        /**
         * Accessor for a specific parse.
         * @param index Index of the word.
         * @return Parse of the index'th word
         */
        getOriginalParse(index) {
            if (index < this.originalParses.length) {
                return this.originalParses[index];
            }
            else {
                return undefined;
            }
        }
        /**
         * Number of words in this item.
         * @return Number of words in this item.
         */
        size() {
            return this.originalParses.length;
        }
        /**
         * Accessor for the relation attribute.
         * @return relation attribute.
         */
        getRelation() {
            return this.relation;
        }
    }
    exports.TurkishDependencyTreeBankWord = TurkishDependencyTreeBankWord;
});
//# sourceMappingURL=TurkishDependencyTreeBankWord.js.map