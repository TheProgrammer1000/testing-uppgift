interface User { 
    name: string;
    group: number
}

export const getUsers = async (): Promise<Array<User>> => {
    return await [
        { name: 'John', group: 1 },
        { name: 'Jane', group: 2 },
        { name: 'Joe', group: 1 },
    ]  
}