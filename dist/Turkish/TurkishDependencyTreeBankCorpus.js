(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Corpus", "nlptoolkit-xmlparser/dist/XmlDocument", "./TurkishDependencyTreeBankSentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishDependencyTreeBankCorpus = void 0;
    const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
    const XmlDocument_1 = require("nlptoolkit-xmlparser/dist/XmlDocument");
    const TurkishDependencyTreeBankSentence_1 = require("./TurkishDependencyTreeBankSentence");
    class TurkishDependencyTreeBankCorpus extends Corpus_1.Corpus {
        /**
         * Another constructor for {@link TurkishDependencyTreeBankCorpus}. The method gets the corpus as a xml file, and
         * reads sentences one by one. For each sentence, the function constructs a TurkishDependencyTreeBankSentence.
         * @param fileName Input file name to read the TurkishDependencyTreeBankCorpus.
         */
        constructor(fileName) {
            super();
            let doc = new XmlDocument_1.XmlDocument(fileName);
            doc.parse();
            let rootNode = doc.getFirstChild();
            let sentenceNode = rootNode.getFirstChild();
            while (sentenceNode != undefined) {
                let sentence = new TurkishDependencyTreeBankSentence_1.TurkishDependencyTreeBankSentence(sentenceNode);
                this.addSentence(sentence);
                sentenceNode = sentenceNode.getNextSibling();
            }
        }
    }
    exports.TurkishDependencyTreeBankCorpus = TurkishDependencyTreeBankCorpus;
});
//# sourceMappingURL=TurkishDependencyTreeBankCorpus.js.map