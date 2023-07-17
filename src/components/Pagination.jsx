import React from "react";
import "./Pagination.scss"

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  const handleNextPage = () => {
    onNextPage();
  };

  const handlePrevPage = () => {
    onPrevPage();
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;