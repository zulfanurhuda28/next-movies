import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Popular Tv Shows - Movie App",
  description: "Generated by create next app",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Popular(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&page=${page === undefined ? 1 : page}`,
  );

  const { results } = await response.json();

  return (
    <main>
      <section className="mx-auto mt-24 w-[95%]">
        <div className="my-16 lg:w-[60%]">
          <h1 className="text-3xl font-semibold">Popular TV Shows</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Dive into the world of popular TV shows that have captured the
            hearts of audiences worldwide. From binge-worthy series to
            critically acclaimed dramas, discover what's trending in the TV
            universe.
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
