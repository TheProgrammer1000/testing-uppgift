export const isLowerCase = (text: string) => {
    const uppercaseRegex = /[A-Z]/;
    return !uppercaseRegex.test(text);
}