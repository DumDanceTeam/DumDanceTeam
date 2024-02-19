import { faq } from "@/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/Accordion";
import Link from "next/link";

const FAQ: React.FC = () => {
  return (
    <div id="faq" className="w-full">
      <div className="container mx-auto">
        <p className="text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold">
          Întrebări frecvente
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full max-h-[300px] overflow-y-scroll"
        >
          {faq.map((faqItem, index) => (
            <AccordionItem
              key={index}
              value={`${index}`}
              className="max-h-[300px] w-full overflow-y-scroll"
            >
              <AccordionTrigger className="sm:text-[1.5em]">
                {faqItem.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="w-full sm:text-[1.2em]">{faqItem.answer}</p>
                {faqItem.linkUrl ? (
                  <Link href={faqItem.linkUrl} className="text-[#0000EE]">
                    {faqItem.linkLabel || faqItem.linkUrl}
                  </Link>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );//ceva
};

export default FAQ;
