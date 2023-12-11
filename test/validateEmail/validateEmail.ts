export const validateEmail = (email: string): boolean => {
    if(email.includes('@')) {
        return true;
    } 
    throw Error('Invalid email')
}