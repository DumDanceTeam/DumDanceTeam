import AppointmentCalendar from "./AppointmentCalendar";

const Appointment = () => {
    
  return (
    <div className="mt-10 mb-20">
        <div className="container mx-auto">
        <p className='font-semibold my-9'><span className="text-lightRed text-lg">|</span> Contactează-ne</p>

        <p className="text-center text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold">
            Programează o ședință <strong className="text-lightRed">gratuită</strong> și noi îți vom ghida primii pași în lumea dansului !
            </p>
            <div className="mt-10">
                <AppointmentCalendar phone_number={`${process.env.PHONE_NUMBER}`}/>
            </div>
        </div>
    </div>
  )
}

export default Appointment