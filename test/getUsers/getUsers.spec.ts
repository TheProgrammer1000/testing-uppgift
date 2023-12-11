import { getUsers } from './getUsers'

describe('test getUsers', () => {
    it('should return users', async () => {
        return await getUsers().then(users => {
            expect(users).toEqual([
                { name: 'John', group: 1 },
                { name: 'Jane', group: 2 },
                { name: 'Joe', group: 1 },
            ])
        })
    })
})