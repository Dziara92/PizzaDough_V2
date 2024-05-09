import ContactForm from "../components/contactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto my-9 px-[5px] w-4/5">
      <h1 className=" animate-slideDown text-center mb-8 text-3xl font-semibold md:text-5xl md:mb-16">
        Kontakt
      </h1>
      <section className="container mx-auto my-9 px-[5px] w-4/5 md:mt-20 md:flex md:gap-14 lg:gap-0">
        <div className=" text-center md:text-left lg:w-1/2 lg:text-lg">
          <p className=" mb-2">biuro@pizzadough.com</p>
          <p className=" mb-4">+33 819 XXX 931</p>
          <p className=" mb-2">via Padole 218, Vincenza </p>
          <p className=" mb-2">poniedziałek - niedziela </p>
          <p>7/24</p>
        </div>
        <div className=" mt-8 flex flex-col md:mt-0 lg:w-1/2">
          <ContactForm />
          <p className=" text-xs text-slate-600 text-center md:text-left">
            Administratorem danych osobowych podanych w formularzu jest
            PizzaDough Company, via Padole 218, Vincenza. Zasady przetwarzania
            danych oraz Twoje uprawnienia z tym związane opisane są w polityce
            prywatności.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
