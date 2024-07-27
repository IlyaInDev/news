import { TOTAL_PAGES } from '@/shared/constants/constants';
import { Pagination } from '@/features/pagination';
import { NewsListWithSkeleton } from '@/widgets/news';
import { IFilter } from '@/shared/interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
    filters: IFilter;
    news: INews[];
    isLoading: boolean;
}

export const NewsListWithPagination = (props: Props) => {
  const {
    filters,
    news,
    isLoading
  } = props;

  const {
    handleNextPage,
    handlePageClick,
    handlePreviousPage
  } = usePaginationNews(filters);

  return (
        <Pagination
            top
            bottom
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        >
            <NewsListWithSkeleton
                isLoading={isLoading}
                news={news}
                direction='column'
            />
        </Pagination>
    )
}
