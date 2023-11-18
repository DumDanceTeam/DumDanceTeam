import Pas from "./Pas";

const Pasi = () => {
  return (
    <div className="flex-1 flex flex-col gap-10">
      <p className="text-start text-[1.7em] xs:text-[2em] sm:text-[2.5em] font-bold text-black sm:whitespace-nowrap">
        Ce trebuie să facem ?
      </p>
      <Pas
        pasNumber={1}
        pasTitle="Ora de dans - o nouă experiență extraordinară pentru copilul tău !"
        pasDescription="Programează prima ședință gratuită și te așteptăm cu copilul tău să vadă despre ce este vorba."
      />
      <Pas
        pasNumber={2}
        pasTitle="Înscrie-ți copilul într-o echipă profesionistă cu un colectiv educat și disciplinat !"
        pasDescription="Înscrierea presupune completarea FIȘEI DE ÎNSCRIERE la sala de dans și achitarea abonamentului lunar, iar copilul este înscris și poate participa la toate cursurile și activitățile DDT."
      />
      <Pas
        pasNumber={3}
        pasTitle="Continuitate și perseverență!" pasDescription="În fiecare copil există un talent nedescoperit, pe care dorim să îl șlefuim. Așa cum repetiția este mama învățăturii, secretul succesului este continuitatea și perseverența, așadar încurajează-ți copilul să participe la cât mai multe cursuri pentru a se dezvolta cât mai armonios și complex."
      />
    </div>
  );
};

export default Pasi;
