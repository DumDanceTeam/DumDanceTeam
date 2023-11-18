import About1 from "../../app/(routes)/components/About/About1";
import StatisticsDesktop from "../../app/(routes)/components/Statistics/StatisticsDesktop";
import StatisticsMobile from "../../app/(routes)/components/Statistics/StatisticsMobile";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-10 xlmd:gap-20">
      <About1
        whereClause="despre-noi"
        title={
          <p className="xlmd:text-end text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold font-roboto tracking-tight whitespace-break-spaces">
            Campioni, Prieteni, Echipă . . .
          </p>
        }
        description="Dum Dance Team este mai mult decât o echipă sportivă... suntem o comunitate cu prietenii și relații între cursanți, clădită de-a lungul timpului, a căror prezență s-a remarcat prin rezultatele obținute la nivel mondial și național. Ne mândrim cu locul I în clasamentul MONDIAL DANCESPORT EUROPE - JUNIOR, locul III în clasamentul MONDIAL DANCESPORT EUROPE JUNIOR - STANDARD și multe altele."
        imageUrl="https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/i57sbi1p0hiplpd5i4r7.jpg"
      />
      <div className="hidden sm:block">
        <StatisticsDesktop />
      </div>
      <div className="sm:hidden">
        <StatisticsMobile />
      </div>{" "}
      <About1
        whereClause="despre-noi2"
        title={
          <p className="text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold font-roboto tracking-tight">
            Arta în mișcare . . .
          </p>
        }
        description="Zile pline de pasiune și energie în cadrul cantonamentului nostru de dans!

        Cu fiecare mișcare, simțim cum ne apropiem de perfecțiune. Echipa noastră se antrenează din greu pentru a crea pe ringul de dans cele mai spectaculoase momente și pentru noul sezon competițional.
        
         Aici, dansul devine artă, iar prietenii noștri devin familia noastră."
        imageUrl="https://res.cloudinary.com/dwfidpghc/image/upload/v1700157482/filxc81od9mrepqgdb40.jpg"
      />{" "}
    </div>
  );
};

export default Introduction;
