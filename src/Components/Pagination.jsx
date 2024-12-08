import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Pagination = ({ currentPage, totalPages, onPageChange, theme }) => {
  const maxVisiblePages = 10; 

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4 w-full">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "cursor-not-allowed"
            : "hover:opacity-90"
        }`}
        style={{
          backgroundColor: currentPage === 1 ? theme?.background  : theme?.font ,
          color: currentPage === 1 ? theme?.font  : theme?.background ,
        }}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={maxVisiblePages}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="pagination-swiper w-full"
      >
        {pages.map((page) => (
          <SwiperSlide key={page}>
            <button
              onClick={() => onPageChange(page)}
              className="px-3 py-1 rounded-md"
              style={{
                backgroundColor: page === currentPage ? theme?.font  : theme?.background ,
                color: page === currentPage ? theme?.background  : theme?.font ,
                border: page === currentPage ? `2px solid ${theme?.background }` : "none",
              }}
            >
              {page}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "cursor-not-allowed"
            : "hover:opacity-90"
        }`}
        style={{
          backgroundColor: currentPage === totalPages ? theme?.background  : theme?.font ,
          color: currentPage === totalPages ? theme?.font  : theme?.background ,
        }}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
