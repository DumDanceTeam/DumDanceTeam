"use client";

import { useIntersection } from "@mantine/hooks";
import { Image as ImageDB } from "@prisma/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";
import GalleryImage from "./GalleryImage";

interface GalleryFeedProps{
    initialImages: ImageDB[];
}

const GalleryFeed: React.FC<GalleryFeedProps> = ({initialImages}) => {
  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0.5,
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `/api/images?limit=4&page=${pageParam}`;

      const { data } = await axios.get(query);
        console.log("Data",data);
        
      return data as ImageDB[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData:{pages:[initialImages], pageParams:[1]}
    }
  );

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  const feedData = data?.pages.flatMap((page) => page) ?? initialImages;

  return (
    <div className="mt-6 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
      {feedData && feedData.length > 0
        ? feedData.map((gImg, i) => {
            if (i === feedData.length - 1)
              return (
                <div ref={ref} key={i}>
                  <GalleryImage galleryImage={gImg.url} key={gImg.id} />
                </div>
              );
              else return <GalleryImage galleryImage={gImg.url} key={gImg.id} />
          })
        : null}
      {isFetchingNextPage && (
        <p className="text-xs text-center text-ddtWhite">Se încarcă...</p>
      )}
    </div>
  );
};

export default GalleryFeed;
