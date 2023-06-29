export async function getNumberOfEachByAttribute(objects: [], attribute: string) {
    const filters = new Map<string, number>();
    objects.forEach((obj) => {
        const prevNumber: number | undefined = filters.get(obj[attribute]);
        filters.set(obj[attribute], prevNumber ? prevNumber + 1 : 1);
    });
    return filters;
}