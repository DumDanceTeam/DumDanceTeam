"use client";
import { Button } from "@/components/ui/Button";
import { Loader, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthTokenRequest, AuthTokenValidator } from "@/validators";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
   const [checkLogin, setCheckLogin] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthTokenRequest>({
    resolver: zodResolver(AuthTokenValidator),
  });

  const router = useRouter()
  const {mutate: checkToken, isLoading} = useMutation({
    mutationFn: async({ authToken }:AuthTokenRequest)=>{
      const payload = {
        authToken
      }

      const { data } = await axios.post("/api/checkToken", payload)

      return data;
    },
    onError:(err)=>{
      if(err instanceof AxiosError)
        if(err.response?.status==400 && err.response.statusText==="invalid token")
          return toast.error("Token incorect :(")
     return toast.error("Ceva nu a functionat... Incearca din nou !")
    },
    onSuccess:()=>{
      router.push("/dashboard");
      toast.success("Te-ai conectat la contul de admin !")
    }
  })


  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  useEffect(() => {
    if (errors) {
      setShowErrorMessage(true);
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 2300);

      return () => clearTimeout(timer);
    }
  }, [errors]);


  useEffect(()=>{
    try{
      checkAlreadyLogged();
    }catch(err){
      setCheckLogin(false);
    }
  },[]);

  async function checkAlreadyLogged(){
    setCheckLogin(true);
    const res = await axios.get('/api/alreadyLogged');
    
    if(res.data.msg==="Autentificat"){
      setCheckLogin(false);
      router.push("/dashboard");
    }
    else setCheckLogin(false);
  }

  return (
    <div className="">
      <div className="container mx-auto my-20">
        <div className="flex items-center justify-center">
          <div className="">
            <form
              onSubmit={handleSubmit((data) => checkToken(data))}
              className="bg-black rounded-md p-2 py-5 flex gap-3"
            >
              <input
                {...register("authToken")}
                placeholder="introdu token-ul de acces"
                className="placeholder:text-sm bg-transparent rounded-sm p-1 outline-none border-b border-[rgba(255,255,255,.4)] text-ddtWhite text-sm"
              />
              <Button variant={"ghost"} type="submit" isLoading={isLoading}>
                Continuă <Lock className="w-4 h-4" />
              </Button>
            </form>
            <div className="">
              {showErrorMessage && errors.authToken?.message ? (
                <p className="text-sm text-center text-lightRed">
                  {errors.authToken.message}
                </p>
              ) : null}
              {checkLogin ? (
                <div className="flex items-center justify-center">
                  <p className="text-sm text-center text-black">
                    verficăm permisiunile...
                  </p>
                  <Loader className="w-4 h-4 animate-spin"/>
                </div>
                
              ):null}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
