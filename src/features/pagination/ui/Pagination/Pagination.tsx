import { ReactNode } from "react";
import { IPaginationProps } from "../../model/types";
import { PaginationButtons } from "../PaginationButtons/PaginationButtons";

interface Props {
    children: ReactNode;
    top?: boolean;
    bottom?: boolean;
}

export const Pagination = (props: Props & IPaginationProps) => {
  const {
    top,
    bottom,
    children,
    ...paginationProps
  } = props;

  return (
    <>
        {top && <PaginationButtons {...paginationProps} />}

        {children}

        {bottom && <PaginationButtons {...paginationProps} />}
    </>
  )
}
