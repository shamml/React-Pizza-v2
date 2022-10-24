import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Paginatoin.module.scss';

type PaginationProps = { currentPage: number; onChangePage: any };

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};
