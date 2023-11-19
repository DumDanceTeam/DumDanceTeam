import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube, BsTiktok } from "react-icons/bs";

const Socials = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 text-ddtWhite">
        <Link aria-label="Link to Facebook" target="_blank" href="https://www.facebook.com/dumdanceteam">
         <BsFacebook  className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </Link>
        <Link aria-label="Link to Instagram" target="_blank" href="https://www.instagram.com/dumdanceteam">
          <BsInstagram className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </Link>
        <Link aria-label="Link to YouTube" target="_blank" href="https://www.youtube.com/@dumdanceteam">
          <BsYoutube className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </Link>
        <Link aria-label="Link to TikTok" target="_blank" href="https://www.tiktok.com/@dumdanceteam">
          <BsTiktok className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
