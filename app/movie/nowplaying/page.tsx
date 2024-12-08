import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import useFetchList from "@/hooks/useFetchList";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: "Now Playing Movie - Movie App",
  description: "Generated by create next app",
};

export default async function NowPlaying({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page } = await searchParams;

  const results = await useFetchList(
    `movie`,
    `now_playing`,
    `${process.env.API_KEY}&page=${page === undefined ? 1 : page}`,
  );

  return (
    <main>
      <section className="mx-auto mt-24 w-[95%]">
        <div className="my-16 lg:w-[60%]">
          <h1 className="text-3xl font-semibold">Now Playing Movies</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Catch the latest movies now playing in theaters near you. Experience
            the magic of cinema with current hits.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {results?.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype={"movie"} />;
          })}
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <ListPagination />
        </Suspense>
      </section>
    </main>
  );
}
