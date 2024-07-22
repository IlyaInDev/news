import { useState } from "react";

export const useFilter = (initialFilters) => {
    const [filters, setFilters] = useState(initialFilters);
    
    const changeFilter = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    }

    return {
        filters,
        changeFilter,
    };
}