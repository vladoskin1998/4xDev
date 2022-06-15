export function prettyNumbers(num: string | number): string {
    if (num === null || num === undefined) return "0";
    const n = num.toString();
    return n.replace(/(\d{5})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
}
