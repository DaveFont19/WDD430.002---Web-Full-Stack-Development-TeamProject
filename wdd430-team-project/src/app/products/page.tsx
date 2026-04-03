import "@/app/globals.css";
import "@/app/ui/featured-products.css";
import { devFetchProductSearchPages } from "@/app/query/route";
import Search from "../ui/search";
import Table from "../ui/table";

export default async function Page(
	props: {
		searchParams?: Promise<{
			query?: string;
			page?: string;
		}>;
	}
) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = await devFetchProductSearchPages();


	return (<>
		<div id="product-search">
			<Search placeholder="Search products..." />
		</div>
		<Table /></>
	)
}