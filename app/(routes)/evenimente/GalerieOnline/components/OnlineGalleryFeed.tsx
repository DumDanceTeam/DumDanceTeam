"use client";
import GalleryImage from "@/components/about/GalleryImage";
import { useIntersection } from "@mantine/hooks";
import { OnlineImage } from "@prisma/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC, useEffect, useRef } from "react";

interface OnlineGalleryFeedProps {
  initialOnlineImages: OnlineImage[];
}

export const OnlineGalleryFeed: FC<OnlineGalleryFeedProps> = ({
  initialOnlineImages,
}) => {
  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0.5,
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `/api/onlineimages?limit=4&page=${pageParam}`;

      const { data } = await axios.get(query);

      return data as OnlineImage[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialOnlineImages], pageParams: [1] },
    }
  );

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  const feedData = data?.pages.flatMap((page) => page) ?? initialOnlineImages;

  return (
    <div className="my-10 grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 gap-6">
      {feedData && feedData.length > 0
        ? feedData.map((gImg, i) => {
            if (i === feedData.length - 1)
              return (
                <div ref={ref} key={i}>
                  <GalleryImage galleryImage={gImg.url} key={gImg.id} />
                </div>
              );
            else return <GalleryImage galleryImage={gImg.url} key={gImg.id} />;
          })
        : null}
      {isFetchingNextPage && (
        <p className="text-xs text-center text-black">Se încarcă...</p>
      )}
    </div>
  );
};
