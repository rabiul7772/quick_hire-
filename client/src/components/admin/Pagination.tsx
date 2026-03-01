import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  startIndex: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  startIndex,
  onPageChange
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-20 bg-neutral-0/10">
      <div className="text-sm font-epilogue text-neutral-60 text-center sm:text-left">
        Showing{' '}
        <span className="font-semibold text-neutral-100">{startIndex + 1}</span>{' '}
        to{' '}
        <span className="font-semibold text-neutral-100">
          {Math.min(startIndex + itemsPerPage, totalItems)}
        </span>{' '}
        of <span className="font-semibold text-neutral-100">{totalItems}</span>{' '}
        results
      </div>
      <div className="flex items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 border border-neutral-20 rounded-lg hover:bg-white hover:border-brand-primary hover:text-brand-primary disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-neutral-60 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          title="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-semibold font-epilogue">Prev</span>
        </button>
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 max-w-[120px] xs:max-w-none">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg text-sm font-bold font-epilogue transition-all ${
                currentPage === page
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'hover:bg-white text-neutral-60 hover:text-brand-primary border border-transparent hover:border-neutral-20'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 border border-neutral-20 rounded-lg hover:bg-white hover:border-brand-primary hover:text-brand-primary disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-neutral-60 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          title="Next Page"
        >
          <span className="text-sm font-semibold font-epilogue">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
