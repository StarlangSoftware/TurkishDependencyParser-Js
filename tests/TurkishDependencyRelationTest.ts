import * as assert from "assert";
import {TurkishDependencyRelation} from "../dist/Turkish/TurkishDependencyRelation";
import {TurkishDependencyType} from "../dist/Turkish/TurkishDependencyType";

describe('TurkishDependencyRelationTest', function() {
    describe('TurkishDependencyRelationTest', function() {
        it('testDependencyType', function() {
            assert.ok(TurkishDependencyRelation.getDependencyTag("subject") == TurkishDependencyType.SUBJECT);
            assert.ok(TurkishDependencyRelation.getDependencyTag("vocative") == TurkishDependencyType.VOCATIVE);
            assert.ok(TurkishDependencyRelation.getDependencyTag("Relativizer") == TurkishDependencyType.RELATIVIZER);
        });
    });
});
