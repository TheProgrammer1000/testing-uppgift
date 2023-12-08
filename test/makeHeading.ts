
export const makeHeading = (headingText: string, headingScale: number) => {
    if(!isNaN(headingScale)) {
        return `<h${headingScale}>${headingText}</h${headingScale}>`;
    }
    throw Error('Not implemented yet');
}