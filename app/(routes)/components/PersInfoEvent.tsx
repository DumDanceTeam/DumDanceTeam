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
import { useRouter, useSearchParams } from "next/navigation";

export const PersInfoEvent = ({}) => {
  const params = useSearchParams();
  const invitationName = params.get("nume");
  const router = useRouter();
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
      cum_eveniment,
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
        cum_eveniment,
      };

      const { data } = await axios.post("/api/inscriereEveniment", payload);

      return data;
    },
    onSuccess: () => {
      router.push("/inscriere-cu-succes");
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
        form.setValue("cum_eveniment", "");
      }, 1000);
    },
  });

  return (
    <div>
      <Image
        width={6000}
        height={3140}
        src={"/mihai.png"}
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
              cum_eveniment: form.getValues("cum_eveniment"),
            })
          )}
          className="border-2 mt-10 border-[#3AB5FB] rounded-[6px] p-10 space-y-8 max-w-[1000px] mx-auto"
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
                    <SelectItem value="8 - 13 ani">8 - 13 ani</SelectItem>
                    <SelectItem value="14 - 18 ani">14 - 18 ani</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Deocamdată nu avem orele exacte...dar estimăm în jurul
                  prânzului. Vă vom comunica ora exactă a evenimentului
                  personal, după încheierea perioadei de înscriere. Este
                  important pentru noi să organizăm totul cu mare atenție și să
                  ne asigurăm că fiecare participant se va bucura de o
                  experiență de neuitat.
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
                <FormDescription>
                  Te rugăm să verfici ca numărul fie corect. Pentru că aici te
                  vom anunța ora și toate detaliile.
                </FormDescription>
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
                <FormDescription>
                  Copii trebuie să fie însoțiți la eveniment, fie de un părinte,
                  o bunică sau o mătușă...Scrie-ne cine îl va însoți pe copilul
                  tău.
                </FormDescription>
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
              <FormItem className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex flex-col">
                  <FormLabel className="font-bold text-lg md:whitespace-nowrap">
                    Optez pentru o sesiune foto cu Mihai Petre și prietenii
                  </FormLabel>
                </div>

                <FormControl>
                  <div className="">
                    <Input
                      {...field}
                      type="checkbox"
                      value={field.value ? "true" : "false"}
                      className="w-[50px]"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tombola"
            render={({ field }) => (
              <FormItem className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex flex-col">
                  <FormLabel className="font-bold text-lg">
                    Optez pentru participarea copilului la tombola cu premii
                    educaționale din cadrul evenimentului
                  </FormLabel>
                  <FormDescription>
                    Nu-ți fă griji! Toți copiii vor fi premiați, dar avem și o
                    tombolă specială cu premii educative pentru copii.
                  </FormDescription>
                </div>

                <FormControl>
                  <div className="">
                    <Input
                      {...field}
                      type="checkbox"
                      value={field.value ? "true" : "false"}
                      className="w-[50px]"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cum_eveniment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-lg">
                  Cine te-a invitat sau cum ai aflat de evenimentul nostru ?
                </FormLabel>
                <FormDescription>
                  Te rog spune-ne cine te-a invitat sau de unde ai aflat de
                  evenimentul nostru pentru că ne dorim să recompensăm aceasta
                  persoană.
                </FormDescription>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-10">
            <p className="text-center font-bold text-[1.5em]">
              Informații eveniment
            </p>
            <p className="text-start text-[1.5em]">🎉 Ce aducem noi?</p>
            <p>
              <span className="font-bold">O oră de distracție non-stop!</span>{" "}
              Vom umple aerul cu ritmuri vesele, multă mișcare și o doză
              sănătoasă de bună dispoziție!
              <br />
              <br />
              <span className="font-bold">
                Lecții de dans interactivă cu DDT !
              </span>{" "}
              Antrenorii și instructorii noștri DDT sunt gata să te învețe pașii
              cei mai cool și să-ți dea energie pozitivă pentru zile întregi!
              <br />
              <br />
              <span className="font-bold">
                Dans cu Mihai Petre, pe bune !
              </span>{" "}
              Da, ai citit bine! Ai ocazia unică să înveți mișcări de dans de la
              legenda dansului, care este pentru prima dată în Arad !<br />
              <br />
              <span className="font-bold">Sesiune foto de senzație!</span> Hai
              să facem amintiri de neuitat! O poză cu Mihai Petre și prietenii
              tăi va fi cu siguranță momentul care va străluci în albumul tău de
              amintiri !<br />
              <br />
              <span className="font-bold">
                Ceremonie de premiere pentru toți!
              </span>{" "}
              Nu există niciun pierzător când vine vorba de distracție! Fiecare
              copil va primi o recompensă pentru efortul lor!
              <br />
              <br />
              <span className="font-bold">
                Tombolă cu premii de neratat!
              </span>{" "}
              Ce zici de o aventură educațională plină de surprize? Participă la
              tombolă și poți câștiga premii deosebite care îți vor deschide
              mintea și inima!
              <br />
              <br />
              <span className="font-bold">
                Posibilitatea părinților de a se relaxa sau chiar de a intra în
                ritm!
              </span>{" "}
              Părinții curajoși pot lăsa toate grijile acasă și pot lua parte la
              distracție, fie stând pe margine și savurând momentele, fie dând o
              tură de dans alături de cei mici!
              <br />
              <br />
              <span className="text-start text-[1.5em]">
                🎉 Ce aduceți voi?{" "}
              </span>
              <br />
              <span className="font-bold">Bună dispoziție</span> în pachet mare!
              <br />
              <br />
              <span className="font-bold">O ținută lejeră</span> pentru dans și
              distracție!
              <br />
              <br />
              <span className="font-bold">Pantofi curați</span> de schimb pentru
              a face față provocărilor cursului de dans!
              <br />
              ...iar de restul ne ocupăm noi! 🎶
              <br />
              <br />
              Așadar, pregătește-ți zâmbetul și spiritul de aventură, pentru că
              noi suntem aici să ne asigurăm că vei pleca acasă cu amintiri
              minunate în pași de dans și cu inima plină de bucurie! 💃🕺
            </p>
          </div>
          <div className="bg-white p-2 rounded-md max-h-[300px] overflow-scroll">
            <p>
              Termeni și Condiții
              <br />
              <br />
              1. Participarea: Participarea la eveniment este gratuită și
              deschisă tuturor persoanelor interesate, indiferent de vârstă sau
              nivel de pregătire în dans.
              <br />
              <br />
              2. Înregistrarea: Participarea la cursul de dans organizat in
              cadrul evenimentului ”Te invitam la dans cu Dum Dance Team și
              Mihai Petre” din 11 mai 2024 de la Palatul Cultural Arad, este
              condiționată de înscrierea în prealabil prin intermediul site-ului
              nostru web www.dumdanceteam.com, până în data de 08.05.2024,
              inclusiv. Pentru orice alte informații folosiți următoarele date
              de contact: e-mail dumdanceteam@yahoo.com sau la numărul de
              telefon 0747914993.
              <br />
              <br />
              3. Limita de participanți: Numărul de locuri disponibile este
              limitat, iar înscrierile se vor face în ordinea cronologică. În
              momentul ocupării tuturor locurile disponibile, înscrierile vor fi
              închise. Prin înscrierea la această activitate, înțeleg ca locul
              copilului meu este rezervat si ma oblig sa particip la data si ora
              aleasa. Mă angajez ca vom fi prezenti cu 10 minute inainte de
              începerea activitatii.
              <br />
              <br />
              4. Accesul la locație: Accesul la locația evenimentului se va face
              cu 10 minute înainte de începerea activității, conform
              instrucțiunilor primite de la personalul de organizare.
              Participanții (copiii) trebuie să fie însoțiți și sunt rugați să
              respecte regulile și indicațiile echipei de securitate pentru a
              asigura un mediu sigur și plăcut pentru toți.
              <br />
              <br />
              5. Responsabilitate: Participanții își asumă întreaga
              responsabilitate pentru eventualele accidente sau prejudicii
              suferite în timpul participării la cursuri sau activitățile
              organizate în cadrul evenimentului.
              <br />
              <br />
              6. Confidențialitate: Toate informațiile personale furnizate în
              timpul înregistrării vor fi tratate cu confidențialitate și vor fi
              utilizate exclusiv în scopul organizării acestui eveniment. Nu vom
              partaja informațiile cu terțe părți fără consimțământul explicit
              al participantului.
              <br />
              <br />
              7. Drepturi de imagine: Participanții își exprimă acordul pentru
              utilizarea imaginilor sau înregistrărilor video realizate în
              timpul evenimentului în scopuri de promovare și publicitate a
              activităților noastre.
              <br />
              <br />
              8. Modificări și anulări: Echipa de organizare își rezervă dreptul
              de a face modificări în programul evenimentului sau de a anula
              anumite activități în caz de forță majoră sau alte circumstanțe
              neprevăzute. Participanții vor fi informați în timp util despre
              orice modificări sau anulări.
              <br />
              <br />
              9. Consimțământ legal: Prin participarea la eveniment, fiecare
              participant confirmă că a citit și înțeles acești termeni și
              condiții și își exprimă consimțământul în mod liber și informat
              pentru participarea la activitățile organizate în cadrul
              evenimentului. Completarea acestui formular reprezintă acordul
              expres, clar, liber consimţit şi neechivoc în ceea ce priveşte
              condiţiile, scopurile şi metodele de procesare a datelor şi
              informaţiilor cu caracter personal (inclusiv propriile imagini –
              sub formă de poze sau filmări) respectând astfel cerinţele
              Regulamentului (UE) 2016/679 (GDPR) privind consimţământul
              persoanelor fizice cu privire la prelucrarea datelor cu caracter
              personal.
              <br />
              <br />
              10. Eventuale modificări: DDT își rezervă dreptul de a face orice
              modificări ulterioare necesare, cu condiția de a fi anunțate în
              cel mai scurt timp posibil.
              <br />
              <br />
              11. Exonerare de răspundere: În calitate de reprezentant legat al
              participantului, înțeleg și accept că organizatorul nu este
              responsabil pentru accidentele sau daunele care pot surveni în
              timpul sau în legătură cu acest eveniment, și renunț la orice
              pretenție legală împotriva organizatorului.
              <br />
              <br />
              12. Consimțământ pentru minori: Declar că am autoritatea de a
              înregistra și a da consimțământul în numele minorilor care
              participă la acest eveniment.
              <br />
              <br />
              13. Drepturile de imagine: Aprob utilizarea imaginilor și
              înregistrărilor video realizate în timpul acestui eveniment pentru
              scopuri promoționale sau informative.
              <br />
              <br />
              14. Termenii și condițiile generale: Participarea la acest
              eveniment implică acceptarea tuturor termenilor și condițiilor
              stabilite de organizator.
              <br />
              <br />
              15. Declarația de acord: Prin prezenta, confirm că am citit și am
              înțeles regulile și regulamentele activității și mă angajez să le
              respect în totalitate.
            </p>
          </div>
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
