import { heroSections } from "../datas/HeroSection";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:mt-4">
      <h2 className="font-extrabold font-Montserrat max-w-4xl text-2xl md:text-4xl lg:text-5xl md:text-center text-[#313131] dark:text-white">
        Découvrez notre gamme de services pour toutes les{" "}
        <span className="text-blue-500 dark:text-white">mobilités</span>
      </h2>
      <div className="lg:flex gap-5 mt-4 font-Montserrat">
        {heroSections.map((hero) => (
          <div className="mt-4 relative lg:max-w-lg md:max-w-2xl">
            <img
              className="rounded-lg  h-full"
              src={hero.image}
              alt="photo d'une personne sur une moto"
            />
            <div className="flex flex-col backdrop-blur-sm gap-5 absolute bottom-0 h-30 lg:h-32 p-2 rounded-lg  w-full text-white bg-gray-500/40">
              <h3 className="text-lg font-semibold">{hero.title}</h3>
              <p className="text-sm">{hero.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
