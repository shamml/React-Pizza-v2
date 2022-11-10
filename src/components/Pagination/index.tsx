import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Paginatoin.module.scss';

type TPaginationProps = {
  currentPage: number;
  onChangePage: (value: number) => void;
};

export const Pagination: FC<TPaginationProps> = ({
  currentPage,
  onChangePage,
}) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(e) => onChangePage(e.selected + 1)}
    pageRangeDisplayed={8}
    pageCount={3}
    forcePage={currentPage - 1}
  />
);
