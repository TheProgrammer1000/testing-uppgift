import { validateZip } from './validateZip';

describe('test validateZip', () => {
    it('should have 5 digits in the zip code', () => {
        const result = validateZip('12345');       
        console.log('result: ', result)
        expect(result).toBe(true);

    })
})
