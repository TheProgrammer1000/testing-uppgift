import { validateEmail } from './validateEmail'

describe('test validateEmail', () => {
    it('should have @ in the email if not throw an error otherwise return true', () => {
        const result = validateEmail('dennis@gmail.com');
        expect(result).toBe(true);
    })
})