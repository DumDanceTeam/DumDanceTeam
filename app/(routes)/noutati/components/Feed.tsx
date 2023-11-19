"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import { FacebookPost } from "@/types";
import Post from "./Post";
import Image from "next/image";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";

const Feed = () => {

  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0.5,
  });

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `/api/getFacebookPosts?limit=4&page=${pageParam}`;

      const { data } = await axios.get(query);

      return data.posts as FacebookPost[];
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry, fetchNextPage]);

  const feedData = data?.pages.flatMap((page) => page);
  
  return (
    <div>
      {!feedData || feedData.length === 0 ? (
        <div className="">
          <Image
            width={300}
            height={200}
            loading="lazy"
            src={"/ddt-black.png"}
            className="mx-auto max-w-[300px] mt-4 mb-2 max-h-[200px] w-full h-full rounded-md animate-pulse"
            alt="facebookImage"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center">
          {feedData &&
            feedData.length > 0 &&
            feedData.map((fbPost, i) => {
              if (i === feedData.length - 1)
                return (
                  <div ref={ref} key={fbPost.id}>
                    <Post post={fbPost} />
                  </div>
                );
              else return <Post key={fbPost.id} post={fbPost} />;
            })}
            {isFetchingNextPage && (
                <p className="text-xs text-center">Se încarcă...</p>
            )}
        </div>
      )}
    </div>
  );
};

export default Feed;
