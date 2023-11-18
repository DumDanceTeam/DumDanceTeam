import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/Button'
import Link from 'next/link'
import { months } from "@/constants";
import { Dayjs } from 'dayjs';
import { Input } from './ui/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppointmentDataValidator } from '@/validators';
import { Checkbox } from './ui/checkbox';

interface AppointmentDataProps {
  selectedDate: Date | Dayjs;
  phone_number: string
}

const AppointmentData: React.FC<AppointmentDataProps> = ({selectedDate, phone_number}) => {
  const submitRef = useRef(null);
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:zodResolver(AppointmentDataValidator),
  });

  const [agreeWithTerms, setAgreeWithTerms] = useState(false);
  const [agreeWithTermsMessage, setAgreeTermsMessage] = useState("");
  

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  useEffect(() => {
    if (errors) {
      setShowErrorMessage(true);
      const timer = setTimeout(() => {
          setShowErrorMessage(false);
      }, 2700);

        return () => clearTimeout(timer);
      }
    }, [errors]);


  useEffect(()=>{
    console.log("errors", errors);
    
  },[errors]);

  useEffect(()=>{
    setTimeout(()=>{
      setAgreeTermsMessage("");
    },2700);
  },[agreeWithTermsMessage]);

  return (
    <div className='flex flex-col md:flex-row items-center md:items-baseline justify-center gap-5'>
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-10 text-xs">
                <div className="flex flex-col gap-3 w-full ">
                    <Input {...register("parentName")} placeholder='Nume și prenume tutore' className='outline-none shadow-[0px_0px_5px_rgba(255,51,8.2,.2)] focus:shadow-[0px_0px_5px_rgba(255,51,8.2,.7)] py-6 w-full lg:w-[400px]'/>
                    {/* @ts-ignore */}
                    {errors && errors.parentName && showErrorMessage ? <p className='text-lightRed text-xs xs:text-sm whitespace-break-spaces'>{errors.parentName.message}</p>:null}
                    <Input {...register("childName")} placeholder='Nume și prenume copil' className='outline-none shadow-[0px_0px_5px_rgba(255,51,8.2,.2)] focus:shadow-[0px_0px_5px_rgba(255,51,8.2,.7)] py-6 w-full'/>
                    {/* @ts-ignore */}
                    {errors && errors.childName && showErrorMessage ? <p className='text-lightRed text-xs xs:text-sm whitespace-break-spaces'>{errors.childName.message}</p>:null}
                    <Input defaultValue={1}  {...register("childAge")} placeholder='Vârsta copil' type='number' className='outline-none shadow-[0px_0px_5px_rgba(255,51,8.2,.2)] focus:shadow-[0px_0px_5px_rgba(255,51,8.2,.7)] py-6 w-full'/>

                </div>
                <div className="flex flex-col mt-10 items-center justify-center gap-1 sm:gap-2.5 text-xs">
                    {/*@ts-ignore */}
                    <p className="font-semibold text-center xxs:text-start sm:text-[1.4em]">Programează pentru data de: {months[selectedDate.month()]}, {selectedDate.date()} {selectedDate.year()}</p>
                  {/*@ts-ignore */}
                    <Button onClick={
                          handleSubmit((data)=>{
                            console.log("Data",data);
                            if(!agreeWithTerms){
                              setAgreeTermsMessage("Acceptă termenii și condițiile");
                              return;
                            }
                            if(data.parentName.trim().length>=2 && data.childName.trim().length>=2){
                              {/* @ts-ignore */}
                              window.location.href=`https://wa.me/${phone_number}?text=Bună mă numesc ${data.parentName}, sunt interesat/ă de o ședință de dans gratuită în data de ${months[selectedDate.month()]}, ${selectedDate.date()} ${selectedDate.year()} pentru ${data.childName} cu vârstă de ${data.childAge} ani`
                            }
                          })
                    } variant={"fill"} className="active:scale-95 transition-transform text-xs sm:text-[1.5em] mt-2.5">Programează ședința</Button>
              
                    {/* <Info className="w-5 h-5"/> */}
                </div>
               
          </div>
          <div className="flex bg-white flex-col items-center justify-center mt-10 shadow-md">
          <div className="bg-white max-w-[500px] h-[400px] p-4 overflow-scroll overflowContainer">
                  <p className='text-center font-bold text-[1.1em]'>Termeni și condiții</p>
                  <p className='leading-8'>
                  *Completarea acestui formular reprezintă acordul expres, clar, liber consimţit şi neechivoc în ceea ce priveşte condiţiile, scopurile şi metodele de procesare a datelor şi informaţiilor cu caracter personal (inclusiv propriile imagini – sub formă de poze sau filmări) respectând astfel cerinţele Regulamentului (UE) 2016/679 (GDPR) privind consimţământul persoanelor fizice cu privire la prelucrarea datelor cu caracter personal.
                  <br/><br/>**Prin înscrierea la această activitate, înțeleg ca locul copilului meu este rezervat si ma oblig sa particip la data si ora aleasa. Ma angajez ca vom fi prezenti cu 10 minute inainte de inceperea activitatii.
                  <br/><br/>**DDT își rezervă dreptul de a face orice modificări ulterioare necesare, cu condiția de a fi anunțate în cel mai scurt timp posibil.
                  <br/><br/>**Declarația de acord: Prin prezenta, confirm că am citit și am înțeles regulile și regulamentele activității și mă angajez să le respect în totalitate.
                  <br/><br/>**Exonerare de răspundere: În calitate de reprezentant legat al participantului, înțeleg și accept că organizatorul nu este responsabil pentru accidentele sau daunele care pot surveni în timpul sau în legătură cu acest eveniment, și renunț la orice pretenție legală împotriva organizatorului.
                  <br/><br/>**Informații cu caracter personal: Sunt de acord ca datele personale, furnizate în cadrul acestui formular, să fie colectate și prelucrate în conformitate cu politica de confidențialitate a organizatorului.
                  <br/><br/>**Consimțământ pentru minori:Declar că am autoritatea de a înregistra și a da consimțământul în numele minorilor care participă la acest eveniment.
                  <br/><br/>**Drepturile de imagine:Aprob utilizarea imaginilor și înregistrărilor video realizate în timpul acestui eveniment pentru scopuri promoționale sau informative.	&#34;
                  <br/><br/>**Termenii și condițiile generale:Participarea la acest eveniment implică acceptarea tuturor termenilor și condițiilor stabilite de organizator.	&#34;
                  <br/><br/>**Acord de confidențialitate:Datele personale furnizate vor fi păstrate confidențiale și nu vor fi partajate cu terțe părți fără consimțământul dumneavoastră, cu excepția cazurilor prevăzute de lege.
                  </p>
                  
          </div>
          <div onClick={()=>setAgreeWithTerms(prev=>!prev)} className="cursor-pointer flex items-center gap-2 font-bold justify-center my-1">
                  <Checkbox checked={agreeWithTerms}/>
                    Sunt de acord cu termenii și condiții
                    
            </div>
            <p className='text-lightRed sm:text-[1.2em]'>{agreeWithTermsMessage}</p>

          </div>
    </div>
  )
}

export default AppointmentData
