import { BsFacebook, BsInstagram, BsYoutube, BsTiktok } from "react-icons/bs";

const Socials = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 text-ddtWhite">
        <a target="_blank" href="https://www.facebook.com/dumdanceteam">
         <BsFacebook className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </a>
        <a target="_blank" href="https://www.instagram.com/dumdanceteam">
          <BsInstagram className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@dumdanceteam">
          <BsYoutube className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@dumdanceteam">
          <BsTiktok className="cursor-pointer hover:text-lightRed hover:scale-95 active:scale-90 transition" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
