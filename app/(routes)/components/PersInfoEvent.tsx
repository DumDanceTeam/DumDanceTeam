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

interface PersInfoEventProps {}

export const PersInfoEvent: FC<PersInfoEventProps> = ({}) => {
  const form = useForm<RegistrationDataRequest>({
    resolver: zodResolver(RegistrationDataValidator),
  });

  const { mutate: createRegistration } = useMutation({
    mutationFn: async ({
      nume_copil,
      prenume_copil,
      varsta_copil,
      grupa_copil,
      nume_parinte,
      prenume_parinte,
      nume_parinte_eveniment,
      email_parinte,
      sesiune_foto,
      tombola,
    }: RegistrationDataRequest) => {
      const payload: RegistrationDataRequest = {
        nume_copil,
        prenume_copil,
        varsta_copil,
        grupa_copil,
        nume_parinte,
        prenume_parinte,
        nume_parinte_eveniment,
        email_parinte,
        sesiune_foto,
        tombola,
      };

      const { data } = await axios.post("/api/inscriereEveniment", payload);

      return data;
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() =>
          createRegistration({
            nume_copil: form.getValues("nume_copil"),
            prenume_copil: form.getValues("prenume_copil"),
            varsta_copil: form.getValues("varsta_copil"),
            grupa_copil: form.getValues("grupa_copil"),
            nume_parinte: form.getValues("nume_parinte"),
            prenume_parinte: form.getValues("prenume_parinte"),
            nume_parinte_eveniment: form.getValues("nume_parinte_eveniment"),
            email_parinte: form.getValues("email_parinte"),
            sesiune_foto: form.getValues("sesiune_foto"),
            tombola: form.getValues("tombola"),
          })
        )}
        className="border-2 border-lightRed rounded-[6px] p-10 space-y-8"
      >
        <FormField
          control={form.control}
          name="nume_copil"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nume copil</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="prenume_copil"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prenume copil</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="varsta_copil"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vârstă copil</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} type="number" />
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
              <FormLabel>Grupă vârstă</FormLabel>
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
              <FormLabel>Nume tutore</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prenume_parinte"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prenume tutore</FormLabel>
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
              <FormLabel>Nume părinte însoțitor eveniment</FormLabel>
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
              <FormLabel>Email părinte</FormLabel>
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
              <FormLabel>Sesiune foto Mihai Petre (Opțional)</FormLabel>
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
              <FormLabel>Doresc să particip și la tombolă (Opțional)</FormLabel>
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
        <Button type="submit">Trimite</Button>
      </form>
    </Form>
  );
};
