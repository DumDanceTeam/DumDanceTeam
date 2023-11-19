import { TestmonialCardProps } from "@/types";
import Image from "next/image";



const TestmonialCard: React.FC<TestmonialCardProps> = ({
  profileImage,
  profileName,
  label,
}) => {
  return (
    <div className="cursor-pointer w-full h-full group max-w-[426px] my-3">
        <div className="w-full flex flex-col gap-2 lg:gap-0 items-center justify-center">
            <div className="lg:-mb-3 lg:z-10">
                <Image
                  loading="lazy"
                    src={profileImage}
                    width={200}
                    height={200}
                    className="object-cover w-[150px] h-[150px] rounded-full"
                    quality={100}
                    
                    alt="profile image"
                />
            </div>
            <div className="w-full shadow-[0px_0px_5px_rgba(255,51,8,.45)] group-hover:shadow-[0px_0px_5px_rgba(255,51,8,.75)] duration-150 p-3 rounded-md">
                <p className="tracking-tighter lg:max-w-[300px] break-words font-light text-[1.1em] xs:text-[1.5em] text-darkGray opacity-[.8]">
                &quot; {label} &quot;
                </p>
                <h6 className="mt-1 text-center font-roboto font-medium">{profileName}</h6>
            </div>
        </div>
      
    </div>
  );
};

export default TestmonialCard;
