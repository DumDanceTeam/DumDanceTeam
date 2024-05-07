import * as z from "zod";

export const ContactValidator = z.object({
  nume: z
    .string({
      required_error: "Numele trebuie să conțină cel puțin un caracter !",
    })
    .min(1, "Numele trebuie să conțină minim un caracter !"),
  prenume: z
    .string({
      required_error: "Prenumele trebuie să conțină cel puțin un caracter !",
    })
    .min(1, "Prenumele trebuie să conțină minim un caracter !"),
  email: z
    .string({ required_error: "Email-ul nu poate fi nul !" })
    .email("Email-ul introdus este invalid"),
  mesaj: z
    .string({
      required_error: "Mesajul trebuie să conțină cel puțin un caracter !",
    })
    .min(1, "Mesajul trebuie să conțină minim un caracter !"),
});

export type ContactRequest = z.infer<typeof ContactValidator>;

export const AuthTokenValidator = z.object({
  authToken: z
    .string({ required_error: "Introdu un token de acces" })
    .min(4, "Token-ul trebuie să fie de cel puțin 4 caractere."),
});

export type AuthTokenRequest = z.infer<typeof AuthTokenValidator>;

export const EventValidator = z.object({
  title: z
    .string({
      required_error: "Titlul trebuie să conțină cel puțin un caracter !",
    })
    .min(1, "Titlul trebuie să conțină cel puțin un caracter !"),
  description: z
    .string({
      required_error: "Descrierea trebuie să conțină cel puțin 2 caractere !",
    })
    .min(2, "Descrierea trebuie să conțină cel puțin două caractere !"),
  mainImage: z
    .string({ required_error: "Imagine invalidă !" })
    .refine((value) => value.trim() !== "", {
      message: "Imaginea principală nu poate fi nedefinită",
    }),
  secondImages: z.optional(z.array(z.string())),
  youtubeLink: z.optional(z.string()),
});

export type EventRequest = z.infer<typeof EventValidator>;

export const PartnershipValidator = z.object({
  title: z
    .string({
      required_error: "Titlul trebuie să conțină cel puțin un caracter !",
    })
    .min(1, "Titlul trebuie să conțină cel puțin un caracter !"),
  description: z
    .string({
      required_error: "Descrierea trebuie să conțină cel puțin 2 caractere !",
    })
    .min(2, "Descrierea trebuie să conțină cel puțin două caractere !"),
  mainImage: z
    .string({ required_error: "Imagine invalidă !" })
    .refine((value) => value.trim() !== "", {
      message: "Imaginea principală nu poate fi nedefinită",
    }),
  secondImages: z.optional(z.array(z.string())),
  youtubeLink: z.optional(z.string()),
});

export type PartnershipRequest = z.infer<typeof PartnershipValidator>;

export const TestmonialUpdateValidator = z.object({
  newData: z.object({
    name: z.optional(
      z.string().min(1, "Numele trebuie să conțină cel puțin un caracter !")
    ),
    description: z.optional(
      z.string().min(2, "Descrierea trebuie să conțină cel puțin un caracter !")
    ),
    profileUrl: z.optional(z.string()),
  }),
});

export type TestmonialUpdateRequest = z.infer<typeof TestmonialUpdateValidator>;

export const ImageUpdateValidator = z.object({
  newUrl: z.string({ required_error: "Noul url lipsește" }),
});

export type ImageUpdateRequest = z.infer<typeof TestmonialUpdateValidator>;

export const ImageCreateValidator = z.object({
  imageUrl: z.string({ required_error: "Noul url lipsește" }),
});

export type ImageCreateRequest = z.infer<typeof TestmonialUpdateValidator>;

export const AppointmentDataValidator = z.object({
  parentName: z
    .string()
    .min(2, "Numele tutorelui trebuie să conțină cel puțin 2 caractere ."),
  childName: z
    .string()
    .min(2, "Numele copilului trebuie să conțină cel puțin 2 caractere ."),
  childAge: z
    .string({ required_error: "Vârsta copilului" })
    .min(1, "Vârsta copilului este necesară"),
});

export type AppointmentDataRequest = z.infer<typeof AppointmentDataValidator>;

