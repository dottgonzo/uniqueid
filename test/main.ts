import {uniqueid} from '../index'

import * as chai from 'chai'

const expect = chai.expect

describe('works', function () {

    it('is ok', function () {
        const u = uniqueid()
        expect(u).to.be.ok
    })

})