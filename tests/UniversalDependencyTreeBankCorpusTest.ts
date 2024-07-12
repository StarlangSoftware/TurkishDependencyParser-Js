import * as assert from "assert";
import {UniversalDependencyTreeBankCorpus} from "../dist/Universal/UniversalDependencyTreeBankCorpus";

describe('UniversalDependencyTreeBankCorpusTest', function() {
    describe('UniversalDependencyTreeBankCorpusTest', function() {
        it('testDependencyCorpus1', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_gb-ud-test.conllu");
            assert.strictEqual(2880, corpus.sentenceCount());
        });
        it('testDependencyCorpus2', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_imst-ud-dev.conllu");
            assert.strictEqual(1100, corpus.sentenceCount());
        });
        it('testDependencyCorpus3', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_imst-ud-test.conllu");
            assert.strictEqual(1100, corpus.sentenceCount());
        });
        it('testDependencyCorpus4', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_imst-ud-train.conllu");
            assert.strictEqual(3435, corpus.sentenceCount());
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
        it('testDependencyCorpus9', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("en_atis-ud-dev.conllu");
            assert.strictEqual(572, corpus.sentenceCount());
        });
        it('testDependencyCorpus10', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("en_atis-ud-test.conllu");
            assert.strictEqual(586, corpus.sentenceCount());
        });
        it('testDependencyCorpus11', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("en_atis-ud-train.conllu");
            assert.strictEqual(4274, corpus.sentenceCount());
        });
        it('testDependencyCorpus12', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_atis-ud-dev.conllu");
            assert.strictEqual(572, corpus.sentenceCount());
        });
        it('testDependencyCorpus13', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_atis-ud-test.conllu");
            assert.strictEqual(586, corpus.sentenceCount());
        });
        it('testDependencyCorpus14', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_atis-ud-train.conllu");
            assert.strictEqual(4274, corpus.sentenceCount());
        });
        it('testDependencyCorpus15', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_framenet-ud-dev.conllu");
            assert.strictEqual(205, corpus.sentenceCount());
        });
        it('testDependencyCorpus16', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_framenet-ud-test.conllu");
            assert.strictEqual(205, corpus.sentenceCount());
        });
        it('testDependencyCorpus17', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_framenet-ud-train.conllu");
            assert.strictEqual(2288, corpus.sentenceCount());
        });
        it('testDependencyCorpus18', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_kenet-ud-dev.conllu");
            assert.strictEqual(1646, corpus.sentenceCount());
        });
        it('testDependencyCorpus19', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_kenet-ud-test.conllu");
            assert.strictEqual(1643, corpus.sentenceCount());
        });
        it('testDependencyCorpus20', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_kenet-ud-train.conllu");
            assert.strictEqual(15398, corpus.sentenceCount());
        });
        it('testDependencyCorpus21', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_penn-ud-dev.conllu");
            assert.strictEqual(622, corpus.sentenceCount());
        });
        it('testDependencyCorpus22', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_penn-ud-test.conllu");
            assert.strictEqual(924, corpus.sentenceCount());
        });
        it('testDependencyCorpus23', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_penn-ud-train.conllu");
            assert.strictEqual(14850, corpus.sentenceCount());
        });
        it('testDependencyCorpus24', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_tourism-ud-dev.conllu");
            assert.strictEqual(2166, corpus.sentenceCount());
        });
        it('testDependencyCorpus25', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_tourism-ud-test.conllu");
            assert.strictEqual(2191, corpus.sentenceCount());
        });
        it('testDependencyCorpus26', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("tr_tourism-ud-train.conllu");
            assert.strictEqual(15473, corpus.sentenceCount());
        });
        it('testDependencyCorpus27', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("en_ewt-ud-dev.conllu");
            assert.strictEqual(2001, corpus.sentenceCount());
        });
        it('testDependencyCorpus28', function() {
            let corpus = new UniversalDependencyTreeBankCorpus("en_ewt-ud-test.conllu");
            assert.strictEqual(2077, corpus.sentenceCount());
        });
    });
});
