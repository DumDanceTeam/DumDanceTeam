import {
  FAQItem,
  FooterInfo,
  FooterLink,
  NavbarLink,
  TestmonialCardProps,
} from "@/types";

export const navbarLinks: Array<NavbarLink> = [
  {
    label: "Despre Noi",
    link: "/#despre-noi",
  },
  {
    label: "Noutăți",
    link: "/noutati",
  },
  {
    label:"Dansul mirilor",
    link: "/dansul-mirilor"
  },
  {
    label:"Regulament",
    link: "/regulament",
  },
  {
    label:"susține performanțele DDT",
    link: `/sustine-performanta`,
  }
];

export const testmonials: Array<TestmonialCardProps> = [
  {
    profileImage: "/profile.avif",
    profileName: "C. Darian Rareș",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur porro perferendis fugit deserunt eaque ad, excepturi explicabo esse quis!",
  },
  {
    profileImage: "/profile.avif",
    profileName: "C. Darian Rareș",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur porro perferendis fugit deserunt eaque ad, excepturi explicabo esse quis!",
  },
  {
    profileImage: "/profile.avif",
    profileName: "C. Darian Rareș",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur porro perferendis fugit deserunt eaque ad, excepturi explicabo esse quis!",
  },
];

export const faq: Array<FAQItem> = [
  {
    question: "Care este vârsta minimă ?",
    answer:
      "Vârsta minimă este de 5 ani, dar cel mai important este dacă copilul poate sta o oră în sală fără părinți și să fie atent pentru ca ora să fie eficientă. Chiar și copiii de 4 ani sunt bineveniți la o oră de încercare GRATUITĂ, iar ulterior veți primi feedback pentru a decide dacă este indicat să mai așteptați sau nu!",
  },
  {
    question: "Cum și când ne putem înscrie ?",
    answer:"Programează o ședința gratuită și noi îți ghidăm primii pași în lumea dansului !",
    linkUrl:"/#calendar",
    linkLabel:"Înscrie-te aici la un curs de încercare"
  },
  {
    question: "Ce se învață la cursurile DDT ?",
    answer:
      "Pe lângă dezvoltarea abilităților de dans, încurajăm și adoptarea unei posturi corecte într-un colectiv educat si disciplinat. Respectul, grația, eleganța, socializarea și munca în echipă sunt câteva dintre oportunitățile de dezvoltare pe care copilul dvs. cu siguranță le va dobândi. Suntem nerăbdători să ne cunoaștem !😁",
  },
];


export const footerInfo: Array<FooterInfo> = [
  {
    label: "str. Sighișoara nr. 1 Arad",
  },
  {
    label: "dumdanceteam@yahoo.com",
  },
  {
    label: "0747 914 993",
  },
];

export const qualities: Array<FooterInfo> = [
  {
    label: "Profesionalism, loialitate și devotament.",
  },
  {
    label:
      "Disciplina, unitatea și munca sunt principiile care stau la baza clubului nostru.",
  },
  {
    label:
      "Preocuparea minuțioasă pentru fiecare sportiv în parte, indiferent de nivelul de performanță la care se află.",
  },
  {
    label:
      "Oferirea unor servicii de calitate care să aducă valoare adăugată activității sportivilor.",
  },
  {
    label:
      "Suntem hotărâți să continuăm eforturile noastre comune de a realiza o politică în care punem sportivul pe primul loc, prin oferirea unor servicii de calitate.",
  },
];

export const months: Array<string> = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];
