import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs";
import { Metadata } from "next";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function generateDate(month=dayjs().month(), year=dayjs().year()){
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  
  //create prefix date
  for(let i=0;i<firstDateOfMonth.day();i++){
    arrayOfDate.push({date:firstDateOfMonth.day(i), currentMonth:false});
  }


  //generate current date
  for(let i = firstDateOfMonth.date();i<=lastDateOfMonth.date();i++){
    arrayOfDate.push({date:firstDateOfMonth.date(i), currentMonth: true, today:firstDateOfMonth.date(i).toDate().toDateString()===dayjs().toDate().toDateString()});
  }

  const reamaining = 43-arrayOfDate.length;

  for(let i=lastDateOfMonth.date()+1;i<=lastDateOfMonth.date()+reamaining;i++){
    arrayOfDate.push({date:firstDateOfMonth.date(i), currentMonth:false});
  }

  return arrayOfDate;
}

export function formatDateToDDMMYY(date: Date) {
  const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-indexed) and pad with leading zero if necessary
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}






export function constructMetadata({
  title = "Dum Dance Team",
  description = "Dum Dance Team este mai mult decât o echipă sportivă... suntem o comunitate cu prietenii și relații între cursanți, clădită de-a lungul timpului, a căror prezență s-a remarcat prin rezultatele obținute la nivel mondial și național.",
  image = "/logo.jpg",
  icons = "/logo.jpg",
  noIndex = false,
  keywords,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean,
  keywords?: string[],
} = {}): Metadata {
  return {
    title,
    keywords:["DDT","cluburi de dans","dum dance team","Dum Dance Team","cluburi de dans romania","cluburi de dans arad","dans","scoala de dans","dans romania","dumdanceteam"],
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        }
      ]
    },
    icons,
    metadataBase: new URL('https://dum-dance-team.vercel.app'),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: true,
        follow: true
      }
    })
  }
}

export function extractYouTubeVideoID(url: string) {
  const pattern = /(?:\?|&)v=([^&]+)/;
  const match = url.match(pattern);
  
  if (match) {
    return match[1];
  } else {
    // Handle the case when the URL format doesn't match.
    return null;
  }
}