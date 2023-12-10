import { FC } from "react";
import Hero from "@/components/Hero";
import prismadb from "@/lib/db";
import { OnlineGalleryFeed } from "./components/OnlineGalleryFeed";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const images = await prismadb.onlineImage.findMany({
    take: 4,
  });

  return (
    <main>
      <Hero label="Galerie Gala Dum Dance Team" />
      <div className="container mx-auto">
        {images.length > 0 ? (
          <OnlineGalleryFeed initialOnlineImages={images} />
        ) : (
          <p className="text-sm text-black text-center">Nu exista postari</p>
        )}
      </div>
    </main>
  );
};

export default page;
