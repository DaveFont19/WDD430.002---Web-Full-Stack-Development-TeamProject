import "@/app/ui/products/featured-products.css";
import { fetchProductSearchPages } from "@/app/query/route";
import Search from "@/app/ui/products/search";
import Table from "@/app/ui/products/table";
import Pagination from "@/app/ui/products/pagination";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductSearchPages(query);

  return (
    <div className="w-full">
      <div id="product-search">
        <Search placeholder="Search products..." />
      </div>
      <Table query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}
