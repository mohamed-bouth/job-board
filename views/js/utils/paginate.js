export function paginate(array, page_size, page_number = 1) {
    const start = (page_number - 1) * page_size;
    const end = start + page_size;
    return array.slice(start, end);
}