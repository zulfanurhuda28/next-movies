import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "On The Air Tv Shows - Movie App",
  description: "Generated by create next app",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function OnTheAir(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&page=${page === undefined ? 1 : page}`,
  );

  const { results } = await response.json();

  return (
    <main className="mt-24 w-full px-2 lg:px-5">
      <section>
        <div className="my-16 lg:w-[60%]">
          <h1 className="text-3xl font-semibold">On The Air</h1>
          <p className="mt-2 text-medium text-gray-700 dark:text-gray-400 lg:text-lg">
            Tune in to the latest buzz with shows currently on the air. From
            gripping dramas to laugh-out-loud comedies, watch what&apos;s
            captivating audiences right now.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype="tv" />;
          })}
        </div>
        {results?.total_pages !== 1 && (
          <Suspense fallback={<p>Loading...</p>}>
            <ListPagination totalPage={results?.total_pages} />
          </Suspense>
        )}
      </section>
    </main>
  );
}
