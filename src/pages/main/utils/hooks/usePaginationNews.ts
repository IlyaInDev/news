import { useAppDispatch } from "@/app/appStore";
import { newsActions } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilter } from "@/shared/interfaces";

export const usePaginationNews = (filters: IFilter) => {
  const dispatch = useAppDispatch();
  
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
        dispatch(newsActions.setFilters({ key: 'page_number', value: filters.page_number + 1 }));
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
        dispatch(newsActions.setFilters({ key: 'page_number', value: filters.page_number - 1 }));
    }
  }

  const handlePageClick = (pageNumber: number) => {
    dispatch(newsActions.setFilters({ key: 'page_number', value: pageNumber }))
  }

  return {
    handleNextPage,
    handlePreviousPage,
    handlePageClick
  };
}