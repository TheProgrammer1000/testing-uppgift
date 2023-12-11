interface Group {
    id: number;
    groupName: string;
}
export const getGroups = async (): Promise<Array<Group>> => {
    return await [
        { id: 1, groupName: 'Hajarna' },
        { id: 2, groupName: 'Valarna' },
        {id: 3, groupName: 'Zebrorna'}
    ]
}