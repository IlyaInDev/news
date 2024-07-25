export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
    handlePageClick: (page: number) => void;
}