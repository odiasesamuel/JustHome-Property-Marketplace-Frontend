import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type PaginationProps = {
  page: number;
  perPage: number;
  pageCount: number;
  search: string | null;
  forSaleOrRent: string | null;
  propertyType: string | null;
  minPrice: string | null;
  maxPrice: string | null;
};

export const PaginationComponent = ({ page, perPage, pageCount, search, forSaleOrRent, propertyType, minPrice, maxPrice }: PaginationProps) => {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (forSaleOrRent) params.append("forSaleOrRent", forSaleOrRent);
  if (propertyType) params.append("propertyType", propertyType);
  if (minPrice) params.append("minPrice", minPrice);
  if (maxPrice) params.append("maxPrice", maxPrice);

  if (pageCount <= 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={page > 1 ? `?page=${page - 1}&perPage=${perPage}&${params.toString()}` : "#"} className={page === 1 ? "pointer-events-none opacity-50" : ""} />
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
          <PaginationNext href={page < pageCount ? `?page=${page + 1}&perPage=${perPage}&${params.toString()}` : "#"} className={page === pageCount ? "pointer-events-none opacity-50" : ""} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
