import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type PaginationProps = {
  page: number;
  perPage: number;
  pageCount: number;
  search: string | null;
};

export const PaginationComponent = ({ page, perPage, pageCount, search }: PaginationProps) => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);


  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${Math.max(page - 1, 1)}&perPage=${perPage}&${params.toString()}`} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={`?page=1&perPage=${perPage}&${params.toString()}`} className={`px-3 py-2 rounded-md ${page === 1 ? "bg-appGreen text-white font-bold" : "hover:bg-gray-200"}`}>
            1
          </PaginationLink>
        </PaginationItem>

        {page > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {[...Array(pageCount)].map((_, index) => {
          const pageNum = index + 1;
          if (pageNum === 1 || pageNum === pageCount) return null;

          if (pageNum >= page - 2 && pageNum <= page + 2) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink href={`?page=${pageNum}&perPage=${perPage}&${params.toString()}`} className={`px-3 py-2 rounded-md ${pageNum === page ? "bg-appGreen text-white font-bold" : "hover:bg-gray-200"}`}>
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}

        {page < pageCount - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={`?page=${pageCount}&perPage=${perPage}&${params.toString()}`} className={`px-3 py-2 rounded-md ${page === pageCount ? "bg-appGreen text-white font-bold" : "hover:bg-gray-200"}`}>
            {pageCount}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href={`?page=${Math.min(page + 1, pageCount)}&perPage=${perPage}&${params.toString()}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
