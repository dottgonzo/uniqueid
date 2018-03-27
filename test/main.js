"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var chai = require("chai");
var expect = chai.expect;
describe('works', function () {
    it('is ok', function () {
        var u = index_1.uniqueid();
        expect(u).to.be.ok;
    });
});
