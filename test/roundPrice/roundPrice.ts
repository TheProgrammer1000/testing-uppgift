export const roundPrice = (number: number, valuta: string) => {
    if(isNaN(number)) {
        throw new Error('Input must be a number');
    }
    if(valuta.includes('kr')) {
        const finalNumber = Math.round(number * 100) / 100;

        return `${finalNumber.toFixed(2)} kr`;
    }
    else if(valuta.includes('$')) {
        const finalNumber = Math.round(number * 100) / 100;

        return `$${finalNumber.toFixed(2)}`;

    }
    else if (valuta.includes('USD')) {
        const finalNumber = Math.round(number * 100) / 100;

        return `USD ${finalNumber.toFixed(2)}`;
    
    }
}