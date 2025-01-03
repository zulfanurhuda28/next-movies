import CardSkeleton from "@/components/skeleton/CardSkeleton";
import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { fetchFromAPI } from "@/utils/fetchApi";
import { Metadata } from "next";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{ mediatype: string }>;

interface ISearchQuery {
  page: number;
  results: IAllList[];
  total_pages: number;
  total_results: number;
}

export async function generateMetadata(props: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const searchParams = await props.searchParams;

  const query = searchParams.query;

  return {
    title: `Search results for: ${query} - Movies App`,
  };
}

export default async function PageSearch(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { mediatype } = await props.params;
  const searchParams = await props.searchParams;

  const { query, page } = searchParams;

  const data = await fetchFromAPI<ISearchQuery>(
    `search/multi?query=${query}&api_key=${process.env.API_KEY}&page=${page !== undefined ? page : `1`}`,
  );

  return (
    <main className="w-full px-2 lg:px-5">
      {data?.results.length === 0 ? (
        <section className="my-28 flex flex-col items-center justify-center lg:my-48">
          <h1 className="text-2xl font-bold lg:text-4xl">No result found</h1>
          <p className="mt-5 text-lg">
            No results found for &quot;
            <span className="font-bold">{query}</span>&quot;
          </p>
          <p className="text-lg">Please try a different search term.</p>
        </section>
      ) : (
        <>
          <section>
            <div className="mt-20 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                Search results for
              </h1>
              <span className="text-xl">&quot;{query}&quot;</span>
            </div>
          </section>
          <section>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
              <Suspense
                fallback={
                  <CardSkeleton length={data?.results.length as number} />
                }
              >
                {data?.results.map((data, i) => (
                  <Card data={data} mediatype={mediatype} key={i} />
                ))}
              </Suspense>
            </div>
          </section>
          <Suspense>
            {data?.total_pages !== 1 && (
              <ListPagination totalPage={data?.total_pages} />
            )}
          </Suspense>
        </>
      )}
    </main>
  );
}
