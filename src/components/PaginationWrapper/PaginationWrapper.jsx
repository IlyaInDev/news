import { Pagination } from "../Pagination/Pagination"

export const PaginationWrapper = (props) => {
  const {
    top,
    bottom,
    children,
    ...paginationProps
  } = props;

  return (
    <>
        {top && <Pagination {...paginationProps} />}

        {children}

        {bottom && <Pagination {...paginationProps} />}
    </>
  )
}
