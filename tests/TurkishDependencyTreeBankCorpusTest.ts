import * as assert from "assert";
import {TurkishDependencyType} from "../dist/Turkish/TurkishDependencyType";
import {CounterHashMap} from "nlptoolkit-datastructure/dist/CounterHashMap";
import {TurkishDependencyTreeBankCorpus} from "../dist/Turkish/TurkishDependencyTreeBankCorpus";
import {TurkishDependencyTreeBankSentence} from "../dist/Turkish/TurkishDependencyTreeBankSentence";
import {TurkishDependencyTreeBankWord} from "../dist/Turkish/TurkishDependencyTreeBankWord";

describe('TurkishDependencyTreeBankCorpusTest', function() {
    describe('TurkishDependencyTreeBankCorpusTest', function() {
        it('testDependencyCorpus', function() {
            let relationCounts = new CounterHashMap<TurkishDependencyType>();
            let corpus = new TurkishDependencyTreeBankCorpus("metu-treebank.xml");
            assert.strictEqual(5635, corpus.sentenceCount());
            let wordCount = 0;
            for (let i = 0; i < corpus.sentenceCount(); i++){
                let sentence = <TurkishDependencyTreeBankSentence> corpus.getSentence(i);
                wordCount += sentence.wordCount();
                for (let j = 0; j < sentence.wordCount(); j++){
                    let word = <TurkishDependencyTreeBankWord> sentence.getWord(j);
                    if (word.getRelation() != undefined){
                        relationCounts.put(word.getRelation().getTurkishDependencyType());
                    }
                }
            }
            assert.strictEqual(11692, relationCounts.get(TurkishDependencyType.MODIFIER));
            assert.strictEqual(903, relationCounts.get(TurkishDependencyType.INTENSIFIER));
            assert.strictEqual(1142, relationCounts.get(TurkishDependencyType.LOCATIVE_ADJUNCT));
            assert.strictEqual(240, relationCounts.get(TurkishDependencyType.VOCATIVE));
            assert.strictEqual(7261, relationCounts.get(TurkishDependencyType.SENTENCE));
            assert.strictEqual(16, relationCounts.get(TurkishDependencyType.EQU_ADJUNCT));
            assert.strictEqual(159, relationCounts.get(TurkishDependencyType.NEGATIVE_PARTICLE));
            assert.strictEqual(4481, relationCounts.get(TurkishDependencyType.SUBJECT));
            assert.strictEqual(2476, relationCounts.get(TurkishDependencyType.COORDINATION));
            assert.strictEqual(2050, relationCounts.get(TurkishDependencyType.CLASSIFIER));
            assert.strictEqual(73, relationCounts.get(TurkishDependencyType.COLLOCATION));
            assert.strictEqual(1516, relationCounts.get(TurkishDependencyType.POSSESSOR));
            assert.strictEqual(523, relationCounts.get(TurkishDependencyType.ABLATIVE_ADJUNCT));
            assert.strictEqual(23, relationCounts.get(TurkishDependencyType.FOCUS_PARTICLE));
            assert.strictEqual(1952, relationCounts.get(TurkishDependencyType.DETERMINER));
            assert.strictEqual(1361, relationCounts.get(TurkishDependencyType.DATIVE_ADJUNCT));
            assert.strictEqual(202, relationCounts.get(TurkishDependencyType.APPOSITION));
            assert.strictEqual(289, relationCounts.get(TurkishDependencyType.QUESTION_PARTICLE));
            assert.strictEqual(597, relationCounts.get(TurkishDependencyType.S_MODIFIER));
            assert.strictEqual(10, relationCounts.get(TurkishDependencyType.ETOL));
            assert.strictEqual(8338, relationCounts.get(TurkishDependencyType.OBJECT));
            assert.strictEqual(271, relationCounts.get(TurkishDependencyType.INSTRUMENTAL_ADJUNCT));
            assert.strictEqual(85, relationCounts.get(TurkishDependencyType.RELATIVIZER));
            assert.strictEqual(53993, wordCount);
        });
    });
});
