interface BookMetadata {
    isbn: string,
    publisher: string,
    yearPublished: number,
    edition: number
};
interface Book {
    id:string,
    title:string,
    author:string,
    metadata:BookMetadata
};

export function getBookDisplayTitle(book:Book):string {
    return `${book.title} by ${book.author}`
}