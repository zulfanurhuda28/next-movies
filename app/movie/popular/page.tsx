import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export const metadata: Metadata = {
  title: "Popular Movie - Movie App",
  description: "Generated by create next app",
};

export default async function popular(props: { searchParams: SearchParams }) {
  const { page } = await props.searchParams;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page === undefined ? 1 : page}`,
  );

  const { results } = await response.json();

  return (
    <main>
      <section className="mx-auto mt-16 w-[95%]">
        <div className="lg:w-[60%]">
          <h1 className="text-3xl font-semibold">Popular Movies</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Dive into the world of popular movies that have captured the hearts
            of audiences worldwide. From blockbuster hits to critically
            acclaimed films, discover what&apos;s trending in the cinematic
            universe.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype="movie" />;
          })}
        </div>
        <Suspense fallback={<p>Loading....</p>}>
          <ListPagination />
        </Suspense>
      </section>
    </main>
  );
}
