import { roundPrice } from './roundPrice'

describe('test roundPrice', () => { 
    it('should round price up 2 and to Swedish SEK', () => {
        const result = roundPrice(1024.2048, '%PRICE% kr')
        expect(result).toBe('1024.20 kr')
    })
    it('should round price up 2 and to Europe Euro', () => {
        const result = roundPrice(14, '$%PRICE%')
        expect(result).toBe('$14.00')
    })
    it('should round price up 2 and to American USD', () => {
        const result = roundPrice(1024.2048, 'USD %PRICE%')
        expect(result).toBe('USD 1024.20')
    })
})