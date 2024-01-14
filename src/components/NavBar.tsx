import logo from "../assets/Link → image.png";
import mobileLogo from "../assets/logo.png";
import Headroom from "react-headroom";
import { useState, useEffect } from "react";

type NavBarProps = {
  lightMode: boolean;
  onChangeTheme: () => void;
};

const NavBar: React.FC<NavBarProps> = ({
  lightMode = false,
  onChangeTheme,
}: NavBarProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Appeler une fois lors du montage pour définir l'état initial

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    // version mobile
    return (
      <Headroom>
        <div className="flex items-center justify-between gap-4 mr-5 pt-5">
          <img
            className="w-10 ml-5"
            src={mobileLogo}
            alt="Logo de l'entreprise"
          />
          <nav className="flex gap-4 z-50">
            <button className="w-24 h-12 dark:text-blue-300 font-Montserrat rounded-2xl border border-neutral-200 font-bold bg-zinc-100 bg-opacity-80 text-black dark:bg-gray-800 dark:bg-opacity-80">
              Menu
            </button>
            <button
              onClick={onChangeTheme}
              className="flex justify-center items-center w-14 h-12 rounded-2xl border border-neutral-200 bg-zinc-100 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
            >
              {lightMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </Headroom>
    );
  }

  return (
    <Headroom>
      <header className="dark:bg-[#111827] bg-[#FFFFFF] font-Montserrat flex w-full z-50 justify-between items-center lg:justify-around p-4 border-b-2 dark:border-[#4B5563]">
        <img className="w-56" src={logo} alt="logo de l'entreprise" />
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            className=" text-black dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-500"
            href=""
          >
            Espace Marchand
          </a>
          <div className="flex items-center gap-2 text-black dark:text-white font-semibold cursor-pointer hover:text-blue-500 dark:hover:text-blue-500">
            <a href="">Nos services</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <button className="text-blue-500 text-xs font-bold border-2 px-4 py-2 border-blue-500 rounded-lg hover:text-white hover:bg-blue-500">
            Simulation
          </button>
          <button
            onClick={onChangeTheme}
            className="flex justify-center items-center w-14 h-12 "
          >
            {lightMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>
    </Headroom>
  );
};

export default NavBar;