export const RegistrationDataValidator = z.object({
  nume_copil: z
    .string({
      required_error: "Introdu numele și prenumele copilului",
      invalid_type_error: "Introdu numele și prenumele copilului",
    })
    .min(2, { message: "Numele trebuie să conțină cel puțin 2 caractere" })
    .max(50, { message: "Numele trebuie să conțină cel mult 50 caractere" }),
  varsta_copil: z.string({ required_error: "Introdu vârsta copilului" }),
  scoala: z
    .string({
      required_error: "Introdu școala copilului",
      invalid_type_error: "Introdu școala copilului",
    })
    .min(2, { message: "Școala trebuie să conțină cel puțin 2 caractere" })
    .max(50, { message: "Școala trebuie să conțină cel mult 50 caractere" }),
  grupa_copil: z
    .string({ required_error: "Introdu grupa în care să participe copilul" })
    .min(2)
    .max(50),
  nume_parinte: z
    .string({
      required_error: "Introdu numele părintelui",
      invalid_type_error: "Introdu numele părintelui",
    })
    .min(2, {
      message: "Numele părintelui trebuie să conțină cel puțin 2 caractere",
    })
    .max(50, {
      message: "Numele părintelui trebuie să conțină cel mult 50 caractere",
    }),
  numar_telefon: z
    .string({
      required_error: "Introdu numărul de telefon al părintelui",
      invalid_type_error: "Introdu numărul de telefon al părintelui",
    })
    .min(2, { message: "Introdu numărul de telefon al părintelui" })
    .max(30, "Prea multe caractere"),
  nume_parinte_eveniment: z
    .string({
      required_error: "Introdu numele și prenumele însoțitorului la eveniment",
      invalid_type_error:
        "Introdu numele și prenumele însoțitorului la eveniment",
    })
    .min(2, {
      message: "Introdu numele și prenumele însoțitorului la eveniment",
    })
    .max(50, {
      message:
        "Numele și prenumele însoțitorului la eveniment trebuie să conțină cel mult 50 de caractere",
    }),
  email_parinte: z
    .string({
      required_error: "Email-ul este introdus greșit",
      invalid_type_error: "Email-ul este introdus greșit",
    })
    .email({ message: "Email-ul este introdus greșit" }),
  sesiune_foto: z.boolean().optional(),
  tombola: z.boolean().optional(),
  numeInvitatie: z.string().optional(),
  cum_eveniment: z
    .string({
      required_error: "Câmpul este obligatoriu",
      invalid_type_error: "Câmpul este obligatoriu",
    })
    .min(2, { message: "Câmpul trebuie să conțină cel puțin 2 caractere" }),
});

export type RegistrationDataRequest = z.infer<typeof RegistrationDataValidator>;

export const SummerRegistrationDataValidator = z.object({
  nume_copil: z
    .string({
      required_error: "Introdu numele și prenumele copilului",
      invalid_type_error: "Introdu numele și prenumele copilului",
    })
    .min(2, { message: "Numele trebuie să conțină cel puțin 2 caractere" })
    .max(50, { message: "Numele trebuie să conțină cel mult 50 caractere" }),
  varsta_copil: z.string({ required_error: "Introdu vârsta copilului" }),
  scoala: z
    .string({
      required_error: "Introdu școala copilului",
      invalid_type_error: "Introdu școala copilului",
    })
    .min(2, { message: "Școala/Gradinita trebuie să conțină cel puțin 2 caractere" })
    .max(50, { message: "Școala/Gradinita trebuie să conțină cel mult 50 caractere" }),
  perioada: z
    .string({ required_error: "Introdu perioada în care să participe copilul" })
    .min(2)
    .max(50),
  nume_parinte: z
    .string({
      required_error: "Introdu numele părintelui",
      invalid_type_error: "Introdu numele părintelui",
    })
    .min(2, {
      message: "Numele părintelui trebuie să conțină cel puțin 2 caractere",
    })
    .max(50, {
      message: "Numele părintelui trebuie să conțină cel mult 50 caractere",
    }),
  numar_telefon: z
    .string({
      required_error: "Introdu numărul de telefon al părintelui",
      invalid_type_error: "Introdu numărul de telefon al părintelui",
    })
    .min(2, { message: "Introdu numărul de telefon al părintelui" })
    .max(30, "Prea multe caractere"),
  nume_parinte_eveniment: z
    .string({
      required_error: "Introdu numele și prenumele însoțitorului la eveniment",
      invalid_type_error:
        "Introdu numele și prenumele însoțitorului la eveniment",
    })
    .min(2, {
      message: "Introdu numele și prenumele însoțitorului la eveniment",
    })
    .max(50, {
      message:
        "Numele și prenumele însoțitorului la eveniment trebuie să conțină cel mult 50 de caractere",
    }),
  email_parinte: z
    .string({
      required_error: "Email-ul este introdus greșit",
      invalid_type_error: "Email-ul este introdus greșit",
    })
    .email({ message: "Email-ul este introdus greșit" }),
    sesiune_lunga: z.boolean().optional(),
    sesiune_scurta: z.boolean().optional(),
});

export type SummerRegistrationDataRequest = z.infer<
  typeof SummerRegistrationDataValidator
>;
