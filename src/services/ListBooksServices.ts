import prismaClient from "../dataBase";

class ListBooksServices {
    async execute(){
        const books = await prismaClient.books.findMany()
        return books

    }
}

export { ListBooksServices };
