import { Author } from "./author";

export class Book{
    id: number;
    code: string;
    title: string;
    description: string;
    price: number;
    author: Author;
}