"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
}

const PaginationDemo: React.FC<PaginationProps> = ({ 
    totalItems, 
    itemsPerPage, 
    currentPage 
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        // Use router.push with scroll: false option
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => {
            const pageNumber = startPage + i;
            return (
                <PaginationItem key={pageNumber}>
                    <PaginationLink 
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pageNumber);
                        }}
                        isActive={pageNumber === currentPage}
                        className="cursor-pointer"
                    >
                        {pageNumber}
                    </PaginationLink>
                </PaginationItem>
            );
        });
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious 
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? 
                            "pointer-events-none opacity-50" : 
                            "cursor-pointer"
                        }
                    />
                </PaginationItem>
                
                {renderPageNumbers()}
                
                {totalPages > 5 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                
                <PaginationItem>
                    <PaginationNext 
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) handlePageChange(currentPage + 1);
                        }}
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? 
                            "pointer-events-none opacity-50" : 
                            "cursor-pointer"
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationDemo;