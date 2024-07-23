import { ReactNode } from "react";
import { Pagination } from "../Pagination/Pagination"
import { IPaginationProps } from "../../interfaces";

interface Props {
    children: ReactNode;
    top?: boolean;
    bottom?: boolean;
}

export const PaginationWrapper = (props: Props & IPaginationProps) => {
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
