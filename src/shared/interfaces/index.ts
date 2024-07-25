import { CategoriesType } from "@/entities/category/model/types";

export interface IFilter {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}

export type ParamsType = Partial<IFilter>;

export type SkeletonType = 'banner' | 'item';
export type SkeletonDirection = 'row' | 'column';