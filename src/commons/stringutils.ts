

export function wildcardsMatch(text = "", search = "") {
    const pattern = search?.toLowerCase().split(" ").join(".*");
    return text?.toLocaleLowerCase().match(pattern)
}