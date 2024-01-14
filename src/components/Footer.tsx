import logo from "../assets/Link → image.png";

const Footer = () => {
  return (
    <footer className="lg:mt-16 bg-[#FFFFFF] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:p-16 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col gap-2">
            <img className="w-72" src={logo} alt="nom de l'entreprise" />
            <p className="text-gray-400 dark:text-gray-400 font-medium ">
              contact@sikomobility.com
            </p>
            <p className="text-gray-400 dark:text-gray-400 font-medium">
              86 rue Dutot, 75015 Paris
            </p>
            <p className="text-gray-400 dark:text-gray-400 font-medium">
              Siko Mobility respecte les normes sociales et <br />{" "}
              environnementales et s'inscrit dans une démarche de progrès.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Informations
              </h2>
              <ul className="flex flex-col gap-3 text-gray-400 dark:text-gray-400 font-medium">
                <li>Mentions légales</li>
                <li>
                  Conditions générales <br /> de vente
                </li>
                <li>Politique de confidentialité</li>
                <li>RGPD & Cookies</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Siko Mobility
              </h2>
              <ul className="flex flex-col  gap-3 text-gray-400 dark:text-gray-400 font-medium">
                <li>Accueil</li>
                <li>Devenir partenaire</li>
                <li>Qui sommes nous ?</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                nos services
              </h2>
              <ul className="flex flex-col gap-3 text-gray-400 dark:text-gray-400 font-medium">
                <li>Nos services</li>
                <li>Assurance</li>
                <li>Forfait entretien</li>
                <li>Assistance dépannage</li>
                <li>Garantie 3 ans</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021 Siko Mobility. Tous droits réservés.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500  ms-5
                hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
