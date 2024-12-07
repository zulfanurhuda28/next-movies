import Card from "@/components/ui/Card";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Rated Movie - Movie App",
  description: "Generated by create next app",
};

export default async function UpComing() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`,
  );

  const { results } = await response.json();

  return (
    <main>
      <section className="mx-auto mt-24 w-[95%]">
        <div className="my-16 lg:w-[60%]">
          <h1 className="text-3xl font-semibold">Upcoming Movies</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-400">
            Be the first to watch the latest movies before they hit the big
            screen. Discover the upcoming movies that everyone is talking about.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((data: IAllList, i: number) => {
            return <Card data={data} key={i} mediatype="movie" />;
          })}
        </div>
        <ListPagination />
      </section>
    </main>
  );
}
