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
        numeInvitatie
      };

      const { data } = await axios.post("/api/inscriereEveniment", payload);

      return data;
    },
    onSuccess:()=>{
      toast.success("Te-ai înregistrat cu succes!")
    },
    onError:()=>{
      toast.error("Ceva a mers greșit. Te rugăm să ne contactezi la numărul nostru de telefon sau încearcă mai târziu.")
    },
    onSettled:()=>{
      setTimeout(()=>{
        form.setValue("nume_copil","");
        form.setValue("varsta_copil","");
        form.setValue("scoala","");
        form.setValue("grupa_copil","");
        form.setValue("nume_parinte","");
        form.setValue("numar_telefon","");
        form.setValue("nume_parinte_eveniment","");
        form.setValue("email_parinte","");
        form.setValue("sesiune_foto",false);
        form.setValue("tombola",false);
      }, 1000);
    }
  });

  return (
    <div>
      <Image width={1600} height={800} src={"/event.jpeg"} quality={100} priority className="w-full h-full rounded-[10px]" alt="event"/>
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
              <FormLabel className="font-bold text-lg">Nume Și Prenume Copil</FormLabel>
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
              <FormLabel className="font-bold text-lg">Vârstă Copil</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="number" min={1}/>
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
              <FormLabel className="font-bold text-lg">Școală / Grădiniță</FormLabel>
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
              <FormLabel className="font-bold text-lg">Grupă de Vârstă Aleasă în Cadrul Evenimentului</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                Grupa de vârstă în care se încadrează copilul tău
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
              <FormLabel className="font-bold text-lg">Nume și Prenume Tutore / Reprezentat legal</FormLabel>
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
              <FormLabel className="font-bold text-lg">Număr Telefon</FormLabel>
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
              <FormLabel className="font-bold text-lg">Numele și Prenumele însoțitorului la eveniment</FormLabel>
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
              <FormLabel className="font-bold text-lg">Email Părinte</FormLabel>
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
              <FormLabel className="font-bold text-lg">Sesiune foto Mihai Petre (Opțional)</FormLabel>
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
              <FormLabel className="font-bold text-lg">Doresc să particip și la tombolă (Opțional)</FormLabel>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={isLoading} disabled={isLoading} type="submit" className="bg-[#FFCC02] w-full">Trimite</Button>
      </form>
    </Form>
    </div>
    
  );
};
