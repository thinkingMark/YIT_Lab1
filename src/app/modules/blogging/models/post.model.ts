import { Author } from "./author.model";

export class Post{
    author : Author | undefined;
    image : string | undefined;
    shortDescription : string | undefined;
    date : string | undefined;
}