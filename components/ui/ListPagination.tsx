"use client";

import { Pagination } from "@nextui-org/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ListPagination = () => {
  const searchParams = useSearchParams();
  const getPage = searchParams.get("page");

  const totalPages = 100;
  const router = useRouter();
  const [siblings, setSiblings] = useState<number>(1);

  useEffect(() => {
    const updateSiblings = () => {
      setSiblings(window.innerWidth < 428 ? 0 : 1);
    };

    updateSiblings();
    window.addEventListener("resize", updateSiblings);

    return () => window.removeEventListener("resize", updateSiblings); // Clean up
  }, []);

  const handlePageChange = (page: number) => {
    router.push(`/movie/popular?page=${page}`);
  };
  return (
    <div>
      <Pagination
        classNames={{
          base: "mx-auto flex justify-center my-7",
          item: "mx-1",
        }}
        showControls
        boundaries={1}
        siblings={siblings}
        onChange={handlePageChange}
        total={totalPages}
        initialPage={getPage === null ? 1 : parseInt(getPage)}
      />
    </div>
  );
};

export default ListPagination;
