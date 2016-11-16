import uid from '../index'

import * as chai from 'chai'

const expect = chai.expect

describe('works', function () {

    it('is ok', function () {
        const u = uid()
        expect(u).to.be.ok
    })

})