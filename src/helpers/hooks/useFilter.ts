import { useState } from "react";
import { IFilter } from "../../interfaces";

export const useFilter = (initialFilters: IFilter) => {
    const [filters, setFilters] = useState<IFilter>(initialFilters);
    
    const changeFilter = (key: string, value: string | number | null) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    }

    return {
        filters,
        changeFilter,
    };
}