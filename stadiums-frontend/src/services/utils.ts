export async function getNumberOfEachByAttribute(objects: [], attribute: string) {
    const filters = new Map<string, number>();
    objects.forEach((obj) => {
        let filterName: any = obj[attribute];
        if (filterName === true) {
            filterName = "True";
        } else if (filterName === false) {
            filterName = "False";
        }
        const prevNumber: number | undefined = filters.get(filterName);
        filters.set(filterName, prevNumber ? prevNumber + 1 : 1);
    });
    return filters;
}