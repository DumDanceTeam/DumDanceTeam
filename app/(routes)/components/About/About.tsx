import React from "react";
import About1 from "./About1";

const About: React.FC = () => {
  return (
    <div className="container mx-auto">
      <About1 title={<p className="text-black text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold font-roboto tracking-tight">
            Povestea{" "}
              Dum <span className="text-black">Dance</span> Team
            {" "}
            . . .
          </p>}  description="În anul 2015, din dorința de a crea performanță în acest sport minunat, a fost înființată Școala de dans Dum Dance Team, care astăzi este mai mult decât o școală de dans. Aceasta a reușit să promoveze dansul cu peste 3.000 de persoane, inclusiv copii și juniori, sub îndrumarea domnului antrenor Claudiu Dumitraşcu."
            imageUrl="https://res.cloudinary.com/dwfidpghc/image/upload/v1700157481/p66wnegsmtvhboofdfz1.jpg"
            />
    </div>
  );
};

export default About;
