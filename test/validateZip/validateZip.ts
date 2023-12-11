export const validateZip = (zipCode: string) => {
    if(zipCode.length === 5 && !isNaN(Number(zipCode))) {
        return true;
    }
    else {
        throw new Error('Invalid zip code');
    }
}