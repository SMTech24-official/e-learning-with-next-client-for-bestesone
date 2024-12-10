import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { partners } from "@/components/home/OurPartnerInstituteList";
import PartnerCard from "@/components/home/PartnerCard/PartnerCard";

const AllInstitute = () => {
  return (
    <div className="container mb-10">
      <h1 className="text-3xl font-bold text-heading-text my-12">
        All Institute List
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 mb-[66px]">
        {partners.map((partner, idx) => {
          return <PartnerCard key={idx} {...partner} />;
        })}
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">8</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">9</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default AllInstitute;
