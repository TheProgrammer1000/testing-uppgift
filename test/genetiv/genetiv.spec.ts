import { genetiv } from './genetiv';

describe('test genetiv', () => {
    it('should return genetiv of a word', () => {
        expect(genetiv('Anders')).toBe('Anders')
        expect(genetiv('Anna')).toBe('Annas')
    })
})