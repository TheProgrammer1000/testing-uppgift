import { primNumberCheck } from './primNumberCheck'

describe('test primNumberCheck', () => {
    it('should return true if it is a prim number otherwise false ', () => {
        expect(primNumberCheck(2)).toBe(true)
    })
})

