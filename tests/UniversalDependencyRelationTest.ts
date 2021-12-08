import * as assert from "assert";
import {UniversalDependencyRelation} from "../dist/Universal/UniversalDependencyRelation";
import {UniversalDependencyPosType} from "../dist/Universal/UniversalDependencyPosType";
import {UniversalDependencyType} from "../dist/Universal/UniversalDependencyType";

describe('UniversalDependencyRelationTest', function() {
    describe('UniversalDependencyRelationTest', function() {
        it('testDependencyPosType', function() {
            assert.ok(UniversalDependencyRelation.getDependencyPosType("adj") == UniversalDependencyPosType.ADJ);
            assert.ok(UniversalDependencyRelation.getDependencyPosType("intj") == UniversalDependencyPosType.INTJ);
            assert.ok(UniversalDependencyRelation.getDependencyPosType("Det") == UniversalDependencyPosType.DET);
        });
        it('testDependencyType', function() {
            assert.ok(UniversalDependencyRelation.getDependencyTag("acl") == UniversalDependencyType.ACL);
            assert.ok(UniversalDependencyRelation.getDependencyTag("iobj") == UniversalDependencyType.IOBJ);
            assert.ok(UniversalDependencyRelation.getDependencyTag("Iobj") == UniversalDependencyType.IOBJ);
            assert.ok(UniversalDependencyRelation.getDependencyTag("fixed") == UniversalDependencyType.FIXED);
        });
    });
});
