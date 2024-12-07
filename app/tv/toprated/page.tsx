import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Top Rated Tv Shows - Movie App",
  description: "Generated by create next app",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function TopRated(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&page=${page === undefined ? 1 : page}`,
  );

  const { results } = await response.json();

  return (
    <main>
      <section className="mx-auto mt-24 w-[95%]">
        <div className="my-16 lg:w-[60%]">
          <h1 className="text-3xl font-semibold">Top Rated</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Explore the pinnacle of television excellence with our collection of
            top-rated TV shows. These series have been recognized for their
            outstanding storytelling, acting, and production values.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype="tv" />;
          })}
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <ListPagination />
        </Suspense>
      </section>
    </main>
  );
}
