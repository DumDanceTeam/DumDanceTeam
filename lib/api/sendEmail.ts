import { ContactRequest } from "@/validators";
import axios from "axios";

export default async function sendEmail(payload: ContactRequest){
    const res = await axios.post("/api/sendEmail",payload);

    return res;
}