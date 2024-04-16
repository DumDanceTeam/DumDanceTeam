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
  nume_copil: z.string().min(2).max(50),
  prenume_copil: z.string().min(2).max(50),
  varsta_copil: z.string(),
  grupa_copil: z.string().min(2).max(50),
  nume_parinte: z.string().min(2).max(50),
  prenume_parinte: z.string().min(2).max(50),
  nume_parinte_eveniment: z.string().min(2).max(50),
  email_parinte: z.string().min(2).max(50),
  sesiune_foto: z.boolean().optional(),
  tombola: z.boolean().optional(),
});

export type RegistrationDataRequest = z.infer<typeof RegistrationDataValidator>;
