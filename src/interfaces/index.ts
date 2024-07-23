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

export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
    handlePageClick: (page: number) => void;
}

export interface IFilter {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilter>;

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
}

export interface CategoriesApiResponse {
    categories: CategoriesType[];
    description: string;
    status: string;
}

export type SkeletonType = 'banner' | 'item';
export type SkeletonDirection = 'row' | 'column';

export type CategoriesType = 
    | 'regional'
    | 'technology'
    | 'lifestyle'
    | 'business'
    | 'general'
    | 'programming'
    | 'science'
    | 'entertainment'
    | 'world'
    | 'sports'
    | 'finance'
    | 'academia'
    | 'politics'
    | 'health'
    | 'opinion'
    | 'food'
    | 'game'
    | 'fashion'
    | 'academic'
    | 'crap'
    | 'travel'
    | 'culture'
    | 'economy'
    | 'environment'
    | 'art'
    | 'music'
    | 'notsure'
    | 'CS'
    | 'education'
    | 'redundant'
    | 'television'
    | 'commodity'
    | 'movie'
    | 'entrepreneur'
    | 'review'
    | 'auto'
    | 'energy'
    | 'celebrity'
    | 'medical'
    | 'gadgets'
    | 'design'
    | 'EE'
    | 'security'
    | 'mobile'
    | 'estate'
    | 'funny'