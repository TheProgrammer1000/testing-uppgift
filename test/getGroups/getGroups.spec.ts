import { getGroups } from "./getGroups"

interface Group {
    id: number;
    groupName: string;
}


describe('test getGroups', () => {
    it('should return groups', async () => {
        return await getGroups().then(group => {
            expect(group).toEqual([
                { id: 1, groupName: 'Hajarna' },
                { id: 2, groupName: 'Valarna' },
                {id: 3, groupName: 'Zebrorna'}
            ])
        })
    })
})