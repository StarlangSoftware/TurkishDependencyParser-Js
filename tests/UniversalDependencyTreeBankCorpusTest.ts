import * as assert from "assert";
import {UniversalDependencyTreeBankCorpus} from "../dist/Universal/UniversalDependencyTreeBankCorpus";

describe('UniversalDependencyTreeBankCorpusTest', function() {
    describe('UniversalDependencyTreeBankCorpusTest', function() {
        it('testDependencyCorpus1', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_gb-ud-test.conllu");
            assert.strictEqual(2802, corpus.sentenceCount());
        });
        it('testDependencyCorpus2', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_imst-ud-dev.conllu");
            assert.strictEqual(988, corpus.sentenceCount());
        });
        it('testDependencyCorpus3', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_imst-ud-test.conllu");
            assert.strictEqual(983, corpus.sentenceCount());
        });
        it('testDependencyCorpus4', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_imst-ud-train.conllu");
            assert.strictEqual(3664, corpus.sentenceCount());
        });
        it('testDependencyCorpus5', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_pud-ud-test.conllu");
            assert.strictEqual(1000, corpus.sentenceCount());
        });
        it('testDependencyCorpus6', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_boun-ud-dev.conllu");
            assert.strictEqual(979, corpus.sentenceCount());
        });
        it('testDependencyCorpus7', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_boun-ud-test.conllu");
            assert.strictEqual(979, corpus.sentenceCount());
        });
        it('testDependencyCorpus8', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_boun-ud-train.conllu");
            assert.strictEqual(7803, corpus.sentenceCount());
        });
    });
});
