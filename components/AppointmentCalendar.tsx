"use client"
import { months } from "@/constants";
import { cn, generateDate } from "@/lib/utils";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import AppointmentData from "./AppointmentData";

const AppointmentCalendar = ({phone_number}:{phone_number:string}) => {
  const days = ["D", "L", "M", "M", "J", "V", "S"];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState<Date | Dayjs>(currentDate);

  useEffect(()=>{
    //get the next available day after today
    
    const originalDate = new Date(currentDate.toDate());

    let nextDay = new Date(originalDate);
    nextDay.setDate(originalDate.getDate()+1);


        
    console.log("day",dayjs(nextDay).day());
    
    while(dayjs(nextDay).day()!==2 && dayjs(nextDay).day()!==4 && dayjs(nextDay).day()!==6 && dayjs(nextDay).day()!==0){
      nextDay.setDate(nextDay.getDate()+1);
    }
    
    setSelectedDate(dayjs(nextDay));

  },[]);
  
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="w-full px-5">
            <div className="flex flex-col xsBig:flex-row items-center justify-between">
                <p className="font-semibold text-[1.2em]">{months[today.month()]}, {today.year()}</p>
                <p className="text-[1em] my-2 font-light text-center hidden xsBig:block">datele disponibile sunt scrise cu negru</p>
                <div className="flex items-center gap-5">
                    <GrFormPrevious className="w-4 h-4 cursor-pointer" onClick={()=>{
                        setToday(today.month(today.month()-1));
                    }}/>
                    <p className="cursor-pointer text-[1em]" onClick={()=>{
                        setToday(currentDate)
                    }}>Mergi la astăzi</p>
                    <GrFormNext className="w-4 h-4 cursor-pointer" onClick={()=>{
                        setToday(today.month(today.month()+1));
                    }}/>
                </div>
                <p className="text-xs my-3 font-light text-center xsBig:hidden">datele disponibile sunt scrise cu negru</p>

            </div>
          <div className="w-full grid grid-cols-7">
            {days.map((day, index) => (
              <div key={index}>
                <p className="h-10 grid place-content-center text-sm text-gray-600">{day}</p>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(({ date, currentMonth, today: isToday }, index) => {
              
              
              let availableDate: boolean = false;
              if((date.day()===2 || date.day()===4 || date.day()===6 || date.day()===0) && currentMonth)
                availableDate=true;
              if(date.toDate()<currentDate.toDate())
                availableDate=false

              return (
                <div
                  key={index}
                  className="py-1 border-t grid place-content-center text-sm"
                >
                  <p
                    className={cn(
                      `h-6 w-6 xs:h-7 xs:w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 grid rounded-full place-content-center text-white ${availableDate ? "hover:bg-black hover:text-white":null} transition-all cursor-pointer`,
                      
                      currentMonth || today.toDate()<date.toDate() ? null : "text-gray-600",
                      isToday ? "bg-lightRed text-black rounded-full pointer-events-none" : null,
                      availableDate && currentMonth ? `text-black hover:text-white ${isToday && "text-white"}`:`${!isToday && "text-gray-400 cursor-default"}`,
                        //@ts-ignore
                        selectedDate.toDate().toDateString()===date.toDate().toDateString() ? `bg-black text-white ${isToday && "bg-lightRed"}`:null,
                      )}
                    onClick={()=>{
                      if(availableDate)
                        setSelectedDate(date)
                    }}
                  >
                    {date.date()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-5 mt-3">
            <div className="">
                <AppointmentData selectedDate={selectedDate} phone_number={phone_number}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
