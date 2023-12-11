import { makeHeading } from './makeHeading'

describe('test makeHeading', () => {
    it('should return a HTML-heading-element', () => {
        const result = makeHeading('Hello World', 1);
        expect(result).toMatch(/h/);
    })
})