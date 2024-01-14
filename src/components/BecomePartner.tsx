import React from "react";

const BecomePartner: React.FC = () => {
  return (
    <div className="mt-8 font-Montserrat border-2 rounded-lg border-blue-500 p-4 lg:p-6 m-5 text-start max-w-6xl lg:mx-auto">
      <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#313131] dark:text-white">
        Vous avez un site{" "}
        <span className="text-blue-500 dark:text-white">e-commerce</span> ou une{" "}
        <span className="text-blue-500 dark:text-white">boutique</span> ?
      </h3>
      <p className="text-base lg:text-lg  mt-6 text-start text-[#616161] dark:text-gray-400">
        Rejoignez nos partenaires et offrez de multiples services et avantages à
        vos clients. Augmentez votre chiffre d’affaire avec notre solution en
        financement.
      </p>
      <div className="flex items-center relative mt-8">
        <button className="flex items-center text-blue-500 border-2 py-2 px-4 border-blue-500 rounded-lg hover:text-white hover:bg-blue-500 font-semibold">
          Devenir partenaire
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 ml-1 mt-1 hover:text-white"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BecomePartner;
