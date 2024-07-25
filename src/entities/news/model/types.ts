import { CategoriesType } from "@/entities/category";

export interface INews {
    id: string;
    title: string;
    description: string;
    url: string;
    author: string;
    image: string;
    language: string;
    category: CategoriesType[];
    published: string;
}
export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}