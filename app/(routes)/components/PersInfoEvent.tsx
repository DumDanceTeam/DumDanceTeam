"use client";
import { FC } from "react";
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

const formSchema = z.object({
  nume_copil: z.string().min(2).max(50),
  prenume_copil: z.string().min(2).max(50),
  varsta_copil: z.number().min(3, "Copilul nu poate fi mai mic de 3 ani"),
  grupa_copil: z.string().min(2).max(50),
  nume_parinte: z.string().min(2).max(50),
  prenume_parinte: z.string().min(2).max(50),
  nume_parinte_eveniment: z.string().min(2).max(50),
  email_parinte: z.string().min(2).max(50),
});

interface PersInfoEventProps {}

export const PersInfoEvent: FC<PersInfoEventProps> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nume_copil: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="dropw"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dropdown</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="nume_parinte"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nume tutore</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
