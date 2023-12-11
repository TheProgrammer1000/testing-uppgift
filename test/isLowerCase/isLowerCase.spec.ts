import { isLowerCase } from './isLowerCase';

describe('test isLowerCase', () => {
    it('should return true if it only contain lowercase otherwise false ', () => {
        const result = isLowerCase('hello world')
        expect(result).toBe(true)
    })
})

