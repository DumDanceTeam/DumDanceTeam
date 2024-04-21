"use client";
import { FC, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  RegistrationDataRequest,
  RegistrationDataValidator,
} from "@/validators";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

export const PersInfoEvent = ({}) => {
  const params = useSearchParams();
  const invitationName = params.get("nume");

  console.log(invitationName);

  const form = useForm<RegistrationDataRequest>({
    resolver: zodResolver(RegistrationDataValidator),
  });

  const { mutate: createRegistration, isLoading } = useMutation({
    mutationFn: async ({
      nume_copil,
      varsta_copil,
      scoala,
      grupa_copil,
      nume_parinte,
      numar_telefon,
      nume_parinte_eveniment,
      email_parinte,
      sesiune_foto,
      tombola,
      numeInvitatie,
    }: RegistrationDataRequest) => {
      const payload: RegistrationDataRequest = {
        nume_copil,
        varsta_copil,
        scoala,
        grupa_copil,
        nume_parinte,
        numar_telefon,
        nume_parinte_eveniment,
        email_parinte,
        sesiune_foto,
        tombola,
        numeInvitatie,
      };

      const { data } = await axios.post("/api/inscriereEveniment", payload);

      return data;
    },
    onSuccess: () => {
      toast.success("Te-ai înregistrat cu succes!");
    },
    onError: () => {
      toast.error(
        "Ceva a mers greșit. Te rugăm să ne contactezi la numărul nostru de telefon sau încearcă mai târziu."
      );
    },
    onSettled: () => {
      setTimeout(() => {
        form.setValue("nume_copil", "");
        form.setValue("varsta_copil", "");
        form.setValue("scoala", "");
        form.setValue("grupa_copil", "");
        form.setValue("nume_parinte", "");
        form.setValue("numar_telefon", "");
        form.setValue("nume_parinte_eveniment", "");
        form.setValue("email_parinte", "");
        form.setValue("sesiune_foto", false);
        form.setValue("tombola", false);
      }, 1000);
    },
  });

  return (
    <div>
      <Image
        width={1600}
        height={800}
        src={"/event.jpeg"}
        quality={100}
        priority
        className="w-full h-full rounded-[10px]"
        alt="event"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() =>
            createRegistration({
              nume_copil: form.getValues("nume_copil"),
              varsta_copil: form.getValues("varsta_copil"),
              scoala: form.getValues("scoala"),
              grupa_copil: form.getValues("grupa_copil"),
              nume_parinte: form.getValues("nume_parinte"),
              numar_telefon: form.getValues("numar_telefon"),
              nume_parinte_eveniment: form.getValues("nume_parinte_eveniment"),
              email_parinte: form.getValues("email_parinte"),
              sesiune_foto: form.getValues("sesiune_foto"),
              tombola: form.getValues("tombola"),
              numeInvitatie: invitationName?.trim() || "",
            })
          )}
          className="border-2 mt-10 border-[#3AB5FB] rounded-[6px] p-10 space-y-8 max-w-[500px] mx-auto"
        >
          <FormField
            control={form.control}
            name="nume_copil"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Nume și prenume copil
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="varsta_copil"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Vârstă copil
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="number" min={1} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scoala"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Școală / Grădiniță
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grupa_copil"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Alege grupa de vârstă potrivită copilului tau
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="selectează grupa" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="4 - 7 ani">4 - 7 ani</SelectItem>
                    <SelectItem value="8 - 12 ani">8 - 12 ani</SelectItem>
                    <SelectItem value="12 - 16 ani">12 - 16 ani</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Deocamdată nu avem orele exacte...dar estimăm că în jurul prânzului. Vă vom comunica ora exactă a evenimentului personal, după încheierea perioadei de înscriere. Este important pentru noi să organizăm totul cu mare atenție și să ne asigurăm că fiecare participant se va bucura de o experiență de neuitat.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nume_parinte"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Nume și prenume tutore / reprezentat legal
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numar_telefon"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Număr telefon de contact
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nume_parinte_eveniment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Numele și prenumele adultului însoțitor la eveniment
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email_parinte"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  E-mail tutore / reprezentant legal
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sesiune_foto"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Optez pentru o sesiune foto cu Mihai Petre și prietenii (Opțional)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="checkbox"
                    value={field.value ? "true" : "false"}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tombola"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                Vrei să încerci norocul și să câștigi premii deosebite? Participă la tombola cu premii educaționale și lasă-te surprins de aventurile care te așteaptă!
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="checkbox"
                    value={field.value ? "true" : "false"}
                  />
                </FormControl>
                <FormDescription>
                  Nu-ți fă griji! Toți copiii vor fi premiați, dar avem și o
                  tombolă specială cu premii educative pentru copii.
                </FormDescription>
                <div>
                  <p className="text-center font-bold">
                    Ce aducem noi?
                  </p>
                  <p>
                  <span className="font-bold">O oră de distracție non-stop!</span> Vom umple aerul cu ritmuri vesele, multă mișcare și o doză sănătoasă de bună dispoziție!<br/><br/>
