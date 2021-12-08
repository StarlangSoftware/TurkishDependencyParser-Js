import * as assert from "assert";
import {StanfordDependencyRelation} from "../dist/Stanford/StanfordDependencyRelation";
import {StanfordDependencyType} from "../dist/Stanford/StanfordDependencyType";

describe('StanfordDependencyRelationTest', function() {
    describe('StanfordDependencyRelationTest', function() {
        it('testDependencyType', function() {
            assert.ok(StanfordDependencyRelation.getDependencyTag("acomp") == StanfordDependencyType.ACOMP);
            assert.ok(StanfordDependencyRelation.getDependencyTag("discourse") == StanfordDependencyType.DISCOURSE);
            assert.ok(StanfordDependencyRelation.getDependencyTag("Iobj") == StanfordDependencyType.IOBJ);
            assert.ok(StanfordDependencyRelation.getDependencyTag("iobj") == StanfordDependencyType.IOBJ);
        });
    });
});