<span className="font-bold">Lecții de dans interactivă cu DDT !</span> Antrenorii și instructorii noștri DDT sunt gata să te învețe pașii cei mai cool și să-ți dea energie pozitivă pentru zile întregi!<br/><br/>
<span className="font-bold">Dans cu Mihai Petre, pe bune!</span>Da, ai citit bine! Ai ocazia unică să înveți mișcări de dans de la legenda dansului, care este pentru prima dată în Arad !<br/><br/>
<span className="font-bold">Sesiune foto de senzație!</span>  Hai să facem amintiri de neuitat! O poză cu Mihai Petre și prietenii tăi va fi cu siguranță momentul care va străluci în albumul tău de amintiri !<br/><br/>
<span className="font-bold">Ceremonie de premiere pentru toți!</span>  Nu există niciun pierzător când vine vorba de distracție! Fiecare copil va primi o recompensă pentru efortul lor!<br/><br/>
<span className="font-bold">Tombolă cu premii de neratat!</span>  Ce zici de o aventură educațională plină de surprize? Participă la tombolă și poți câștiga premii deosebite care îți vor deschide mintea și inima!<br/><br/>
<span className="font-bold">Posibilitatea părinților de a se relaxa sau chiar de a intra în ritm!</span>  Părinții curajoși pot lăsa toate grijile acasă și pot lua parte la distracție, fie stând pe margine și savurând momentele, fie dând o tură de dans alături de cei mici!

🎉 Ce aduceți voi?
Bună dispoziție în pachet mare!
O ținută lejeră pentru dans și distracție!
Pantofi curați de schimb pentru a face față provocărilor cursului de dans!
...iar de restul ne ocupăm noi! 🎶

Așadar, pregătește-ți zâmbetul și spiritul de aventură, pentru că noi suntem aici să ne asigurăm că vei pleca acasă cu amintiri minunate în pași de dans și cu inima plină de bucurie! 💃🕺
                  </p>
                </div>
                <div className="bg-white p-2 rounded-md max-h-[300px] overflow-scroll">
                  <p>
                    Termeni și condiții *Completarea acestui formular reprezintă
                    acordul expres, clar, liber consimţit şi neechivoc în ceea
                    ce priveşte condiţiile, scopurile şi metodele de procesare a
                    datelor şi informaţiilor cu caracter personal (inclusiv
                    propriile imagini – sub formă de poze sau filmări)
                    respectând astfel cerinţele Regulamentului (UE) 2016/679
                    (GDPR) privind consimţământul persoanelor fizice cu privire
                    la prelucrarea datelor cu caracter personal. *Prin
                    înscrierea la această activitate, înțeleg ca locul copilului
                    meu este rezervat si ma oblig sa particip la data si ora
                    aleasa. Ma angajez ca vom fi prezenti cu 10 minute inainte
                    de inceperea activitatii. *DDT își rezervă dreptul de a face
                    orice modificări ulterioare necesare, cu condiția de a fi
                    anunțate în cel mai scurt timp posibil. *Declarația de
                    acord: Prin prezenta, confirm că am citit și am înțeles
                    regulile și regulamentele activității și mă angajez să le
                    respect în totalitate. *Exonerare de răspundere: În calitate
                    de reprezentant legat al participantului, înțeleg și accept
                    că organizatorul nu este responsabil pentru accidentele sau
                    daunele care pot surveni în timpul sau în legătură cu acest
                    eveniment, și renunț la orice pretenție legală împotriva
                    organizatorului. *Informații cu caracter personal: Sunt de
                    acord ca datele personale, furnizate în cadrul acestui
                    formular, să fie colectate și prelucrate în conformitate cu
                    politica de confidențialitate a organizatorului.
                    *Consimțământ pentru minori: Declar că am autoritatea de a
                    înregistra și a da consimțământul în numele minorilor care
                    participă la acest eveniment. *Drepturile de imagine: Aprob
                    utilizarea imaginilor și înregistrărilor video realizate în
                    timpul acestui eveniment pentru scopuri promoționale sau
                    informative. *Termenii și condițiile generale: Participarea
                    la acest eveniment implică acceptarea tuturor termenilor și
                    condițiilor stabilite de organizator. *Acord de
                    confidențialitate: Datele personale furnizate vor fi
                    păstrate confidențiale și nu vor fi partajate cu terțe părți
                    fără consimțământul dumneavoastră, cu excepția cazurilor
                    prevăzute de lege.
                  </p>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            className="bg-[#FFCC02] w-full"
          >
            Trimite
          </Button>
        </form>
      </Form>
    </div>
  );
};
